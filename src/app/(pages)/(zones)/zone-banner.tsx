import { AbsoluteCenter, Container, ContainerProps, Heading, VStack } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import ExportedImage from "next-image-export-optimizer";

export interface ZoneBannerProps extends ContainerProps {
  image: string;
  name: string;
}

export default async function ZoneBanner({image, name, ...props}:ZoneBannerProps) {
  return (
    <Container width="100%" height="auto" aspectRatio={21/9} {...props} >
      <ExportedImage
        preload={true}
        src={image}
        alt={name}
        fill={true}
        style={{objectFit: "cover", filter: "brightness(50%)"}}
      />
      <AbsoluteCenter width="100%">
        <VStack width="100%" textAlign="left">
          <Heading as="h1" size={{smDown:"5xl",base:"7xl"}} color="white">{name}</Heading>
          <Heading size={{smDown:"xl",base:"3xl"}} color="white">@ Meta Makers Cooperative</Heading>
        </VStack>
      </AbsoluteCenter>
    </Container>
    
  );
}