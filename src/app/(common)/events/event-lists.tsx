"use client";

import { Button, Center, Grid, GridProps, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { _events, eventsForZone, pastEvents, upcomingEvents } from "@/data/events";
import useNow from "@/components/useNow";
import Section, { SectionProps } from "../section";
import EventCard from "./event-card";

/** Cards shown at first, and added by each "load more" click, on the classes page. */
export const EVENTS_PAGE_SIZE = 6;
/** Cards shown in the home and zone page previews. */
export const EVENTS_PREVIEW_COUNT = 4;

const fullGridColumns = { base: "repeat(3, 1fr)", lgDown: "repeat(2, 1fr)", smDown: "repeat(1, 1fr)" };
const compactGridColumns = { base: "repeat(4, 1fr)", lgDown: "repeat(2, 1fr)", smDown: "repeat(1, 1fr)" };

function PagedEventGrid({
  events,
  moreLabel,
  ...props
}: { events: ReturnType<typeof upcomingEvents>; moreLabel: string } & GridProps) {
  const [count, setCount] = useState(EVENTS_PAGE_SIZE);
  const remaining = events.length - count;
  return (
    <VStack gap={8} width="100%">
      <Grid templateColumns={fullGridColumns} gap={8} width="100%" {...props}>
        {events.slice(0, count).map((event) => (
          <EventCard key={event.slug} event={event} layout="full" />
        ))}
      </Grid>
      {remaining > 0 && (
        <Button variant="outline" colorPalette="purple" size="lg" px={6} onClick={() => setCount((c) => c + EVENTS_PAGE_SIZE)}>
          {moreLabel} ({remaining} more)
        </Button>
      )}
    </VStack>
  );
}

/** Classes page: upcoming and in-progress classes/events, soonest first. */
export function UpcomingEvents() {
  const now = useNow();
  const events = upcomingEvents(_events, now);
  if (events.length === 0) {
    return (
      <Text fontSize={{ base: "lg", mdDown: "md" }}>
        There are no upcoming classes or events right now. Check the calendar below, or visit us again soon!
      </Text>
    );
  }
  return <PagedEventGrid events={events} moreLabel="Load more" />;
}

/** Classes page: past classes/events, most recent first. Hidden when there are none. */
export function PastEventsSection(props: Omit<SectionProps, "children">) {
  const now = useNow();
  const events = pastEvents(_events, now);
  if (events.length === 0) return null;
  return (
    <Section {...props}>
      <Text fontSize={{ base: "xl", mdDown: "md" }} paddingBottom={8}>
        See what we&apos;ve been making! Check out photos and recaps from past classes and events.
      </Text>
      <PagedEventGrid events={events} moreLabel="Show more" />
    </Section>
  );
}

export interface EventPreviewSectionProps extends Omit<SectionProps, "children"> {
  /** Only show events tagged with this zone. */
  zoneSlug?: string;
  intro?: string;
  /** Text shown when there's nothing upcoming. When omitted, the section is hidden instead. */
  emptyText?: string;
}

/** Home and zone pages: the next few classes/events as compact cards, plus a link to the classes page. */
export function EventPreviewSection({ zoneSlug, intro, emptyText, ...props }: EventPreviewSectionProps) {
  const now = useNow();
  const source = zoneSlug ? eventsForZone(_events, zoneSlug) : _events;
  const events = upcomingEvents(source, now).slice(0, EVENTS_PREVIEW_COUNT);
  if (events.length === 0 && !emptyText) return null;
  return (
    <Section {...props}>
      <Stack gap={8}>
        {(events.length === 0 ? emptyText : intro) && (
          <Text fontSize={{ base: "xl", mdDown: "md" }}>{events.length === 0 ? emptyText : intro}</Text>
        )}
        {events.length > 0 && (
          <Grid templateColumns={compactGridColumns} gap={6} width="100%">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} layout="compact" />
            ))}
          </Grid>
        )}
        <Center>
          <Button asChild variant="solid" colorPalette="purple" size={{ base: "lg", mdDown: "md" }} px={{ base: 6, mdDown: 4 }}>
            <NextLink href="/classes">
              See all classes &amp; events <LuArrowRight />
            </NextLink>
          </Button>
        </Center>
      </Stack>
    </Section>
  );
}
