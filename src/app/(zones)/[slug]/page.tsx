import { VStack, Text, List, SimpleGrid } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import { assertNotUndefined } from "@/data/utils";
import Section from "@/app/(common)/section";
import ZoneBenefit from "../zone-benefit";
import ZoneBanner from "../zone-banner";
import BecomeMemberSticky from "@/app/membership/become-member-sticky";
import { ImageCarousel } from "@/components/ui/image-carousel";


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
        <Section id="benefits" title="Benefits" backgroundColor={"bg.muted"}>
          <VStack width="100%" gap={8}>
            {zone.benefits.map((benefit, index) => (
              <ZoneBenefit key={index} {...benefit} />
            ))}
          </VStack>
        </Section>
      ) : null}
      <Section id="facility" title="Facility">
        <Text fontSize={{base: "xl", mdDown:"md"}} paddingBottom={8}>
          Here's how the {zone.name} zone is setup in the makerspace:
        </Text>
        <ImageCarousel images={zone.facilityImages}/>
      </Section>
      {zone.tools && (
        <Section id="tools" title="Tools">
          <Text fontSize={{base: "xl", mdDown:"md"}} paddingBottom={8}>
            Looking for something specific?  Here's a list of {zone.name} tools we have in the shop:
          </Text>
          <List.Root px={4} listStylePosition={"inside"}>
            <SimpleGrid columns={{base: 3, mdDown: 2, smDown: 1}}>
            {zone.tools.map((tool,i) => (<List.Item key={i}>{tool}</List.Item>))}
            </SimpleGrid>
          </List.Root>
        </Section>
        )
      }
    </VStack>
    
  );
}