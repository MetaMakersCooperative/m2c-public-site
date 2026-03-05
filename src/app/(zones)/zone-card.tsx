"use client"

import { ZoneProps } from "@/data/zones"
import { AspectRatio, Button, Card, CardRootProps } from "@chakra-ui/react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer";
import Zone from "@/app/(zones)/[slug]/page";

export interface ZoneCardProps extends CardRootProps {
  slug: string,
  image: string,
  name: string,
  color: string
}

export const ZoneCard = ({slug, image, name, color, ...props}: ZoneCardProps) => {
  return (
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
      <Link href={'/'+ slug}>
      <ExportedImage
        src={image}
        alt={name}
        width={384}
        height={216}
        style={{objectFit: "cover", aspectRatio: "16/9"}}
      />
      <Card.Body p={4}>
        <Card.Title textAlign="center" textStyle="3xl" fontWeight="bold">{name}</Card.Title>
      </Card.Body>
      </Link>
    </Card.Root>
  )
}
