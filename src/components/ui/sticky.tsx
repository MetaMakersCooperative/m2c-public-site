import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface StickyComponentProps extends BoxProps {
    children: ReactNode;
}
export function StickyComponent({children, ...boxProps}: StickyComponentProps) {
    return (
            <Box 
                {...boxProps}
                position="sticky"
                top="0"
                zIndex="900"
                alignSelf="flex-start"
            >
                {children}
            </Box>
    );
}