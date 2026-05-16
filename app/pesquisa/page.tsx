import type { Metadata } from "next";
import Navbar         from "@/components/Navbar";
import Footer         from "@/components/Footer";
import WhatsAppFloat  from "@/components/WhatsAppFloat";
import PsHero         from "@/components/pesquisa/PsHero";
import PsStats        from "@/components/pesquisa/PsStats";
import PsTabs         from "@/components/pesquisa/PsTabs";
import PsDashboard    from "@/components/pesquisa/PsDashboard";
import PsMethodology  from "@/components/pesquisa/PsMethodology";
import PsInsights     from "@/components/pesquisa/PsInsights";
import PsSectors      from "@/components/pesquisa/PsSectors";
import PsContact      from "@/components/pesquisa/PsContact";

export const metadata: Metadata = {
  title: "Virtus Pesquisa & Desenvolvimento | Inteligência Aplicada — Centro de Estudos Virtus",
  description:
    "Pesquisa científica, estudos de mercado, levantamentos sociais e inteligência baseada em dados reais para decisões estratégicas em Angola.",
};

export default function PesquisaPage() {
  return (
    <>
      <Navbar />
      <main>
        <PsHero />
        <PsStats />
        <PsTabs />
        <PsDashboard />
        <PsMethodology />
        <PsInsights />
        <PsSectors />
        <PsContact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
