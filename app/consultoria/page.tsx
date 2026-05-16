import type { Metadata } from "next";
import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import WhatsAppFloat   from "@/components/WhatsAppFloat";
import CsHero          from "@/components/consultoria/CsHero";
import CsStats         from "@/components/consultoria/CsStats";
import CsServices      from "@/components/consultoria/CsServices";
import CsTabs          from "@/components/consultoria/CsTabs";
import CsProcess       from "@/components/consultoria/CsProcess";
import CsEditorial     from "@/components/consultoria/CsEditorial";
import CsTestimonials  from "@/components/consultoria/CsTestimonials";
import CsAreas         from "@/components/consultoria/CsAreas";
import CsFAQ           from "@/components/consultoria/CsFAQ";
import CsContact       from "@/components/consultoria/CsContact";
import CTASection      from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Virtus Consultoria Académica | Orientação Científica Premium — Centro de Estudos Virtus",
  description:
    "Orientação especializada para monografias, dissertações, metodologia científica e análise de dados académicos em Luanda, Angola. Consultoria académica premium.",
};

export default function ConsultoriaPage() {
  return (
    <>
      <Navbar />
      <main>
        <CsHero />
        <CsStats />
        <CsServices />
        <CsTabs />
        <CsProcess />
        <CsEditorial />
        <CsTestimonials />
        <CsAreas />
        <CsFAQ />
        <CsContact />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
