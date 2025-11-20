import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "علی نیک سرشت | توسعه‌دهنده فرانت‌اند | Ali Nikseresht",
  description:
    "وب‌سایت شخصی علی نیک سرشت — توسعه‌دهنده فرانت‌اند متخصص در Next.js، React و تکنولوژی‌های مدرن وب. | Personal portfolio of Ali Nikseresht — Front-End Developer specialized in React and Next.js.",

  keywords: [
    // English keywords
    "Ali Nikseresht",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    // Farsi keywords
    "علی نیک سرشت",
    "توسعه دهنده فرانت اند",
    "برنامه نویس ریکت",
    "برنامه نویس Next.js",
    "نمونه کار برنامه نویس",
  ],

  authors: [{ name: "Ali Nikseresht" }, { name: "علی نیک سرشت" }],

  creator: "Ali Nikseresht",

  openGraph: {
    title: "علی نیک سرشت | توسعه‌دهنده فرانت‌اند",
    description:
      "نمونه‌کارها، مهارت‌ها و تجربیات علی نیک سرشت — توسعه‌دهنده فرانت‌اند متخصص در Next.js و React.",
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    siteName: "Ali Nikseresht",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            {children}
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
