import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import Section, { SectionProps } from './section';

interface SubSectionProps extends SectionProps {
}

export default function SubSection({children, ...props}: SubSectionProps) {
    return (
        <Section headingProps={{as: "h3", fontSize: "2xl"}} {...props}>
            {children}
        </Section>
    );
}