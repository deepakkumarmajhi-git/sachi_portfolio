import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sachidananda Pattanailk",
  description: "Architectural Designer, Full-Stack Developer, and AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden cursor-none md:cursor-none">
        <CustomCursor />
        <ScrollToTop />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}