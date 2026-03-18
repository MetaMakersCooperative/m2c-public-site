import { Button, HStack, StackProps } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import NextLink from "next/link";

export interface BecomeMemberProps extends StackProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberButtons({hideLearnMoreButton = false, ...stackProps}: BecomeMemberProps) {
    return (
        <HStack {...stackProps}>
            {!hideLearnMoreButton &&         
                <Button asChild variant={"outline"} colorPalette={"purple"} size={{base: "xl", mdDown: "sm"}} p={4}>
                    <NextLink href="/membership">
                        Learn More
                    </NextLink>
                </Button>    
            }                
            <Button asChild variant={"solid"} colorPalette={"purple"} size={{base: "xl", mdDown: "sm"}} p={4}>
                <NextLink href="/join" color={"white"}>
                    Become a Member
                </NextLink>
            </Button>
        </HStack>
    );
}