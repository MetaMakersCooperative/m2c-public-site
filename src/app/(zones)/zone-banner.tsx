import { AbsoluteCenter, Container, Heading, VStack } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import ExportedImage from "next-image-export-optimizer";

export default async function ZoneBanner(zone:ZoneProps) {
  return (
    <Container width="100%" height="auto" aspectRatio={21/9} >
      <ExportedImage
        src={zone.image}
        alt={zone.name}
        fill={true}
        style={{objectFit: "cover", filter: "brightness(50%)"}}
      />
      <AbsoluteCenter width="100%">
        <VStack width="100%" textAlign="left">
          <Heading size={{smDown:"5xl",base:"7xl"}} color="white">{zone.name}</Heading>
          <Heading size={{smDown:"xl",base:"3xl"}} color="white">@ Meta Makers Cooperative</Heading>
        </VStack>
      </AbsoluteCenter>
    </Container>
    
  );
}