import { Stack } from "@chakra-ui/react";
import Section from "../../(common)/section";
import ContactForm from "./contact-form";
import RecentFacebookPosts from "./recent-facebook-posts";
import SocialMediaLinks from "./social-media-links";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Contact Meta Makers Cooperative",
  description: "Contact us via email or social media to learn more about Meta Makers Cooperative makerspace in Windsor.",
  openGraph: {
    url: `${BASE_URL}/contact`,
    type: "website",
    title: "Contact Meta Makers Cooperative",
    description: "Contact us via email or social media to learn more about Meta Makers Cooperative makerspace in Windsor.",
  }
};

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