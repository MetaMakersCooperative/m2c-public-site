import { AbsoluteCenter, Center, Container, Grid, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import ExportedImage from "next-image-export-optimizer";
import ZoneGrid from "./(zones)/zone-grid";
import Section from "./(common)/section";

export default function Home() {
  return (
    <VStack width="100%" gap={0}>
      <Container width="100%" height="auto" aspectRatio={21/9} >
        <ExportedImage
          src="images/home.webp"
          alt="Meta Makers Cooperative"
          fill={true}
          style={{objectFit: "cover", filter: "brightness(50%)"}}
        />
        <AbsoluteCenter width="100%"> 
            
            <HStack width="75%">
              <img src="images/logo-white.svg" width={"40%"}/>
              <VStack p={4} width="60%" textAlign="left">
                <Heading size={{smDown: "lg", mdDown: "3xl", lgDown: "5xl", xlDown:"6xl",base:"7xl"}} color="white">Meta Makers Cooperative Makerspace</Heading>
                <Heading width="100%" alignSelf="baseline" paddingTop={8}  mdDown={{display: "none"}} size={{lgDown: "md", xlDown:"2xl",base:"4xl"}} color="white">Explore • Collaborate • Make</Heading>
              </VStack>
            </HStack>

        </AbsoluteCenter>
      </Container>

      <Section id="zones" title="Zones">
        <Text fontSize={"24px"} paddingBottom={8}>Our makerspace has zones with tools and resources for these areas of interest:</Text>
        <ZoneGrid></ZoneGrid>
      </Section>

    </VStack>
  );
}