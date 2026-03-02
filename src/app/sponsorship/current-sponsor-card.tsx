"use client"

import { Badge, Link, Box, Card, Center, Image, VStack } from "@chakra-ui/react"
import { SponsorProps } from "@/data/sponsors";
import ExportedImage from "next-image-export-optimizer";
import { LuExternalLink } from "react-icons/lu";

export const CurrentSponsorCard = (props: SponsorProps) => {
  return (
    <Card.Root overflow="hidden" width={"100%"} 
      _dark={{backgroundColor: "#282828"}}>
        <VStack asChild p={4}>
          <Link href={props.url} target={"blank"}>
            <Box height={"120px"} width={"100%"} justifyContent={"middle"} display={"flex"}>
              <Center>
                <Image
                  src={props.image}
                  alt={props.name}
                  objectFit={"contain"}
                />
              </Center>
            </Box>
            <Card.Body width={"100%"}>
              <Card.Title textStyle="xl" fontWeight="bold">{props.name} <LuExternalLink style={{display: "inline"}} /></Card.Title>
            </Card.Body>
            <Card.Footer width={"100%"} justifyContent={"flex-start"}>
              <Badge colorPalette={props.tier === "platinum" ? "blue" : props.tier === "gold" ? "yellow" : props.tier === "silver" ? "gray" : "orange"} textTransform={"capitalize"}>
                {props.tier} Sponsor
              </Badge>
            </Card.Footer>
          </Link>
        </VStack>
    </Card.Root>
  )
}
