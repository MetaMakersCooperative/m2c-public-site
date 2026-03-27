import { HEADER_HEIGHT } from '@/data/navigation';
import { Box, BoxProps, Heading, HeadingProps } from '@chakra-ui/react';

export interface SectionProps extends BoxProps {
    title?: string;
    headingProps?: Partial<HeadingProps>;
}

export const BANNER_HEIGHT = "50px";

export default function SlimBanner({
    title,
    headingProps,
    ...boxProps
}: SectionProps) {
    return (
        <Box position={"fixed"} 
            alignContent="center" 
            top={HEADER_HEIGHT} 
            height={BANNER_HEIGHT} 
            width={"100%"} {...boxProps}
            zIndex={900}
            _light={{boxShadow: "sm"}}
        >
            <Heading
                as="h1"
                textAlign={"center"}
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