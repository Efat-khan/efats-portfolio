import type { Metadata } from "next";
import { Archivo, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efat Khan — Full-Stack & AI Software Engineer",
  description:
    "Portfolio of Efat Khan, a full-stack and AI-driven software engineer building intelligent web platforms with React, Next.js, Laravel, FastAPI and modern LLMs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-full flex flex-col bg-forest-900 text-cream`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
