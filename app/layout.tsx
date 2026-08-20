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
  title: "Larissa Bessa — Web Developer",
  description:
    "Web developer specialized in WordPress, PHP, React.js and Next.js. Based in Brasília, open to remote work.",
  keywords: [
    "web developer",
    "WordPress",
    "PHP",
    "React",
    "Next.js",
    "front-end",
    "Brasília",
  ],
  authors: [{ name: "Larissa Bessa" }],
  openGraph: {
    title: "Larissa Bessa — Web Developer",
    description:
      "Web developer specialized in WordPress, PHP and React.js. 4+ years delivering real projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
