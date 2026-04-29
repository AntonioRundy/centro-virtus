import Navbar               from "@/components/Navbar";
import HeroSection          from "@/components/HeroSection";
import ProofStrip           from "@/components/ProofStrip";
import ServicesSection      from "@/components/ServicesSection";
import CourseSelector       from "@/components/CourseSelector";
import MethodologySection   from "@/components/MethodologySection";
import InternationalSection from "@/components/InternationalSection";
import EquipeSection        from "@/components/EquipeSection";
import TeamSection          from "@/components/TeamSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection           from "@/components/CTASection";
import ContactSection       from "@/components/ContactSection";
import WhatsAppFloat        from "@/components/WhatsAppFloat";
import Footer               from "@/components/Footer";

// Funnel: Atenção → Confiança → Solução → Disciplinas/Preços → Método → Escolas → Equipa → CTA
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProofStrip />
        <ServicesSection />
        <CourseSelector />
        <MethodologySection />
        <InternationalSection />
        <EquipeSection />
        <TeamSection />
        <DifferentialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
