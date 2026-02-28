import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
    backgroundColor?: string;
    headingProps?: Partial<HeadingProps>;
}

export default function Section({
    id,
    title,
    children,
    backgroundColor,
    headingProps,
}: SectionProps) {
    return (
        <Box as="section" id={id} bg={backgroundColor} p={8} width={"100%"}>
            <Link href={`#${id}`} style={{ textDecoration: "none" }}>
            <Heading
                as="h2"
                size="4xl"
                mb={6}
                {...headingProps}
                width={"fit-content"}
                borderBottom={"4px solid"}
            >
                {title}
            </Heading>
            </Link>
            {children}
        </Box>
    );
}