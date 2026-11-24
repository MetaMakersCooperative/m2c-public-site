"use client";

import { Box, Button, Card, CardRootProps, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import NextLink from "next/link";
import { LuCamera, LuCircleDot, LuTicketX } from "react-icons/lu";
import { EventProps, getEventStatus, isRegistrationOpen } from "@/data/events";
import useNow from "@/components/useNow";
import {
  EventPrice,
  eventHref,
  IN_PROGRESS_PALETTE,
  SessionList,
  SessionSummary,
  StatusBadge,
  TypeBadge,
  ZoneTags,
} from "./event-details";

export interface EventCardProps extends CardRootProps {
  event: EventProps;
  /** "full" for the classes page, "compact" for previews on the home and zone pages. */
  layout?: "full" | "compact";
}

/** Max photo thumbnails shown on a past event's card. */
const THUMBNAILS = 4;

export default function EventCard({ event, layout = "full", ...props }: EventCardProps) {
  const now = useNow();
  const status = getEventStatus(event, now);
  const href = eventHref(event);
  const compact = layout === "compact";
  const inProgress = status === "in-progress";
  const past = status === "past";
  // Past events show their photos: use the first one as the card image when there is one.
  const cardImage = past && event.photos.length > 0 ? event.photos[0].imageSrc : event.image;

  return (
    <Card.Root
      overflow="hidden"
      height="100%"
      boxShadow={inProgress ? `0 0 0 2px var(--chakra-colors-${IN_PROGRESS_PALETTE}-solid), 0 4px 14px var(--chakra-colors-${IN_PROGRESS_PALETTE}-muted)` : "sm"}
      borderWidth={inProgress ? 0 : undefined}
      transition="all 0.3s ease-in-out"
      _hover={{ transform: "translateY(-4px)", boxShadow: inProgress ? undefined : "lg" }}
      _dark={{ backgroundColor: "#282828" }}
      {...props}
    >
      <NextLink href={href} aria-label={event.title} tabIndex={-1}>
        <Box position="relative" aspectRatio="16/9" width="100%" overflow="hidden">
          <ExportedImage
            src={cardImage}
            alt={event.title}
            fill={true}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
            style={{ objectFit: "cover", filter: past ? "saturate(0.85)" : undefined }}
          />
          <HStack position="absolute" top={2} left={2} right={2} justifyContent="space-between" alignItems="flex-start">
            <TypeBadge event={event} />
            <StatusBadge event={event} status={status} />
          </HStack>
        </Box>
      </NextLink>

      {inProgress && (
        <HStack
          colorPalette={IN_PROGRESS_PALETTE}
          bg="colorPalette.subtle"
          color="colorPalette.fg"
          px={4}
          py={1.5}
          fontSize="sm"
          fontWeight="semibold"
          gap={2}
        >
          <LuCircleDot />
          <Text>{inProgressNote(event, now)}</Text>
        </HStack>
      )}

      <Card.Body p={4} gap={3}>
        <Card.Title fontSize={compact ? "lg" : "xl"} fontWeight="bold" lineHeight="short">
          <ChakraLink asChild color="inherit" _hover={{ textDecoration: "underline" }}>
            <NextLink href={href}>{event.title}</NextLink>
          </ChakraLink>
        </Card.Title>

        {compact ? (
          <SessionSummary event={event} now={now} />
        ) : (
          <>
            {event.description && (
              <Card.Description lineClamp={3} color="fg.muted">
                {event.description}
              </Card.Description>
            )}
            {past && event.photos.length > 1 && <PhotoStrip event={event} href={href} />}
            <SessionList event={event} now={now} max={4} />
            {!past && <EventPrice event={event} />}
          </>
        )}

        <ZoneTags zones={event.zones} size={compact ? "sm" : "md"} marginTop="auto" paddingTop={1} />
      </Card.Body>

      <Card.Footer p={4} paddingTop={0} gap={3}>
        {past ? (
          <Button asChild variant="outline" colorPalette="purple" size="sm" px={4} flex={1}>
            <NextLink href={href}>
              {event.photos.length > 0 && <LuCamera />}
              {event.photos.length > 0 ? "View photos" : "Read more"}
            </NextLink>
          </Button>
        ) : (
          <>
            <Button asChild variant="outline" colorPalette="purple" size="sm" px={4} flex={1}>
              <NextLink href={href}>Learn more</NextLink>
            </Button>
            {!compact && <RegisterButton event={event} now={now} href={href} />}
          </>
        )}
      </Card.Footer>
    </Card.Root>
  );
}

function RegisterButton({ event, now, href }: { event: EventProps; now: number; href: string }) {
  const status = getEventStatus(event, now);
  if (status === "in-progress") {
    return (
      <Button variant="subtle" colorPalette={IN_PROGRESS_PALETTE} size="sm" px={4} flex={1} disabled>
        <LuCircleDot /> In progress
      </Button>
    );
  }
  if (event.soldOut) {
    return (
      <Button variant="subtle" colorPalette="red" size="sm" px={4} flex={1} disabled aria-label="Sold out">
        <LuTicketX /> Sold out
      </Button>
    );
  }
  if (!isRegistrationOpen(event, now)) {
    return (
      <Button variant="subtle" size="sm" px={4} flex={1} disabled>
        Registration soon
      </Button>
    );
  }
  return (
    <Button asChild variant="solid" colorPalette="purple" size="sm" px={4} flex={1}>
      <NextLink href={href}>Register</NextLink>
    </Button>
  );
}

function inProgressNote(event: EventProps, now: number): string {
  const total = event.sessions.length;
  if (total === 1) return "Happening now";
  const index = event.sessions.findIndex((s) => s.end > now);
  const session = event.sessions[index];
  const underway = session.start <= now;
  return underway ? `Session ${index + 1} of ${total} happening now` : `Session ${index + 1} of ${total} up next`;
}

function PhotoStrip({ event, href }: { event: EventProps; href: string }) {
  // The first photo is already the card image.
  const photos = event.photos.slice(1);
  const shown = photos.slice(0, THUMBNAILS);
  const extra = photos.length - shown.length;
  return (
    <NextLink href={href} aria-label={`View ${event.photos.length} photos from ${event.title}`}>
      <HStack gap={2}>
        {shown.map((photo, i) => (
          <Box key={photo.imageSrc + i} position="relative" flex="1" aspectRatio="1" borderRadius="sm" overflow="hidden" maxWidth="25%">
            <ExportedImage src={photo.imageSrc} alt={photo.altText} fill={true} sizes="96px" style={{ objectFit: "cover" }} />
            {extra > 0 && i === shown.length - 1 && (
              <Box position="absolute" inset={0} bg="blackAlpha.600" color="white" display="flex" alignItems="center" justifyContent="center" fontWeight="bold">
                +{extra}
              </Box>
            )}
          </Box>
        ))}
      </HStack>
    </NextLink>
  );
}
