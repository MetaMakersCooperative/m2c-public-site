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
import ExportedImage from "next-image-export-optimizer";
import BecomeMemberCard from "./membership/become-member-card";
import BecomeMemberFixed from "./membership/become-member-fixed";
import useScrollPredicate from "@/components/useScrollPredicate";
import { ImageGallery } from "@/components/ui/image-gallery";
import { _facilityImages } from "@/data/facility";

export default function Home() {
  const shouldDisplayCallToAction = (scrollY:number) => {
    return scrollY >= 1350;
  };
  var displayCallToAction = useScrollPredicate(shouldDisplayCallToAction, false);

  return (
    <VStack width="100%" gap={0} marginBottom={{base: "80px", mdDown: "100px"}}>
      <VStack width="100%" gap={0}>
        <HomeBanner />
        <Section p={4}>
          <Text fontSize={{base: "2xl", mdDown: "md"}} textAlign={"center"}>
            Windsor's nonprofit community makerspace!
          </Text>
        </Section>
        <Section p={0}>
          <Grid  backgroundColor={"bg.muted"} templateColumns={{base: "repeat(2, 1fr)", mdDown: "repeat(1, 1fr)"}} justifyContent={"center"} alignItems={"center"}>
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
                  Located in Sho Art Studios at <Link href="https://goo.gl/maps/C1DEyxi6UdCPUZfK8" variant={"underline"}>628 Monmouth Road</Link>, Windsor, Ontario.
                </Text>
              </Center>
            </Grid>
        </Section>
        <Section>
          <Stack direction={{base: "row", mdDown: "column"}} alignItems={"center"} gap={12} justifyContent={"center"}>
            <Box width={{base: "33%", mdDown: "100%"}}>
              <Heading as ="h2" size="4xl" width={"fit-content"}>
                makerspace
              <Text display={"inline"} as="span" fontSize="lg" fontWeight={"light"} paddingLeft={4}>noun</Text>
              </Heading>
              <Blockquote.Root fontSize={{ base: "xl", mdDown: "md" }} px={4} >
                <Blockquote.Content>
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
      <Section id="zones" title="Zones">
        <Text fontSize={"xl"} paddingBottom={8}>
          Our makerspace has zones with tools and resources for these areas of
          interest:
        </Text>
        <ZoneGrid />
      </Section>
      <Section id="facility" title="Facility">
        <Text fontSize={"xl"} paddingBottom={8}>
          Our makerspace is 2000 square feet with ground floor access and an overhead door.  The space is split into two sections: one area for loud and dusty activities such as woodworking and machining, and another for quiet and clean activities such as 3D printing and fibre arts.
        </Text>
        <ImageGallery images={_facilityImages}/>
      </Section>
      <BecomeMemberFixed 
        visibility={displayCallToAction ? "visible" : "hidden"}
        opacity={displayCallToAction ? 1 : 0}
        transition={displayCallToAction
          ? "opacity 0.3s ease-in-out, visibility 0s linear 0s"
          : "opacity 0.3s ease-in-out, visibility 0s linear 0.3s"
        }
      />
    </VStack>
  );
}
