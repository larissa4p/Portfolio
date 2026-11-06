import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      "Desenvolvedora web especializada em WordPress, PHP e React.js. 5 anos entregando projetos reais.",
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
      className={`${bricolage.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
