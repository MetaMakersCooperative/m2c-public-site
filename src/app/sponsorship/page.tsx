import { Box, List, Text } from "@chakra-ui/react";
import Section from "../(common)/section";
import BecomeSponsorCard from "./become-sponsor-card";
import CurrentSponsorGrid from "./current-sponsor-grid";
import PastSponsorList from "./past-sponsor-list";
import { _otherSupport, _pastSponsors } from "@/data/sponsors";
import SponsorMarquee from "./past-sponsor-marquee";

export default function SponsorshipPage() {
    const pastSponsorMarqueeItems = _pastSponsors.filter(x => x.image != null).map(x =>  {return {imageSrc: x.image!, altText: x.name};});
    const otherSupportMarqueeItems = _otherSupport.filter(x => x.image != null).map(x =>  {return {imageSrc: x.image!, altText: x.name};});
    return (
        <>
            <Box as="section" id="sponsorship" p={8} width={"100%"}>
                <BecomeSponsorCard />
            </Box>
            <Section backgroundColor={"bg.muted"} id="current-sponsors" title="Current Sponsors">  
                <Text fontSize={{base: "xl", mdDown:"md"}} paddingBottom={8}>Thanks to our current sponsors for their generous support:</Text>
                <CurrentSponsorGrid />
            </Section>
            <Section id="past-sponsors" title="Past Sponsors">  
                <Text fontSize={{base: "xl", mdDown:"md"}}>Thanks to our past sponsors for their generous support:</Text>
                <SponsorMarquee items={pastSponsorMarqueeItems} marginY={8} />
                <PastSponsorList />
            </Section>
            <Section id="other-supporters" title="Other Supporters">
                <Text fontSize={{base: "xl", mdDown:"md"}}>Thanks to our non-monetary supporters who have donated materials, equipment or services:</Text>
                <SponsorMarquee items={otherSupportMarqueeItems}  marginTop={8} marginBottom={4} />
                <List.Root p={8}>
                    {_otherSupport.map((x,i) => (<List.Item key={i}>{x.name}</List.Item>))}
                </List.Root>
            </Section>
        </>
    );
}