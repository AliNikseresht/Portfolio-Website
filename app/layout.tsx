import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "علی نیک سرشت | توسعه‌دهنده فرانت‌اند | Ali Nikseresht",
  description:
    "وب‌سایت شخصی علی نیک سرشت — توسعه‌دهنده فرانت‌اند متخصص در Next.js، React و تکنولوژی‌های مدرن وب.",
  keywords: [
    "Ali Nikseresht",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Javascript Developer",
    "علی نیک سرشت",
    "توسعه دهنده فرانت اند",
    "توسعه دهنده وب",
    "توسعه دهنده جاوااسکریپت",
    "برنامه نویس ریکت",
    "برنامه نویس Next.js",
    "نمونه کار برنامه نویس",
  ],
  authors: [{ name: "Ali Nikseresht" }, { name: "علی نیک سرشت" }],
  creator: "Ali Nikseresht",
  robots: "index, follow",
  alternates: {
    canonical: "https://alinikseresht.vercel.app/",
    languages: {
      "en-US": "https://alinikseresht.vercel.app/en",
      "fa-IR": "https://alinikseresht.vercel.app/",
    },
  },
  openGraph: {
    title: "علی نیک سرشت | توسعه‌دهنده فرانت‌اند",
    description:
      "نمونه‌کارها، مهارت‌ها و تجربیات علی نیک سرشت — توسعه‌دهنده فرانت‌اند متخصص در Next.js و React.",
    type: "website",
    url: "https://alinikseresht.vercel.app/",
    siteName: "Ali Nikseresht",
    locale: "fa_IR",
    alternateLocale: "en_US",
    images: [
      {
        url: "https://alinikseresht.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Nikseresht Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "علی نیک سرشت | توسعه‌دهنده فرانت‌اند",
    description:
      "نمونه‌کارها، مهارت‌ها و تجربیات علی نیک سرشت — توسعه‌دهنده فرانت‌اند متخصص در Next.js و React.",
    creator: "@AliNikseresht",
    images: ["https://alinikseresht.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://alinikseresht.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
        suppressHydrationWarning
        className={`${plusJakarta.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Ali Nikseresht",
                url: "https://alinikseresht.vercel.app/",
                sameAs: [
                  "https://github.com/AliNikseresht",
                  "https://www.linkedin.com/in/alinikseresht-web/",
                  "https://twitter.com/AliNikseresht",
                ],
                jobTitle: "Front-End Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance / Portfolio",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
