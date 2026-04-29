import Navbar              from "@/components/Navbar";
import HeroSection         from "@/components/HeroSection";
import MethodologySection  from "@/components/MethodologySection";
import ServicesSection     from "@/components/ServicesSection";
import CourseSelector      from "@/components/CourseSelector";
import InternationalSection from "@/components/InternationalSection";
import TeamSection         from "@/components/TeamSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection          from "@/components/CTASection";
import ContactSection      from "@/components/ContactSection";
import WhatsAppFloat       from "@/components/WhatsAppFloat";
import Footer              from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MethodologySection />
        <ServicesSection />
        <CourseSelector />
        <InternationalSection />
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
