import Section from "../(common)/section";
import GoogleCalendar from "./google-calendar";

export default function ContactPage() {
    return (
        <>
            <Section id="calendar" title="Calendar">  
                <GoogleCalendar />
            </Section>
        </>
    );
}