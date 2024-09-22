import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import settings from "@/settings/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Math Tuition - Top-Quality Math Education",
  description:
    "Top-quality math education for students of all ages and levels. Learn math in a fun and interactive way with experienced tutors.",
  keywords: [
    "math",
    "tuition",
    "education",
    "learning",
    "tutor",
    "online",
    "in-person",
    "interactive",
    "fun",
    "experienced",
    "students",
    "all ages",
    "all levels",
    "math tuition",
    "math education",
    "online math classes",
    "math tutoring",
    "math learning",
    "math courses",
  ],
  metadataBase: new URL(settings.url),
  openGraph: {
    title: "Math Tuition - Top-Quality Math Education",
    description:
      "Top-quality math education for students of all ages and levels. Learn math in a fun and interactive way with experienced tutors.",
    type: "website",
    countryName: "India",
    locale: "en_IN",
    siteName: "Math Tuition",
    determiner: "auto",
    url: settings.url,
  },
  applicationName: "Math Tuition",
  category: "education",
  classification: "education",
  creator: "Kabir Jaipal",
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
