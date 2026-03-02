import Section from "../(common)/section";
import GoogleCalendar from "./google-calendar";

export default function ContactPage() {
    return (
        <>
            <Section id="upcoming-classes" title="Upcoming Classes">  
                <p>todo</p>
            </Section>
            <Section id="calendar" title="Calendar">  
                <GoogleCalendar />
            </Section>
            <Section id="past-classes" title="Past Classes">  
                <p>todo</p>
            </Section>
        </>
    );
}