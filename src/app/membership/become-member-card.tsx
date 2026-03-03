import {
    Card,CardRootProps
} from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import BecomeMemberButtons from "./become-member-buttons";

export interface BecomeMemberCardProps extends CardRootProps {
}

export default function BecomeMemberCard({...props}:BecomeMemberCardProps) {
  return (
            <Card.Root p={8} boxShadow={"lg"} {...props}>
                <Card.Description fontSize={{ base: "2xl", mdDown: "md" }} color={"black"} textAlign={"center"}>
                    Are you a maker? Do you need access to a workspace with tools and a
                    community that shares your passion? Become a member and enjoy 24/7
                    access to our fully-equipped workshop!
                </Card.Description>
                <Card.Footer justifyContent={"center"} pt={8}>
                    <BecomeMemberButtons position="sticky" top={0} zIndex={900} />
                </Card.Footer>
            </Card.Root>
  );
}