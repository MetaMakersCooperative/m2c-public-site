"use client";

import { Alert, Box, Button, Card, Container, Grid, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import NextLink from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import styles from "@/app/(pages)/page.module.css";
import Section from "@/app/(common)/section";
import {
  EventPrice,
  IN_PROGRESS_PALETTE,
  MembershipNote,
  SessionList,
  StatusBadge,
  TypeBadge,
  ZoneTags,
} from "@/app/(common)/events/event-details";
import useNow from "@/components/useNow";
import RichText from "@/components/ui/rich-text";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Toaster } from "@/components/ui/toaster";
import { EventProps, eventTypeLabel, formatEventDay, getEventStatus, isRegistrationOpen } from "@/data/events";
import { HEADER_HEIGHT } from "@/data/navigation";
import SlimBanner from "../../slim-banner";
import ZeffyCampaign from "../../zeffy-campaign";

/**
 * While registration is open, show the embedded Zeffy form (like the /join page).
 * Otherwise (sold out, in progress, past or no form yet) show the event info, recap and photos.
 */
export default function EventDetail({ event }: { event: EventProps }) {
  const now = useNow();
  if (isRegistrationOpen(event, now)) {
    return (
      <>
        <SlimBanner title={event.title} />
        <ZeffyCampaign embedUrl={event.zeffyEmbedUrl} title={`Registration for ${event.title}, powered by Zeffy`} />
      </>
    );
  }
  return <EventInfo event={event} now={now} />;
}

function EventInfo({ event, now }: { event: EventProps; now: number }) {
  const status = getEventStatus(event, now);
  const type = eventTypeLabel(event.type).toLowerCase();
  const past = status === "past";

  return (
    <Box marginTop={HEADER_HEIGHT} className={styles.pageBackground} backgroundColor={{ _light: "#fafafa", _dark: "#0a0a0a" }}>
      <VStack className={styles.pageForeground} backgroundColor={{ _light: "white", _dark: "#111" }} gap={0}>
        <Container position="relative" width="100%" aspectRatio={{ base: 21 / 9, smDown: 16 / 9 }} p={0}>
          <ExportedImage preload={true} src={event.image} alt={event.title} fill={true} style={{ objectFit: "cover", filter: "brightness(50%)" }} />
          <VStack position="absolute" inset={0} justifyContent="center" px={6} gap={3} textAlign="center">
            <HStack gap={2}>
              <TypeBadge event={event} />
              <StatusBadge event={event} status={status} />
            </HStack>
            <Heading as="h1" size={{ base: "5xl", mdDown: "3xl" }} color="white">
              {event.title}
            </Heading>
            <Text color="whiteAlpha.900" fontSize={{ base: "xl", mdDown: "md" }}>
              {formatEventDay(event.sessions[0].start)}
              {event.sessions.length > 1 ? ` · ${event.sessions.length} sessions` : ""}
            </Text>
          </VStack>
        </Container>

        <Section p={{ base: 8, mdDown: 4 }}>
          <Stack gap={6}>
            <Button asChild variant="ghost" size="sm" px={4} alignSelf="flex-start" colorPalette="purple">
              <NextLink href="/classes">
                <LuArrowLeft /> All classes &amp; events
              </NextLink>
            </Button>
            <StatusAlert event={event} now={now} />
            <Grid templateColumns={{ base: "2fr 1fr", mdDown: "1fr" }} gap={8} alignItems="start">
              <Stack gap={4}>
                <Heading as="h2" size="2xl">
                  About this {type}
                </Heading>
                {event.description && (
                  <Text fontSize={{ base: "lg", mdDown: "md" }} whiteSpace="pre-line">
                    {event.description}
                  </Text>
                )}
                <ZoneTags zones={event.zones} />
              </Stack>
              <Card.Root variant="subtle" _dark={{ backgroundColor: "#1c1c1c" }}>
                <Card.Body gap={4} p={5}>
                  <Heading as="h3" size="md">
                    {event.sessions.length > 1 ? "Sessions" : "When"}
                  </Heading>
                  <SessionList event={event} now={now} />
                  {!past && (
                    <>
                      <Heading as="h3" size="md">
                        Cost
                      </Heading>
                      <EventPrice event={event} />
                      {event.memberPrice !== undefined && <MembershipNote />}
                    </>
                  )}
                </Card.Body>
              </Card.Root>
            </Grid>
          </Stack>
        </Section>

        {event.blog && (
          <Section id="recap" title="Recap" backgroundColor="bg.muted">
            <RichText html={event.blog} fontSize={{ base: "lg", mdDown: "md" }} maxWidth="65ch" />
          </Section>
        )}

        {event.photos.length > 0 && (
          <Section id="photos" title="Photos" backgroundColor={event.blog ? undefined : "bg.muted"}>
            <ImageGallery images={event.photos} />
          </Section>
        )}
        <Toaster />
      </VStack>
    </Box>
  );
}

function StatusAlert({ event, now }: { event: EventProps; now: number }) {
  const status = getEventStatus(event, now);
  const type = eventTypeLabel(event.type).toLowerCase();
  if (status === "past") {
    const hasMedia = event.blog || event.photos.length > 0;
    return (
      <Alert.Root status="info" variant="subtle" px={4} py={3}>
        <Alert.Indicator />
        <Alert.Title>
          This {type} has ended.{hasMedia ? " Thanks to everyone who came out, and enjoy the recap below!" : " Thanks to everyone who came out!"}{" "}
          <NextLink href="/classes" style={{ textDecoration: "underline" }}>
            See upcoming classes &amp; events
          </NextLink>
        </Alert.Title>
      </Alert.Root>
    );
  }
  if (status === "in-progress") {
    return (
      <Alert.Root status="warning" colorPalette={IN_PROGRESS_PALETTE} variant="subtle" px={4} py={3}>
        <Alert.Indicator />
        <Alert.Title>This {type} is in progress, so registration is closed.</Alert.Title>
      </Alert.Root>
    );
  }
  if (event.soldOut) {
    return (
      <Alert.Root status="error" variant="subtle" px={4} py={3}>
        <Alert.Indicator />
        <Alert.Title>This {type} is sold out.</Alert.Title>
      </Alert.Root>
    );
  }
  return (
    <Alert.Root status="info" variant="subtle" px={4} py={3}>
      <Alert.Indicator />
      <Alert.Title>Registration for this {type} will open soon. Check back later!</Alert.Title>
    </Alert.Root>
  );
}
