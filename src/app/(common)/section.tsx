import { Box, BoxProps, Heading, HeadingProps } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface SectionProps extends BoxProps {
    id?: string;
    title?: string;
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
    ...boxProps
}: SectionProps) {
    return (
        <Box as="section" id={id} bg={backgroundColor} p={8} width={"100%"} {...boxProps}>
            {id && title && (
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
            )}
            {children}
        </Box>
    );
}