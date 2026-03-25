import { Link, List, Text, VStack } from "@chakra-ui/react";
import Section from "../../(common)/section";
import { LuExternalLink } from "react-icons/lu";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "About",
  description: "Meta Makers Cooperative (M2C) is a non-profit makerspace in Windsor. Our mission is to provide access to tools and resources to maximize human potential.",
  openGraph: {
    url: `${BASE_URL}/about`,
    type: "website",
    title: "About Meta Makers Cooperative",
    description: "Meta Makers Cooperative (M2C) is a non-profit makerspace in Windsor. Our mission is to provide access to tools and resources to maximize human potential.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function AboutPage() {
    return (
        <>
            <Section headingProps={{as: "h1"}} id="about" title="About">  
                <Text>Meta Makers Cooperative (M2C) is a nonprofit makerspace located at 628 Monmouth Road in Windsor, Ontario, Canada.</Text>
            </Section>
            <Section id="mission" title="Mission" backgroundColor={"bg.muted"}>  
                <Text>Our mission is to provide access to tools and resources to maximize human potential, enabling our members to be autonomous, achieve self mastery and fulfill a sense of purpose. We also believe that science, technology, engineering, arts, and math are an integral part of the making process and when people make, they become empowered. We are a social enterprise with a diverse array of skilled members who help make Makers.</Text>
            </Section>
            <Section id="vision" title="Future Vision">  
                <Text paddingBottom={4}>We will achieve our aims through a variety of functions including:</Text>
                <List.Root px={8} paddingBottom={4}>
                    <List.Item>STEM youth programs</List.Item>
                    <List.Item>Retiree Outreach</List.Item>
                    <List.Item>Community arts events</List.Item>
                    <List.Item>Technology labs</List.Item>
                    <List.Item>CAD skills training</List.Item>
                    <List.Item>Special interest groups</List.Item>
                </List.Root>
                <Text  paddingBottom={4}>We are confident that the personal growth of our members will ultimately benefit the community and that as we grow, we will expand to offer access to more tools and more resources.</Text>
                <Text>M2C is committed to maximizing human potential with a long-term goal of becoming a charity.</Text>
            </Section>
            {/* <Section id="directors" title="Directors">  
                <p>todo</p>
            </Section> */}
            <Section id="news" title="News" backgroundColor={"bg.muted"}>  
                <VStack alignItems={"left"}>
                    <Link variant={"underline"} target="_blank" href="https://bizxmagazine.com/events/grand-opening-of-windsors-only-makerspace/">Grand Opening of Windsor's Only Makerspace <LuExternalLink /></Link>
                    <Link variant={"underline"} href="/csrf">Meta Makers Receives Community Services Recovery Fund (CSRF) Grant</Link>
                    <Link variant={"underline"} target="_blank" href="https://youtu.be/jRKCQpYDlug">Grand Opening Video by Kannex Media <LuExternalLink /></Link>
                    <Link variant={"underline"} target="_blank" href="https://bizxmagazine.com/biz-x-magazine-january-2024-volume-27-issue-1">See our feature story in Bizx magazine (page 11). <LuExternalLink /></Link>
                    <Link variant={"underline"} target="_blank" href="https://thedrivemagazine.com/posts/meta-makers/">See our feature story in The Drive magazine. <LuExternalLink /></Link>
                </VStack>
            </Section>
        </>
    );
}