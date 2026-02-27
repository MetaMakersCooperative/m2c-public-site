"use client"

import { ZoneProps } from "@/data/zones"
import { AspectRatio, Button, Card } from "@chakra-ui/react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer";
import Zone from "@/app/(zones)/[slug]/page";

export const ZoneCard = (props: ZoneProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" variant="elevated"       
      transition="all 0.3s ease-in-out" // Smooth transition
      _hover={{
        boxShadow: `0 0 20px 5px ${props.color}bf`, // glow effect
        transform: "translateY(-5px)", // Optional slight lift effect
      }}
      borderLeftColor={props.color} 
      borderLeftStyle={"solid"} 
      borderLeftWidth={"10px"}
      _dark={{backgroundColor: "#282828"}}>
      <Link href={'/'+ props.slug}>
      <ExportedImage
        src={props.image}
        alt={props.name}
        width={384}
        height={216}
        style={{objectFit: "cover", aspectRatio: "16/9"}}
      />
      <Card.Body p={4}>
        <Card.Title textAlign="center" textStyle="3xl" fontWeight="bold">{props.name}</Card.Title>
      </Card.Body>
      </Link>
    </Card.Root>
  )
}
