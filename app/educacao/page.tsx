import type { Metadata } from "next";
import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import WhatsAppFloat   from "@/components/WhatsAppFloat";
import EduHero         from "@/components/educacao/EduHero";
import EduStats        from "@/components/educacao/EduStats";
import EduBenefits     from "@/components/educacao/EduBenefits";
import EduLevels       from "@/components/educacao/EduLevels";
import EduMethodology  from "@/components/educacao/EduMethodology";
import EduTestimonials from "@/components/educacao/EduTestimonials";
import EduTeam         from "@/components/educacao/EduTeam";
import EduServices     from "@/components/educacao/EduServices";
import EduFAQ          from "@/components/educacao/EduFAQ";
import CourseSelector  from "@/components/CourseSelector";
import CTASection      from "@/components/CTASection";
import ContactSection  from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Virtus Educação | Explicações e Apoio Escolar Premium — Centro de Estudos Virtus",
  description:
    "Plataforma educacional premium em Luanda. Explicações personalizadas, preparação para exames e acompanhamento escolar — online e ao domicílio. Primeira aula gratuita.",
};

export default function EducacaoPage() {
  return (
    <>
      <Navbar />
      <main>
        <EduHero />
        <EduStats />
        <EduServices />
        <EduBenefits />
        <EduLevels />
        <CourseSelector />
        <EduMethodology />
        <EduTestimonials />
        <EduTeam />
        <EduFAQ />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
