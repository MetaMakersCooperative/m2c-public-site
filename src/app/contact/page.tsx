import Section from "../(common)/section";
import ContactForm from "./contact-form";
import RecentFacebookPosts from "./recent-facebook-posts";
import SocialMediaLinks from "./social-media-links";

export default function ContactPage() {
    return (
        <>
            <Section id="contact-us" title="Contact Us">  
                <ContactForm />
            </Section>
            <Section id="social-media" title="Social Media">
                <SocialMediaLinks />
            </Section>
            <Section id="recent-facebook-posts" title="Recent Facebook Posts">
                <RecentFacebookPosts />
            </Section>
        </>
    );
}