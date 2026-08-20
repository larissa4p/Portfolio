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
  title: "Larissa Bessa — Desenvolvedora Web",
  description:
    "Desenvolvedora web especializada em WordPress, PHP, React.js e Next.js. Baseada em Brasília, disponível para trabalho remoto.",
  keywords: [
    "desenvolvedora web",
    "WordPress",
    "PHP",
    "React",
    "Next.js",
    "front-end",
    "Brasília",
  ],
  authors: [{ name: "Larissa Bessa" }],
  openGraph: {
    title: "Larissa Bessa — Desenvolvedora Web",
    description:
      "Desenvolvedora web especializada em WordPress, PHP e React.js. 4+ anos entregando projetos reais.",
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
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
