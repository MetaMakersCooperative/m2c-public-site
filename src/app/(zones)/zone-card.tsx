"use client"

import { Box, Card, CardRootProps, Link as ChakraLink } from "@chakra-ui/react"
import ExportedImage from "next-image-export-optimizer";
import NextLink from "next/link";

export interface ZoneCardProps extends CardRootProps {
  slug: string,
  image: string,
  name: string,
  color: string
}

export const ZoneCard = ({slug, image, name, color, ...props}: ZoneCardProps) => {
  return (
    <ChakraLink asChild variant={"underline"} _focus={{outline: "none"}}>
      <NextLink href={'/'+ slug}>
        <Card.Root overflow="hidden" 
          transition="all 0.3s ease-in-out" // Smooth transition
          _hover={{
            boxShadow: `0 0 20px 5px ${color}bf`, // glow effect
            transform: "translateY(-5px)", // Optional slight lift effect
          }}
          borderLeftColor={color} 
          borderLeftStyle={"solid"} 
          borderLeftWidth={"10px"}
          _dark={{backgroundColor: "#282828"}}
          {...props}>
          <Box asChild aspectRatio={{base: "16/9", smDown: "21/9"}} width="100%" >
            <ExportedImage
              src={image}
              alt={name}
              width={384}
              height={216}
              style={{objectFit: "cover"}}
            />
          </Box>
          <Card.Body p={4}>
            <Card.Title textAlign="center" textStyle={{base:"2xl", mdDown:"xl"}} fontWeight="bold">{name}</Card.Title>
          </Card.Body>
        </Card.Root>
      </NextLink>
    </ChakraLink>
  )
}
