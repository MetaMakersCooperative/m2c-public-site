import { Link, Text } from "@chakra-ui/react";
import Section from "../(common)/section";
import GoogleCalendar from "./google-calendar";

export default function ContactPage() {
    return (
        <>
            <Section id="upcoming-classes" title="Upcoming Classes">  
                <Text>Coming Soon! Visit us again to learn about our upcoming classes.</Text>
            </Section>
            <Section id="calendar" title="Calendar">  
                <GoogleCalendar />
            </Section>
            <Section id="teach-classes" title="Teach a Class">  
                <Text>Looking for a place to teach your skills and crafts? To host a class at Meta Makers, complete our <Link href="forms/event.pdf" variant={"underline"} textDecoration={"underline"} colorPalette={"teal"}>event form</Link> and email it to <Link href="mailto:directors@metamakers.org" variant={"underline"} textDecoration={"underline"} colorPalette={"teal"}>directors@metamakers.org.</Link></Text>
            </Section>
            {/* <Section id="past-classes" title="Past Classes">  
                <p>todo</p>
            </Section> */}
        </>
    );
}