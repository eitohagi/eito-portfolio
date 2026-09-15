import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eito-portfolio-six.vercel.app"),
  title: {
    default: "Eito Hagi | Creative Technologist",
    template: "%s | Eito Hagi",
  },

  description:
    "Eito Hagi (萩 栄斗) is a Creative Technologist exploring the intersection of physics, computation, simulation, and digital art.",

  keywords: [
    "Eito Hagi",
    "萩 栄斗",
    "Creative Technologist",
    "Creative Technology",
    "Media Art",
    "Digital Art",
    "Creative Coding",
    "Generative Art",
    "Physical Simulation",
    "TouchDesigner",
    "Houdini",
  ],

  authors: [
    {
      name: "Eito Hagi",
    },
  ],

  creator: "Eito Hagi",

  openGraph: {
    title: "Eito Hagi | Creative Technologist",
    description:
      "Exploring the intersection of physics, computation, simulation, and digital art.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eito Hagi | Creative Technologist",
    description:
      "Exploring the intersection of physics, computation, simulation, and digital art.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}