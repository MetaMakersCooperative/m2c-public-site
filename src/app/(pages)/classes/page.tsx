import { Link, Text } from "@chakra-ui/react";
import Section from "../../(common)/section";
import GoogleCalendar from "./google-calendar";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";
import SlimBanner from "@/app/(common)/slim-banner";

export const metadata: Metadata = {
  title: "Classes @ Meta Makers Cooperative",
  description: "Sign up for upcoming classes and events at the Meta Makers Cooperative Makerspace.",
  openGraph: {
    url: `${BASE_URL}/classes`,
    type: "website",
    title: "Classes @ Meta Makers Cooperative",
    description: "Sign up for upcoming classes and events at the Meta Makers Cooperative Makerspace.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function ContactPage() {
    return (
        <>
            <SlimBanner title="Classes @ Meta Makers Cooperative"/>
            <Section id="upcoming-classes" title="Upcoming Classes" backgroundColor={"bg.muted"}>  
                <Text>Coming Soon! Visit us again to learn about our upcoming classes.</Text>
            </Section>
            <Section id="calendar" title="Calendar">  
                <GoogleCalendar />
            </Section>
            <Section id="teach-classes" title="Teach a Class" backgroundColor={"bg.muted"}>  
                <Text>Looking for a place to teach your skills and crafts? To host a class at Meta Makers, complete our <Link href="forms/event.pdf" variant={"underline"}>event form</Link> and email it to <Link href="mailto:directors@metamakers.org" variant={"underline"}>directors@metamakers.org.</Link></Text>
            </Section>
            {/* <Section id="past-classes" title="Past Classes">  
                <p>todo</p>
            </Section> */}
        </>
    );
}