import { Button, HStack, Link, StackProps } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

export interface BecomeMemberProps extends StackProps{
    hideLearnMoreButton?: boolean;
}

export default function BecomeMemberButtons({hideLearnMoreButton = false, ...stackProps}: BecomeMemberProps) {
    return (
        <HStack {...stackProps}>
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
    );
}