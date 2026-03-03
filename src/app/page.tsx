import { AbsoluteCenter, Center, Container, Grid, Heading, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import ExportedImage from "next-image-export-optimizer";
import ZoneGrid from "./(zones)/zone-grid";
import Section from "./(common)/section";
import HomeBanner from "./home-banner";
import BecomeMemberSticky from "./membership/become-member-sticky";

export default function Home() {
  return (
    <VStack width="100%" gap={0}>
      <HomeBanner />
      <BecomeMemberSticky />
      <Section id="zones" title="Zones">
        <Text fontSize={"xl"} paddingBottom={8}>Our makerspace has zones with tools and resources for these areas of interest:</Text>
        <ZoneGrid></ZoneGrid>
      </Section>

    </VStack>
  );
}