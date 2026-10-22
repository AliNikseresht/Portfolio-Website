import type { Metadata, Viewport } from "next"
import { DM_Mono, Manrope } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const monoFont = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
})

const siteUrl = "https://alinikseresht.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Nikseresht — Independent Frontend Developer",
    template: "%s | Ali Nikseresht",
  },
  description:
    "Ali Nikseresht builds thoughtful, high-performance web interfaces with React, Next.js, and TypeScript.",
  applicationName: "Ali Nikseresht Portfolio",
  authors: [{ name: "Ali Nikseresht", url: siteUrl }],
  creator: "Ali Nikseresht",
  keywords: [
    "Ali Nikseresht",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Interface Development",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ali Nikseresht — Independent Frontend Developer",
    description:
      "Thoughtful, high-performance web interfaces built with modern frontend technologies.",
    siteName: "Ali Nikseresht",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ali Nikseresht — Independent Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Nikseresht — Independent Frontend Developer",
    description:
      "Thoughtful, high-performance web interfaces built with modern frontend technologies.",
    images: ["/opengraph-image"],
    creator: "@AliNikseresht",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#11130f",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${displayFont.variable} ${monoFont.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
