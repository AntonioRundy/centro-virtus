import Navbar               from "@/components/Navbar";
import HeroSection          from "@/components/HeroSection";
import ProofStrip           from "@/components/ProofStrip";
import ServicesSection      from "@/components/ServicesSection";
import CourseSelector       from "@/components/CourseSelector";
import MethodologySection   from "@/components/MethodologySection";
import InternationalSection from "@/components/InternationalSection";
import EquipeSection        from "@/components/EquipeSection";
import TeamSection          from "@/components/TeamSection";
import TestimonialsSection  from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection           from "@/components/FAQSection";
import CTASection           from "@/components/CTASection";
import ContactSection       from "@/components/ContactSection";
import WhatsAppFloat        from "@/components/WhatsAppFloat";
import Footer               from "@/components/Footer";

// Funnel: Atenção → Confiança → Solução → Disciplinas/Preços → Método → Escolas → Equipa → Prova Social → CTA
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
        <TestimonialsSection />
        <DifferentialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
