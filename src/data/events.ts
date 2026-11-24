// Event and class content is managed with Pages CMS and stored as one JSON file per event in
// /content/events (see /.pages.yml).
//
// The site is a static export, so whether an event is upcoming, in progress or past can't be decided
// at build time alone: components call getEventStatus() with the current time from useNow().
import { ImageDetail } from "./facility";
import { mediaPath, optionalList, optionalString } from "./content";
import { _zonePages, ZoneProps } from "./zones";

/** Event times are entered in Pages CMS as local wall-clock times in the makerspace's time zone. */
export const EVENT_TIME_ZONE = "America/Toronto";

export type EventType = "class" | "event";
export type EventStatus = "upcoming" | "in-progress" | "past";

export interface EventSession {
  /** Start time (ms since epoch). */
  start: number;
  /** End time (ms since epoch). */
  end: number;
  /** Duration in hours. */
  duration: number;
}

export interface EventProps {
  slug: string;
  title: string;
  type: EventType;
  description: string;
  image: string;
  /** Sessions sorted by start time; always at least one. */
  sessions: EventSession[];
  /** Regular price; undefined or 0 means free. */
  price?: number;
  /** Discounted price for members, when lower than the regular price. */
  memberPrice?: number;
  zeffyEmbedUrl?: string;
  zones: ZoneProps[];
  soldOut: boolean;
  photos: ImageDetail[];
  /** HTML from the Pages CMS rich-text editor. */
  blog?: string;
}

/** Shape of an event file as written by Pages CMS. Optional fields may be saved as "" or null. */
interface EventContent {
  title?: string | null;
  slug?: string | null;
  type?: string | null;
  description?: string | null;
  image?: string | null;
  date?: string | null;
  duration?: number | string | null;
  additionalSessions?: { date?: string | null; duration?: number | string | null }[] | null;
  price?: number | string | null;
  memberPrice?: number | string | null;
  zeffyUrl?: string | null;
  zones?: string | string[] | null;
  soldOut?: boolean | null;
  photos?: { imageSrc?: string | null; altText?: string | null }[] | null;
  blog?: string | null;
}

// ---------------------------------------------------------------------------------------------
// Time zone helpers (deterministic on the build server and in every browser)
// ---------------------------------------------------------------------------------------------

const wallClockFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: EVENT_TIME_ZONE,
  hourCycle: "h23",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "short",
});

interface WallClock {
  year: number;
  month: number; // 1-12
  day: number;
  hour: number;
  minute: number;
  weekday: number; // 0 = Sunday
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Wall-clock time in the event time zone. */
function toWallClock(ms: number): WallClock & { second: number } {
  const parts = wallClockFormat.formatToParts(new Date(ms));
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")) % 24,
    minute: Number(get("minute")),
    second: Number(get("second")),
    weekday: WEEKDAYS.indexOf(get("weekday")),
  };
}

function timeZoneOffset(ms: number): number {
  const w = toWallClock(ms);
  return Date.UTC(w.year, w.month - 1, w.day, w.hour, w.minute, w.second) - Math.floor(ms / 1000) * 1000;
}

/**
 * Parse a Pages CMS date ("yyyy-MM-dd'T'HH:mm", or "yyyy-MM-dd") as a wall-clock time in the
 * event time zone. Strings with an explicit offset (e.g. "...Z" or "...-05:00") are respected.
 */
export function parseEventDate(value: string | null | undefined): number | undefined {
  const v = optionalString(value)?.trim();
  if (!v) return undefined;
  if (/(Z|[+-]\d{2}:?\d{2})$/i.test(v) && v.includes("T")) {
    const t = Date.parse(v);
    return Number.isNaN(t) ? undefined : t;
  }
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T ](\d{1,2}):(\d{2}))?/.exec(v);
  if (!m) return undefined;
  const wall = Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] ?? 0), +(m[5] ?? 0));
  // Two passes handle times near a daylight saving change.
  let t = wall - timeZoneOffset(wall);
  t = wall - timeZoneOffset(t);
  return t;
}

