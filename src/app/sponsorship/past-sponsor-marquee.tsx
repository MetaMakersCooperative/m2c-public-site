"use client"

import { _pastSponsors } from "@/data/sponsors";
import { Image, Marquee } from "@chakra-ui/react"

export interface MarqueeItem {
    imageSrc: string;
    altText: string; 
}

export interface MarqueeProps {
    items: MarqueeItem[]
}


const SponsorMarquee = ({items}: MarqueeProps) => (
  <Marquee.Root py={4} autoFill spacing="2rem">
    <Marquee.Viewport>
      <Marquee.Content>
        {items.map((item, i) => (
          <Marquee.Item key={i} px="2rem">
            <Image src={item.imageSrc} alt={item.altText} height={"80px"} />
          </Marquee.Item>
        ))}
      </Marquee.Content>
    </Marquee.Viewport>
  </Marquee.Root>
);

export default SponsorMarquee;
