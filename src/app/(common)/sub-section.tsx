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

export default function SubSection({
    id,
    title,
    children,
    backgroundColor,
    headingProps,
}: SectionProps) {
    return (
        <Box id={id} bg={backgroundColor} p={8} width={"100%"}>
            <Link href={`#${id}`} style={{ textDecoration: "none" }}>
            <Heading
                as="h3"
                size="2xl"
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