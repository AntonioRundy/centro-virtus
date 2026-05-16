import InstitutionalHero  from "@/components/InstitutionalHero";
import DivisionsGateway   from "@/components/DivisionsGateway";
import Navbar             from "@/components/Navbar";
import Footer             from "@/components/Footer";
import WhatsAppFloat      from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <InstitutionalHero />
        <DivisionsGateway />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
