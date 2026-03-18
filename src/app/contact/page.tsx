import { Stack } from "@chakra-ui/react";
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
                <Stack direction={{base: "row", mdDown: "column"}} justifyContent={"space-evenly"} alignItems={"center"}>
                    <SocialMediaLinks />
                    <RecentFacebookPosts />
                </Stack>
            </Section>
        </>
    );
}