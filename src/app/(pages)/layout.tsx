import styles from "./page.module.css";
import { Box, VStack } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { HEADER_HEIGHT } from "@/data/navigation";
 

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box marginTop={HEADER_HEIGHT} className={styles.pageBackground} backgroundColor={{_light: "#fafafa", _dark: "#0a0a0a"}}>
      <VStack as="main" className={styles.pageForeground} backgroundColor={{_light: "white", _dark: "#111"}} gap={0}>
        {children}
        <Toaster />
      </VStack>
    </Box>
  );
}