function formatClock(w: WallClock): string {
  const h = w.hour % 12 || 12;
  const suffix = w.hour < 12 ? "a.m." : "p.m.";
  return w.minute === 0 ? `${h} ${suffix}` : `${h}:${String(w.minute).padStart(2, "0")} ${suffix}`;
}

/** e.g. "Sat, Dec 5, 2026" */
export function formatEventDay(ms: number): string {
  const w = toWallClock(ms);
  return `${WEEKDAYS[w.weekday]}, ${MONTHS[w.month - 1]} ${w.day}, ${w.year}`;
}

/** e.g. "6 – 8:30 p.m." or "11 a.m. – 1 p.m." */
export function formatEventTimeRange(start: number, end: number): string {
  const s = toWallClock(start);
  const e = toWallClock(end);
  const startText = formatClock(s);
  const endText = formatClock(e);
  const sameHalf = (s.hour < 12) === (e.hour < 12) && s.day === e.day;
  return `${sameHalf ? startText.replace(/ [ap]\.m\.$/, "") : startText} – ${endText}`;
}

/** e.g. "2 hrs", "1.5 hrs", "45 min" */
export function formatDuration(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  const rounded = Math.round(hours * 100) / 100;
  return `${rounded} hr${rounded === 1 ? "" : "s"}`;
}

export function formatPrice(amount: number): string {
  return `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}

// ---------------------------------------------------------------------------------------------
// Status
// ---------------------------------------------------------------------------------------------

export function eventStart(event: EventProps): number {
  return event.sessions[0].start;
}

export function eventEnd(event: EventProps): number {
  return Math.max(...event.sessions.map((s) => s.end));
}

/**
 * upcoming: the first session hasn't started.
 * in-progress: between the start of the first session and the end of the last one
 *   (a single session that's underway, or a multi-session series with sessions left).
 * past: the last session has ended.
 */
export function getEventStatus(event: EventProps, now: number): EventStatus {
  if (now < eventStart(event)) return "upcoming";
  if (now < eventEnd(event)) return "in-progress";
  return "past";
}

/** Registration is open for upcoming events that aren't sold out and have a Zeffy form. */
export function isRegistrationOpen(event: EventProps, now: number): boolean {
  return getEventStatus(event, now) === "upcoming" && !event.soldOut && !!event.zeffyEmbedUrl;
}

/** The session that's underway or next, or the last one once the event is over. */
export function currentOrNextSession(event: EventProps, now: number): EventSession {
  return event.sessions.find((s) => s.end > now) ?? event.sessions[event.sessions.length - 1];
}

/** Upcoming and in-progress events, soonest first. */
export function upcomingEvents(events: EventProps[], now: number): EventProps[] {
  return events
    .filter((e) => getEventStatus(e, now) !== "past")
    .sort((a, b) => eventStart(a) - eventStart(b) || a.title.localeCompare(b.title));
}

/** Past events, most recent first. */
export function pastEvents(events: EventProps[], now: number): EventProps[] {
  return events
    .filter((e) => getEventStatus(e, now) === "past")
    .sort((a, b) => eventEnd(b) - eventEnd(a) || a.title.localeCompare(b.title));
}

// ---------------------------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------------------------

function optionalNumber(value: number | string | null | undefined): number | undefined {
  if (value === null || value === undefined || value === "") return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * Convert a Zeffy link (e.g. https://www.zeffy.com/en-CA/ticketing/my-class) to its embed URL
 * (https://www.zeffy.com/embed/ticketing/my-class). Embed URLs are used as-is.
 */
export function zeffyEmbedUrl(value: string | null | undefined): string | undefined {
  const v = optionalString(value)?.trim();
  if (!v) return undefined;
  let url: URL;
  try {
    url = new URL(v.startsWith("http") ? v : `https://www.zeffy.com/${v.replace(/^\/+/, "")}`);
  } catch {
    return undefined;
  }
  const segments = url.pathname.split("/").filter(Boolean);
  const embed = segments.indexOf("embed");
  if (embed >= 0 && segments.length > embed + 2) {
    return `https://www.zeffy.com/embed/${segments.slice(embed + 1, embed + 3).join("/")}`;
  }
  // Skip a locale segment such as "en-CA" or "fr-CA": /<locale>/<form type>/<campaign>
  const rest = /^[a-z]{2}(-[A-Za-z]{2})?$/.test(segments[0] ?? "") ? segments.slice(1) : segments;
  if (rest.length >= 2) return `https://www.zeffy.com/embed/${rest[0]}/${rest[1]}`;
  return undefined;
}

