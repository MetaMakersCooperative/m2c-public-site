import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Navigation from "./(common)/navigation";
import type { Viewport } from 'next'
 
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
      <body  className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  viewportFit: 'cover'
}