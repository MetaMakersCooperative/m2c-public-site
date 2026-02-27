import { Heading, Image } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import { assertNotUndefined } from "@/data/utils";

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
        <><Image src={zone.image} alt={zone.name} /><Heading>{zone.name}</Heading></>
  );
}