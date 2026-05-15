import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const BASE_URL = "https://antoniorundy.github.io/centro-galileu3";

export const metadata: Metadata = {
  title: "Centro de Estudo Galileu | Explicações e Apoio Escolar em Luanda",
  description:
    "Acompanhamento escolar personalizado em Luanda, Angola. Explicações, apoio escolar e preparação para exames — online e ao domicílio. Primeira aula gratuita.",
  keywords: [
    "explicações Luanda",
    "apoio escolar Angola",
    "Centro de Estudo Galileu",
    "preparação exames Luanda",
    "explicador Luanda",
    "EPL apoio escolar",
    "LIS explicações",
    "aulas online Angola",
  ],
  authors: [{ name: "Centro de Estudo Galileu" }],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Centro de Estudo Galileu | Explicações e Apoio Escolar em Luanda",
    description:
      "Acompanhamento personalizado com professores experientes. Online e ao domicílio. Primeira aula gratuita, sem compromisso.",
    siteName: "Centro de Estudo Galileu",
    locale: "pt_AO",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Centro de Estudo Galileu — Apoio Escolar em Luanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de Estudo Galileu | Explicações e Apoio Escolar em Luanda",
    description:
      "Acompanhamento personalizado com professores experientes. Online e ao domicílio. Primeira aula gratuita.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Centro de Estudo Galileu",
  description:
    "Acompanhamento escolar personalizado em Luanda, Angola. Explicações online e ao domicílio.",
  url: BASE_URL,
  telephone: "+244946038986",
  email: "centrogalileu@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Luanda",
    addressCountry: "AO",
  },
  priceRange: "6000 AOA/hora",
  openingHours: "Mo-Su 08:00-20:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
