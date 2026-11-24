import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/app/sitemap";
import { _events, eventTypeLabel } from "@/data/events";
import EventDetail from "./event-detail";

export const dynamicParams = false;

/**
 * Static export needs at least one path for a dynamic route, so a placeholder page is built when
 * there are no events yet. It renders the 404 page and isn't linked or listed in the sitemap.
 */
const NO_EVENTS_PLACEHOLDER = "none";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (_events.length === 0) return [{ slug: NO_EVENTS_PLACEHOLDER }];
  return _events.map((event) => ({ slug: event.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = _events.find((x) => x.slug === slug);
  if (!event) return {};
  const title = `${event.title} | ${eventTypeLabel(event.type)}`;
  return {
    title,
    description: event.description,
    openGraph: {
      url: `${BASE_URL}/events/${slug}`,
      type: "website",
      title: `${event.title} @ Meta Makers Cooperative`,
      description: event.description,
      images: `${BASE_URL}/${event.image}`,
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = _events.find((x) => x.slug === slug);
  if (!event) notFound();
  return <EventDetail event={event} />;
}
