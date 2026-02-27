"use client"

import { ZoneProps } from "@/data/zones"
import { Button, Card, Image } from "@chakra-ui/react"
import Link from "next/link"

export const ZoneCard = (props: ZoneProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={props.image}
        alt={props.name}
      />
      <Card.Body p={2}>
        <Card.Title textStyle="2xl" fontWeight="medium">{props.name}</Card.Title>
      </Card.Body>
      <Card.Footer p={2} justifyContent="Center">
        <Link href={'/'+ props.slug}><Button variant="solid" padding={4}>Learn More</Button></Link>
      </Card.Footer>
    </Card.Root>
  )
}
