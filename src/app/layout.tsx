import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanveer Ahmed — MERN Stack Developer · Dhaka, Bangladesh",
  description:
    "Portfolio of Tanveer Ahmed, a MERN stack developer from Dhaka, Bangladesh. Specializing in React, Node.js, MongoDB, Express, Firebase, Stripe, and Tailwind CSS. Explore projects: Shadow Tourist, Haven Hearth, Artisan Haven.",
  keywords: [
    "Tanveer Ahmed",
    "MERN stack developer",
    "Dhaka developer",
    "Bangladesh web developer",
    "React developer",
    "Node.js",
    "MongoDB",
    "Express",
    "Firebase",
    "Stripe",
    "Tailwind CSS",
    "portfolio",
  ],
  authors: [{ name: "Tanveer Ahmed" }],
  openGraph: {
    title: "Tanveer Ahmed — MERN Stack Developer",
    description:
      "MERN stack developer from Dhaka, Bangladesh. Building secure, scalable web apps with React, Node, MongoDB & Express.",
    url: "https://tanveer-ahmed-194ed.web.app/",
    siteName: "Tanveer Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanveer Ahmed — MERN Stack Developer",
    description:
      "MERN stack developer from Dhaka, Bangladesh. Building secure, scalable web apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
