'use client';
import { BenefitProps } from '@/data/zones';
import { Box, Card, CardRootProps, VStack } from '@chakra-ui/react';
import ExportedImage from 'next-image-export-optimizer';

export interface ZoneBenefitProps extends CardRootProps {
    image: string,
    title: string,
    description: string, 
    footnote: string
}

export default function ZoneBenefit({ image, title, description, footnote, ...props }: BenefitProps) {
    return (
        <Card.Root width="100%" flexDirection={{base: "row", mdDown: "column"}} overflow="hidden" {...props}>
            <Box asChild aspectRatio={{base: "4/3", mdDown:"16/9"}} mdDown={{width: "100%"}} >
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
                    <Card.Title p={4} fontSize={{base:"4xl", mdDown:"xl"}} lineHeight={1.25}>{title}</Card.Title>
                    <Card.Description p={4} fontSize={{base:"xl", mdDown:"md"}}>{description}</Card.Description>
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