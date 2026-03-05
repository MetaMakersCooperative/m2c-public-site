'use client'
import { Box, Center, CenterProps, Stack, Text } from "@chakra-ui/react";
import BecomeMemberButtons from "./become-member-buttons";
import useScrollDirection from "@/components/useScrollDirection";
import { HEADER_HEIGHT } from "../(common)/navigation";

export interface BecomeMemberStickyProps extends CenterProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberSticky({hideLearnMoreButton = false, ...props}: BecomeMemberStickyProps) {
    const scrollDirection = useScrollDirection(null);
    return (
            <Center                 
                {...props}
                position="sticky"
                backgroundColor={{_light: "white", _dark:"#111"}}
                top={scrollDirection == "up" ? HEADER_HEIGHT : "0px" }
                zIndex="900"
                boxShadow={"sm"}
                width="100%">
                <Stack  p={4} direction={{base: "row", mdDown: "column"}} justifyContent={"center"} alignItems={"center"}>
                    
                    <Text textAlign="center" fontSize={{base: "xl", mdDown: "md"}}>Interested in membership?</Text>
                    <Text fontSize={"xl"} display={{base: "flex", mdDown:"none"}}>Sign up here →</Text>
                    
                    <BecomeMemberButtons hideLearnMoreButton={hideLearnMoreButton} />
                </Stack>
            </Center>
    );
}