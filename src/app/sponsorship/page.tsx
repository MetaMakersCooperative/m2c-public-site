import { Box } from "@chakra-ui/react";
import Section from "../(common)/section";
import BecomeSponsorCard from "./become-sponsor-card";
import CurrentSponsorGrid from "./current-sponsor-grid";
import PastSponsorList from "./past-sponsor-list";

export default function SponsorshipPage() {
    return (
        <>
            <Box as="section" id="sponsorship" p={8} width={"100%"}>
                <BecomeSponsorCard />
            </Box>
            <Section id="current-sponsors" title="Current Sponsors">  
                <CurrentSponsorGrid />
            </Section>
            <Section id="past-sponsors" title="Past Sponsors">  
                <PastSponsorList />
            </Section>
        </>
    );
}