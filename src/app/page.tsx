'use client'
import {
  VStack,
  Text,
  Blockquote,
  Stack,
  Heading,
  Box,
  Grid,
  Center,
  Link,
} from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import ZoneGrid from "./(zones)/zone-grid";
import Section from "./(common)/section";
import HomeBanner from "./home-banner";
import BecomeMemberSticky from "./membership/become-member-sticky";
import ExportedImage from "next-image-export-optimizer";
import BecomeMemberCard from "./membership/become-member-card";
import { useIsVisible } from "@/components/useIsVisible";
import RecentFacebookPosts from "./contact/recent-facebook-posts";

export default function Home() {
  
  const {ref, isVisible} = useIsVisible();

  return (
    <VStack width="100%" gap={0}>
      <VStack ref={ref} width="100%" gap={0}>
        <HomeBanner />
        <Section p={4}>
          <Text fontSize={{base: "2xl", mdDown: "md"}} textAlign={"center"}>
            Windsor's nonprofit community makerspace!
          </Text>
        </Section>
        <Section p={0} backgroundColor="gray.100">
          <Grid templateColumns={{base: "repeat(2, 1fr)", mdDown: "repeat(1, 1fr)"}} justifyContent={"center"} alignItems={"center"}>
              <Box>
                <ExportedImage
                  src="images/map.webp"
                  alt="Map of 628 Monmouth Rd, Windsor, ON"
                  width={1311}
                  height={657}
                  style={{objectFit: "cover", aspectRatio: "2/1"}}
                />
              </Box>
              <Center p={8}>
                <Text fontSize={{base: "2xl", mdDown: "md"}} textAlign={"center"}>
                  Located in Sho Art Studios at <Link href="https://goo.gl/maps/C1DEyxi6UdCPUZfK8" variant={"underline"} textDecoration={"underline"} color={"teal"}>628 Monmouth Road</Link>, Windsor, Ontario.
                </Text>
              </Center>
            </Grid>
        </Section>
        <Section>
          <Stack direction={{base: "row", mdDown: "column"}} alignItems={"center"} gap={12} justifyContent={"center"}>
            <Box width={{base: "33%", mdDown: "100%"}} color={"grey.700"}>
              <Heading as ="h2" size="4xl" width={"fit-content"}>
                makerspace
              <Text display={"inline"} as="span" fontSize="lg" fontWeight={"light"} paddingLeft={4}>noun</Text>
              </Heading>
              <Blockquote.Root fontSize={{ base: "xl", mdDown: "md" }} px={4} >
                <Blockquote.Content  color={"gray.700"}>
                  a place in which people with shared interests, especially in computing or technology, can gather to work on projects while sharing ideas, equipment, and knowledge.
                </Blockquote.Content>
                <Blockquote.Caption>
                  <cite>- Oxford Dictionary of English</cite>
                </Blockquote.Caption>
              </Blockquote.Root>
            </Box>
            <BecomeMemberCard width={{base: "66%", mdDown: "100%"}} />
          </Stack>
        </Section>
      </VStack>
      <BecomeMemberSticky 
        height={isVisible ? "0px" : "auto"}
        visibility={isVisible ? "hidden" : "visible"}
        opacity={isVisible ? 0 : 1}
        transform={isVisible ? "translateY(-80px)":"translateY(0px)"}
        transition={isVisible ? "opacity 300ms ease-in, visibility 0ms ease-in 300ms, transform 300ms ease-in 0ms": "opacity 300ms ease-in, visibility 0ms ease-in 0ms, transform 300ms ease-in 0ms"}
      />
      <Section id="zones" title="Zones">
        <Text fontSize={"xl"} paddingBottom={8}>
          Our makerspace has zones with tools and resources for these areas of
          interest:
        </Text>
        <ZoneGrid />
      </Section>
    </VStack>
  );
}
