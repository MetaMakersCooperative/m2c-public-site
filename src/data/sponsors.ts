// Sponsor content is managed with Pages CMS and stored in /content/sponsors.json (see /.pages.yml).
import sponsorContent from "../../content/sponsors.json";
import { mediaPath, optionalString } from "./content";

export interface SponsorProps {
  name: string;
  url: string;
  image: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  amount: number;
}

export interface PastSponsorProps {
  name: string;
  image?: string;
  url?: string;
  amount: number;
  year: number;
}

export interface OtherSupportProps {
  name: string;
  image?: string;
}

interface SponsorContent {
  sponsors?: SponsorProps[] | null;
  pastSponsors?: Partial<Record<keyof PastSponsorProps, string | number | null>>[] | null;
  otherSupport?: Partial<Record<keyof OtherSupportProps, string | null>>[] | null;
}

const content = sponsorContent as SponsorContent;

/** Drop keys whose value is undefined so objects match the original hand-written shape. */
function compact<T extends object>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
}

export const _sponsors: SponsorProps[] = (content.sponsors ?? []).map((s) => ({
  name: s.name,
  url: s.url,
  image: mediaPath(s.image),
  tier: s.tier,
  amount: Number(s.amount),
}));

export const _pastSponsors: PastSponsorProps[] = (content.pastSponsors ?? []).map((s) =>
  compact({
    name: String(s.name),
    image: mediaPath(s.image as string | null | undefined),
    url: optionalString(s.url as string | null | undefined),
    amount: Number(s.amount),
    year: Number(s.year),
  })
);

export const _otherSupport: OtherSupportProps[] = (content.otherSupport ?? []).map((s) =>
  compact({
    name: String(s.name),
    image: mediaPath(s.image),
  })
);
