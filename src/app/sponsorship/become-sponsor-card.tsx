'use client';
import { BenefitProps } from '@/data/zones';
import { Box, Button, Card, Link, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';
import { LuExternalLink } from 'react-icons/lu';

export default function BecomeSponsorCard() {
    return (
        <Card.Root width="100%" flexDirection={{base: "row", lgDown: "column"}} overflow="hidden">
            <VStack  p={4} alignItems={"flex-start"} justifyContent={"space-between"}>
                <Card.Body>
                    <Card.Title p={4} fontSize={{base:"5xl", mdDown:"2xl"}} lineHeight={1.25}>Sponsorship</Card.Title>
                    <Card.Description p={4} fontSize={{base:"4xl", mdDown:"xl"}}>Get a spot on our interactive sponsor wall!</Card.Description>
                </Card.Body>
                <Card.Footer p={4} fontSize={"md"} color="gray.500" justifyContent={"flex-end"}>
                    <Button asChild variant={"solid"} colorPalette={"purple"} size={"xl"} p={4}>
                        <Link href="https://www.zeffy.com/en-CA/ticketing/gearing-up-for-growth" color={"white"} target="_blank">
                            Become a Sponsor <LuExternalLink />
                        </Link>
                    </Button>
                </Card.Footer>
            </VStack>
            <Box asChild aspectRatio={{base: "4/3"}} display={{base: "none", lgDown: "flex"}}>
                <ExportedImage
                    src="images/funding/sponsor-wall.webp"
                    alt="Interactive Sponsor Wall"
                    width={992}
                    height={744}
                    style={{objectFit: "cover"}}
                />
            </Box>
            <Box asChild aspectRatio={{base: "4/3"}} display={{base: "flex", lgDown: "none"}}>
                <ExportedImage
                    src="images/funding/sponsor-wall.webp"
                    alt="Interactive Sponsor Wall"
                    width={800}
                    height={600}
                    style={{objectFit: "cover"}}
                />
            </Box>
        </Card.Root>
    );
}