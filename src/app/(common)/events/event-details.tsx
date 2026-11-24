import { Badge, Box, HStack, Link as ChakraLink, Stack, StackProps, Text, Wrap, WrapProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCalendarDays, LuCircleDot, LuClock, LuTicket, LuTicketX } from "react-icons/lu";
import {
  EventProps,
  EventStatus,
  eventTypeLabel,
  formatDuration,
  formatEventDay,
  formatEventTimeRange,
  formatPrice,
} from "@/data/events";
import { ZoneProps } from "@/data/zones";

/** Accent used to highlight classes/events that are in progress. */
export const IN_PROGRESS_PALETTE = "orange";

export function eventHref(event: EventProps): string {
  return `/events/${event.slug}`;
}

export function ZoneTags({ zones, size = "md", ...props }: { zones: ZoneProps[]; size?: "sm" | "md" } & WrapProps) {
  if (zones.length === 0) return null;
  return (
    <Wrap gap={2} {...props}>
      {zones.map((zone) => (
        <Badge key={zone.slug} asChild variant="outline" size={size} colorPalette="gray" gap={1.5} px={size === "sm" ? 1.5 : 2} _hover={{ bg: "bg.muted" }}>
          <NextLink href={`/${zone.slug}`}>
            <Box as="span" width="8px" height="8px" borderRadius="full" bg={zone.color} flexShrink={0} />
            {zone.name}
          </NextLink>
        </Badge>
      ))}
    </Wrap>
  );
}

export function TypeBadge({ event }: { event: EventProps }) {
  return (
    <Badge variant="solid" colorPalette={event.type === "class" ? "purple" : "teal"} boxShadow="sm" px={2}>
      {eventTypeLabel(event.type)}
    </Badge>
  );
}

/** Badge for the event's state; nothing for upcoming events with open registration. */
export function StatusBadge({ event, status }: { event: EventProps; status: EventStatus }) {
  if (status === "in-progress") {
    return (
      <Badge variant="solid" colorPalette={IN_PROGRESS_PALETTE} boxShadow="sm" px={2} gap={1}>
        <LuCircleDot /> In progress
      </Badge>
    );
  }
  if (status === "upcoming" && event.soldOut) {
    return (
      <Badge variant="solid" colorPalette="red" boxShadow="sm" px={2} gap={1}>
        <LuTicketX /> Sold out
      </Badge>
    );
  }
  if (status === "past") {
    return (
      <Badge variant="solid" colorPalette="gray" boxShadow="sm" px={2}>
        Past {eventTypeLabel(event.type).toLowerCase()}
      </Badge>
    );
  }
  return null;
}

export interface SessionListProps extends StackProps {
  event: EventProps;
  now: number;
  /** Show at most this many sessions, followed by "+ N more". */
  max?: number;
}

/** One line per session: date, time range and duration. Sessions that have ended are dimmed. */
export function SessionList({ event, now, max, ...props }: SessionListProps) {
  const shown = max ? event.sessions.slice(0, max) : event.sessions;
  const hidden = event.sessions.length - shown.length;
  const multiple = event.sessions.length > 1;
  return (
    <Stack gap={1} fontSize="sm" {...props}>
      {multiple && (
        <Text fontWeight="semibold" fontSize="sm">
          {event.sessions.length} sessions
        </Text>
      )}
      {shown.map((session, index) => {
        const done = session.end <= now;
        const current = session.start <= now && now < session.end;
        return (
          <HStack
            key={session.start + "-" + index}
            gap={2}
            alignItems="flex-start"
            color={done ? "fg.subtle" : undefined}
            textDecoration={done && multiple ? "line-through" : undefined}
            fontWeight={current ? "semibold" : undefined}
          >
            <Box as="span" paddingTop="3px" flexShrink={0} color={current ? `${IN_PROGRESS_PALETTE}.fg` : "fg.muted"}>
              {current ? <LuCircleDot /> : <LuCalendarDays />}
            </Box>
            <Text as="span">
              {formatEventDay(session.start)}
              <Text as="span" color={done ? undefined : "fg.muted"}>
                {" · "}
                {formatEventTimeRange(session.start, session.end)} ({formatDuration(session.duration)})
              </Text>
            </Text>
          </HStack>
        );
      })}
      {hidden > 0 && (
        <Text color="fg.muted" paddingLeft={6}>
          + {hidden} more session{hidden === 1 ? "" : "s"}
        </Text>
      )}
    </Stack>
  );
}

/** "Sat, Dec 5, 2026 · 6 – 8 p.m." for a single line summary. */
export function SessionSummary({ event, now, ...props }: { event: EventProps; now: number } & StackProps) {
  const next = event.sessions.find((s) => s.end > now) ?? event.sessions[0];
  return (
    <Stack gap={0.5} fontSize="sm" {...props}>
      <HStack gap={2}>
        <Box as="span" color="fg.muted" flexShrink={0}>
          <LuCalendarDays />
        </Box>
        <Text as="span">{formatEventDay(next.start)}</Text>
      </HStack>
      <HStack gap={2} color="fg.muted">
        <Box as="span" flexShrink={0}>
          <LuClock />
        </Box>
        <Text as="span">
          {formatEventTimeRange(next.start, next.end)}
          {event.sessions.length > 1 ? ` · ${event.sessions.length} sessions` : ""}
        </Text>
      </HStack>
    </Stack>
  );
}

/** Regular price plus the member price and savings, or "Free". */
export function EventPrice({ event, ...props }: { event: EventProps } & StackProps) {
  if (event.price === undefined) {
    return (
      <HStack gap={2} fontSize="sm" {...props}>
        <Box as="span" color="fg.muted">
          <LuTicket />
        </Box>
        <Text fontWeight="semibold">Free</Text>
      </HStack>
    );
  }
  const savings = event.memberPrice !== undefined ? event.price - event.memberPrice : 0;
  return (
    <HStack gap={2} fontSize="sm" alignItems="flex-start" {...props}>
      <Box as="span" color="fg.muted" paddingTop="3px">
        <LuTicket />
      </Box>
      <Stack gap={0.5}>
        <Text>
          <Text as="span" fontWeight="semibold">
            {formatPrice(event.price)}
          </Text>
          {event.sessions.length > 1 ? " for all sessions" : ""}
        </Text>
        {event.memberPrice !== undefined && (
          <HStack gap={2} wrap="wrap">
            <Text>
              Members{" "}
              <Text as="span" fontWeight="semibold" color="purple.fg">
                {event.memberPrice === 0 ? "free" : formatPrice(event.memberPrice)}
              </Text>
            </Text>
            <Badge colorPalette="green" variant="subtle" size="sm" px={1.5}>
              Save {formatPrice(savings)}
            </Badge>
          </HStack>
        )}
      </Stack>
    </HStack>
  );
}

export function MembershipNote() {
  return (
    <Text fontSize="sm" color="fg.muted">
      Members save on classes and events.{" "}
      <ChakraLink asChild variant="underline">
        <NextLink href="/membership">Learn about membership</NextLink>
      </ChakraLink>
    </Text>
  );
}
