import { List, Text } from "@chakra-ui/react";
import Section from "../(common)/section";

export default function AboutPage() {
    return (
        <>
            {/* <Section id="story" title="Our Story">  
                <p></p>
            </Section> */}
            <Section id="mission" title="Mission">  
                <Text>Meta Makers Cooperative (M2C) is a non-profit makerspace in Windsor. Our mission is to provide access to tools and resources to maximize human potential, enabling our members to be autonomous, achieve self mastery and fulfill a sense of purpose. We also believe that science, technology, engineering, arts, and math are an integral part of the making process and when people make, they become empowered. We are a social enterprise with a diverse array of skilled members who help make Makers.</Text>
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
        </>
    );
}