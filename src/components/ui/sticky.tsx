import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface StickyProps extends BoxProps {
    children: ReactNode;
}
export function StickyComponent({children, ...boxProps}: StickyProps) {
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