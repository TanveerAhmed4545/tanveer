import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScroll } from "@/components/base/smooth-scroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanveer Ahmed — Senior Web Developer · Dhaka, Bangladesh",
  description:
    "Portfolio of Tanveer Ahmed, a Senior Web Developer from Dhaka, Bangladesh. Specializing in custom full-stack development (React, Node.js, MongoDB) and CMS platforms (Shopify, Squarespace, Wix). View my latest projects and technical expertise.",
  keywords: [
    "Tanveer Ahmed",
    "Senior Web developer",
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
    title: "Tanveer Ahmed — Senior Web Developer",
    description:
      "Senior Web Developer from Dhaka, Bangladesh. Experienced in Shopify, Squarespace, Wix, and custom full-stack development with React, Node & MongoDB.",
    url: "",
    siteName: "Tanveer Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanveer Ahmed — Senior Web Developer",
    description:
      "Senior Web Developer from Dhaka, Bangladesh. Experienced in Shopify, Squarespace, Wix, and custom full-stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tanveer Ahmed",
    "url": "",
    "jobTitle": "Senior Web Developer",
    "description": "Senior Web Developer from Dhaka, Bangladesh. Experienced in Shopify, Squarespace, Wix, and custom full-stack development with React, Node, and MongoDB.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${outfit.variable} ${geist.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans overflow-x-hidden w-full`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="global-noise"></div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
