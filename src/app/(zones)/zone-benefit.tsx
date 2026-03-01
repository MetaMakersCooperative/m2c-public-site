'use client';
import { BenefitProps } from '@/data/zones';
import { Box, Card, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';

export default function ZoneBenefit({ image, title, description, footnote }: BenefitProps) {
    return (
        <Card.Root width="100%" flexDirection={{base: "row", mdDown: "column"}} overflow="hidden">
            <Box asChild aspectRatio={{base: "4/3", mdDown:"16/9"}}>
                <ExportedImage
                    src={image}
                    alt={title}
                    width={384}
                    height={288}
                    style={{objectFit: "cover"}}
                />
            </Box>
            <VStack  p={4} alignItems={"flex-start"} justifyContent={"space-between"}>
                <Card.Body>
                    <Card.Title p={4} fontSize={"4xl"} lineHeight={1.25}>{title}</Card.Title>
                    <Card.Description p={4} fontSize={"xl"}>{description}</Card.Description>
                </Card.Body>
                {footnote && (
                    <Card.Footer p={4} fontSize={"md"} color="gray.500" justifyContent={"flex-end"}>
                        * {footnote}
                    </Card.Footer>
                )}
            </VStack>
        </Card.Root>
    );
}