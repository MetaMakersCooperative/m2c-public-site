import Section from "../(common)/section";
import ContactForm from "./contact-form";
import RecentFacebookPosts from "./recent-facebook-posts";
import SocialMediaLinks from "./social-media-links";

export default function ContactPage() {
    return (
        <>
            <Section id="contact-us" title="Contact Us" backgroundColor={"bg.muted"}>  
                <ContactForm />
            </Section>
            <Section id="social-media" title="Social Media">
                <SocialMediaLinks />
            </Section>
            <Section backgroundColor={"bg.muted"}>
                <RecentFacebookPosts />
            </Section>
        </>
    );
}