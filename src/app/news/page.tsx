import { Link, VStack } from "@chakra-ui/react";
import Section from "../(common)/section";
import { LuExternalLink } from "react-icons/lu";

export default function NewsPage() {
    return (
        <>
            <Section id="news" title="News">  
                <VStack>
                    <Link variant={"underline"} target="blank" href="https://bizxmagazine.com/events/grand-opening-of-windsors-only-makerspace/">Grand Opening of Windsor's Only Makerspace <LuExternalLink /></Link>
                    <Link variant={"underline"} target="blank" href="https://youtu.be/jRKCQpYDlug">Grand Opening Video by Kannex Media <LuExternalLink /></Link>
                    <Link variant={"underline"} target="blank" href="https://bizxmagazine.com/biz-x-magazine-january-2024-volume-27-issue-1">See our feature story in Bizx magazine (page 11). <LuExternalLink /></Link>
                    <Link variant={"underline"} target="blank" href="https://thedrivemagazine.com/posts/meta-makers/">See our feature story in The Drive magazine. <LuExternalLink /></Link>
                </VStack>
            </Section>
        </>
    );
}