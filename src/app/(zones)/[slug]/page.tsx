import { VStack } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import { assertNotUndefined } from "@/data/utils";
import Section from "@/app/(common)/section";
import ZoneBenefit from "../zone-benefit";
import ZoneBanner from "../zone-banner";
import BecomeMemberSticky from "@/app/membership/become-member-sticky";


export const dynamicParams  = false;

interface PathParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PathParams[]> {
  const result = _zonePages.map(zone => ({ slug: zone.slug}));
  console.log(result);
  return result;
} 

export default async function ZonePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  var slug = (await params).slug;
  var zone = _zonePages.find(x => x.slug === slug);
  assertNotUndefined<ZoneProps>(zone);
  return (
    <VStack width="100%" gap={0}>
      <ZoneBanner {...zone}/>
      <BecomeMemberSticky />
      {zone.benefits ? (
        <Section id="benefits" title="Benefits">
          <VStack width="100%" gap={4}>
            {zone.benefits.map((benefit, index) => (
              <ZoneBenefit key={index} {...benefit} />
            ))}
          </VStack>
        </Section>
      ) : null}
    </VStack>
    
  );
}