/** Reference fields may save a zone's slug or its file path (e.g. "content/zones/cnc.json"). */
function zoneSlug(value: string): string {
  return value.trim().replace(/^.*\//, "").replace(/\.json$/i, "");
}

function toZones(value: string | string[] | null | undefined): ZoneProps[] {
  const values = Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : [];
  const slugs = values.filter((v) => typeof v === "string" && v.trim()).map(zoneSlug);
  return _zonePages.filter((zone) => slugs.includes(zone.slug));
}

const DEFAULT_DURATION_HOURS = 2;

function toEventProps(content: EventContent, key: string): EventProps | undefined {
  const title = optionalString(content.title)?.trim();
  const slug = optionalString(content.slug)?.trim();
  const image = mediaPath(content.image);
  const firstStart = parseEventDate(content.date);
  if (!title || !slug || !image || firstStart === undefined) {
    console.warn(`Skipping event ${key}: title, slug, image and date are required.`);
    return undefined;
  }

  const mainDuration = optionalNumber(content.duration) ?? DEFAULT_DURATION_HOURS;
  const toSession = (start: number, duration: number): EventSession => ({
    start,
    duration,
    end: start + duration * 60 * 60 * 1000,
  });
  const sessions = [toSession(firstStart, mainDuration)];
  for (const s of optionalList(content.additionalSessions) ?? []) {
    const start = parseEventDate(s?.date);
    if (start !== undefined) sessions.push(toSession(start, optionalNumber(s.duration) ?? mainDuration));
  }
  sessions.sort((a, b) => a.start - b.start);

  const price = optionalNumber(content.price);
  const memberPrice = optionalNumber(content.memberPrice);

  const event: EventProps = {
    slug,
    title,
    type: content.type?.toLowerCase() === "event" ? "event" : "class",
    description: optionalString(content.description)?.trim() ?? "",
    image,
    sessions,
    zones: toZones(content.zones),
    soldOut: content.soldOut === true,
    photos: (optionalList(content.photos) ?? [])
      .filter((p) => optionalString(p?.imageSrc))
      .map((p) => ({ imageSrc: mediaPath(p.imageSrc!), altText: optionalString(p.altText) ?? title })),
  };
  if (price !== undefined && price > 0) event.price = price;
  if (memberPrice !== undefined && event.price !== undefined && memberPrice < event.price) event.memberPrice = memberPrice;
  const zeffy = zeffyEmbedUrl(content.zeffyUrl);
  if (zeffy) event.zeffyEmbedUrl = zeffy;
  const blog = optionalString(content.blog);
  if (blog && blog.replace(/<[^>]*>/g, "").trim()) event.blog = blog;
  return event;
}

const context = require.context("../../content/events", false, /\.json$/);
const seen = new Set<string>();

export const _events: EventProps[] = context
  .keys()
  .filter((key) => key.startsWith("./"))
  .sort()
  .map((key) => toEventProps(context(key) as EventContent, key))
  .filter((e): e is EventProps => {
    if (!e) return false;
    if (seen.has(e.slug)) {
      console.warn(`Skipping duplicate event slug "${e.slug}".`);
      return false;
    }
    seen.add(e.slug);
    return true;
  });

export function eventsForZone(events: EventProps[], zoneSlug: string): EventProps[] {
  return events.filter((e) => e.zones.some((z) => z.slug === zoneSlug));
}

export function eventTypeLabel(type: EventType): string {
  return type === "event" ? "Event" : "Class";
}
