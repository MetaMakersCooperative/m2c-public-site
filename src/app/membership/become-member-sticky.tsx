'use client'
import { Box, Center, CenterProps, Stack, Text } from "@chakra-ui/react";
import BecomeMemberButtons from "./become-member-buttons";
import useScrollY from "@/components/useScrollY";
import { HEADER_HEIGHT } from "../(common)/navigation";

export interface BecomeMemberStickyProps extends CenterProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberSticky({hideLearnMoreButton = false, ...props}: BecomeMemberStickyProps) {
    const {scrollYDirection} = useScrollY();
    return (
            <Center                 
                {...props}
                position="sticky"
                backgroundColor={{_light: "white", _dark:"#111"}}
                top={scrollYDirection == "up" ? HEADER_HEIGHT : "0px"}
                zIndex="900"
                boxShadow={"sm"}
                width="100%"
                transition="top 0.3s ease-out"
      >
                <Stack  p={4} direction={{base: "row", mdDown: "column"}} justifyContent={"center"} alignItems={"center"}>
                    
                    <Text textAlign="center" fontSize={{base: "xl", mdDown: "md"}}>Interested in membership?</Text>
                    <Text fontSize={"xl"} display={{base: "flex", mdDown:"none"}}>Sign up here →</Text>
                    
                    <BecomeMemberButtons hideLearnMoreButton={hideLearnMoreButton} />
                </Stack>
            </Center>
    );
}