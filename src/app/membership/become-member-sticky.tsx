import { BoxProps, Center, Stack, Text } from "@chakra-ui/react";
import BecomeMemberButtons from "./become-member-buttons";
import { StickyComponent } from "@/components/ui/sticky";

export interface BecomeMemberStickyProps extends BoxProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberSticky({hideLearnMoreButton = false, ...props}: BecomeMemberStickyProps) {
    return (
        <StickyComponent 
                backgroundColor={{_light: "white", _dark:"#111"}}
                width="100%"
                boxShadow= "sm"
                {...props}
                >
            <Center>
                <Stack  p={4} direction={{base: "row", mdDown: "column"}} justifyContent={"center"} alignItems={"center"}>
                    
                    <Text textAlign="center" fontSize={{base: "xl", mdDown: "md"}}>Interested in membership?</Text>
                    <Text fontSize={"xl"} display={{base: "flex", mdDown:"none"}}>Sign up here →</Text>
                    
                    <BecomeMemberButtons hideLearnMoreButton={hideLearnMoreButton} />
                </Stack>
            </Center>
        </StickyComponent>
    );
}