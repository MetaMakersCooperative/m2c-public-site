import type { Metadata } from "next";
import styles from "./page.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Navigation from "./(common)/navigation";
import { Box, VStack } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta Makers Cooperative",
  description: "Windsor's nonprofit community makerspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Box className={styles.pageBackground} backgroundColor={{_light: "#fafafa", _dark: "#0a0a0a"}}>
            <VStack className={styles.pageForeground} backgroundColor={{_light: "white", _dark: "#111"}} gap={0}>
              <Navigation />
              <main>
                {children}
              </main>
              <Toaster />
            </VStack>
          </Box>
        </Provider>
      </body>
    </html>
  );
}