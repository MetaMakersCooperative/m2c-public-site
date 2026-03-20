"use client"

import { Badge, Link, Box, Card, Center, Image, VStack, CardRootProps } from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu";

export interface BecomeSponsorCardProps extends CardRootProps {
  image: string,
  name: string,
  tier: string,
  url: string
}

export const CurrentSponsorCard = ({image, name, tier, url, ...props}: BecomeSponsorCardProps) => {
  return (
    <Card.Root boxShadow={"sm"} width={"100%"}>
        <VStack asChild>
          <Link href={url} target={"blank"}>
            <Box p={4} height={"120px"} width={"100%"} justifyContent={"middle"} display={"flex"} backgroundColor={"white"}>
              <Center overflow={"hidden"}>
                <Image
                  src={image}
                  alt={name}
                  objectFit={"contain"}
                />
              </Center>
            </Box>
            <Card.Body width={"100%"} px={4}>
              <Card.Title textStyle="xl" fontWeight="bold">{name} <LuExternalLink style={{display: "inline"}} /></Card.Title>
            </Card.Body>
            <Card.Footer width={"100%"} px={4} paddingBottom={4} justifyContent={"flex-start"}>
              <Badge colorPalette={tier === "platinum" ? "blue" : tier === "gold" ? "yellow" : tier === "silver" ? "gray" : "orange"} textTransform={"capitalize"}>
                {tier} Sponsor
              </Badge>
            </Card.Footer>
          </Link>
        </VStack>
    </Card.Root>
  )
}
