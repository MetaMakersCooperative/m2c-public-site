import { Button, Center, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { StickyComponent } from "@/components/ui/sticky";
import { LuExternalLink } from "react-icons/lu";

export interface BecomeMemberStickyProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberSticky({hideLearnMoreButton = false}: BecomeMemberStickyProps) {
    return (
        <StickyComponent boxProps={{
                background:"white",
                color:"black",
                width:"100%",
                boxShadow: "sm"}}>
            <Center>
                <Stack  p={4} direction={{base: "row", mdDown: "column"}} justifyContent={"center"} alignItems={"center"}>
                    
                    <Text textAlign="center" fontSize={{base: "xl", mdDown: "md"}}>Interested in membership?</Text>
                    <Text fontSize={"xl"} display={{base: "flex", mdDown:"none"}}>Sign up here →</Text>
                    
                    <HStack >
                        {!hideLearnMoreButton &&         
                            <Button asChild variant={"outline"} colorPalette={"purple"} size={{base: "xl", mdDown: "sm"}} p={4}>
                                <Link href="/membership">
                                    Learn More
                                </Link>
                            </Button>    
                        }                
                        <Button asChild variant={"solid"} colorPalette={"purple"} size={{base: "xl", mdDown: "sm"}} p={4}>
                            <Link href="https://www.zeffy.com/en-CA/ticketing/meta-makers-co-operatives-memberships" color={"white"} target="_blank">
                                Become a Member <LuExternalLink />
                            </Link>
                        </Button>
                    </HStack>
                
                </Stack>
            </Center>
        </StickyComponent>
    );
}