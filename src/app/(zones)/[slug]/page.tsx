import { AbsoluteCenter, AspectRatio, Box, Center, Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import { assertNotUndefined } from "@/data/utils";
import ExportedImage from "next-image-export-optimizer";
import { relative } from "path";


export const dynamicParams  = false;

interface PathParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PathParams[]> {
  const result = _zonePages.map(zone => ({ slug: zone.slug}));
  console.log(result);
  return result;
} 

export default async function Zone({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  var slug = (await params).slug;
  var zone = _zonePages.find(x => x.slug === slug);
  assertNotUndefined<ZoneProps>(zone);
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