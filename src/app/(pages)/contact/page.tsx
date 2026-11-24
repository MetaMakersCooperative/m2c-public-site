import { Button, Stack, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuArrowRight } from "react-icons/lu";
import FaqAccordion from "../../(common)/faq-accordion";
import { _featuredFaqs } from "@/data/faq";
import Section from "../../(common)/section";
import ContactForm from "./contact-form";
import RecentFacebookPosts from "./recent-facebook-posts";
import SocialMediaLinks from "./social-media-links";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us via email or social media to learn more about Meta Makers Cooperative makerspace in Windsor.",
  openGraph: {
    url: `${BASE_URL}/contact`,
    type: "website",
    title: "Contact Meta Makers Cooperative",
    description: "Contact us via email or social media to learn more about Meta Makers Cooperative makerspace in Windsor.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function ContactPage() {
    return (
        <>
            <Section headingProps={{as: "h1"}} id="contact" title="Contact" backgroundColor={"bg.muted"}>  
                <ContactForm />
            </Section>
            {_featuredFaqs.length > 0 && (
                <Section id="faq" title="Frequently Asked Questions">
                    <VStack alignItems="stretch" gap={6}>
                        <FaqAccordion items={_featuredFaqs} linkBase="/faq" />
                        <Button asChild variant={"outline"} colorPalette={"purple"} size={{base: "lg", mdDown: "sm"}} p={4} alignSelf="center">
                            <NextLink href="/faq">See all FAQs <LuArrowRight /></NextLink>
                        </Button>
                    </VStack>
                </Section>
            )}
            <Section id="social-media" title="Social Media" backgroundColor={_featuredFaqs.length > 0 ? "bg.muted" : undefined}>
                <Stack direction={{base: "row", mdDown: "column"}} justifyContent={"space-evenly"} alignItems={"center"}>
                    <SocialMediaLinks />
                    <RecentFacebookPosts />
                </Stack>
            </Section>
        </>
    );
}