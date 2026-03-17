import { Center, CenterProps, Stack, Text } from "@chakra-ui/react";
import BecomeMemberButtons from "./become-member-buttons";

export interface BecomeMemberFixedProps extends CenterProps{
}

export default function BecomeMemberFixed({...props}: BecomeMemberFixedProps) {
    return (
            <Center
                position={"fixed"}
                bottom={"0"}          
                backgroundColor={{_light: "white", _dark:"#111"}}
                width="100%"
                zIndex={900}
                {...props}>
                <Stack  p={4} direction={{base: "row", mdDown: "column"}} justifyContent={"center"} alignItems={"center"}>
                    
                    <Text textAlign="center" fontSize={{base: "lg", mdDown: "md"}}>Interested in membership?</Text>
                    <Text fontSize={{base: "lg", mdDown: "md"}} display={{base: "flex", mdDown:"none"}}>Sign up here →</Text>
                    
                    <BecomeMemberButtons />
                </Stack>
            </Center>
    );
}