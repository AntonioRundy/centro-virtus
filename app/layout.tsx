import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centro de Estudos Galileu | Acompanhamento Escolar Personalizado",
  description:
    "Acompanhamento escolar personalizado em Luanda. Explicações, apoio escolar e preparação para exames — online e ao domicílio.",
  keywords: ["explicações", "apoio escolar", "Luanda", "Centro Galileu", "preparação exames"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
