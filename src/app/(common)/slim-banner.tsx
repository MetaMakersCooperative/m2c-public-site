import { AbsoluteCenter, CenterProps, Box, BoxProps, Heading, HeadingProps, Center } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface SectionProps extends BoxProps {
    title?: string;
    headingProps?: Partial<HeadingProps>;
}

export default function SlimBanner({
    title,
    headingProps,
    ...boxProps
}: SectionProps) {
    return (
        <Box px={8} py={2} width={"100%"} {...boxProps} bgColor={{_dark: "gray.800", _light:"gray.200"}} color={{_dark: "white", _light: "black"}}>
            <Heading
                as="h1"
                size={{smDown:"md",base:"lg"}} 
                fontWeight={"normal"}
                letterSpacing={"wide"}
                {...headingProps}
            >
                {title}
            </Heading>
        </Box>
    );
}