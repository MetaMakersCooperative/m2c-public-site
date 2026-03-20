import { HEADER_HEIGHT } from "@/data/navigation";
import { Box } from "@chakra-ui/react";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box as="main" width="100%" height="100%">
        {children}
    </Box>
  );
}