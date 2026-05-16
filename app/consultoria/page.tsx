import type { Metadata } from "next";
import Navbar        from "@/components/Navbar";
import DivisionHero  from "@/components/DivisionHero";
import Footer        from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Virtus Consultoria Académica | Centro de Estudos Virtus",
  description:
    "Orientação especializada para monografias, dissertações, metodologia científica e análise de dados académicos em Luanda, Angola.",
};

const services = [
  {
    title: "Orientação de Monografias",
    desc: "Acompanhamento estruturado desde a definição do tema até à defesa, com revisão de conteúdo e formatação.",
  },
  {
    title: "Dissertações de Mestrado",
    desc: "Apoio especializado na construção do quadro teórico, metodologia, recolha de dados e redação científica.",
  },
  {
    title: "Metodologia Científica",
    desc: "Formação e orientação em métodos quantitativos, qualitativos e mistos para investigação académica.",
  },
  {
    title: "Análise Estatística",
    desc: "Tratamento de dados com SPSS, Excel e R, com interpretação orientada aos objetivos da investigação.",
  },
];

const profiles = [
  { label: "Finalistas", desc: "Alunos de licenciatura a elaborar a monografia final de curso." },
  { label: "Mestrandos", desc: "Estudantes de pós-graduação em fase de dissertação ou tese." },
  { label: "Investigadores", desc: "Profissionais e académicos a conduzir pesquisas independentes." },
  { label: "Instituições", desc: "Universidades e organizações que necessitam de apoio metodológico." },
];

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Virtus Consultoria Académica.")}`;

export default function ConsultoriaPage() {
  return (
    <>
      <Navbar />
      <main>
        <DivisionHero
          number="02"
          division="Consultoria Académica"
          name="Virtus Consultoria Académica"
          tagline="Orientação científica para investigação de excelência."
          description="Apoio especializado a estudantes, investigadores e instituições na produção de trabalhos académicos com rigor metodológico, fundamentação teórica e análise de dados de qualidade."
          accentColor="#C5A880"
        />

        {/* Services */}
        <section className="section-gray py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="label-gold block mb-3">Serviços</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ color: "#F4F4F2" }}>
                Áreas de consultoria
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl p-10" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h3 className="text-xl font-extrabold mb-4" style={{ color: "#F4F4F2" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.55)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="label-gold block mb-3">Para quem</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ color: "#F4F4F2" }}>
                Quem beneficia
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profiles.map((p) => (
                <div key={p.label} className="rounded-2xl p-10" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h3 className="text-lg font-extrabold mb-3" style={{ color: "#F4F4F2" }}>{p.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.52)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ color: "#F4F4F2" }}>
              Tem uma monografia ou dissertação?
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(244,244,242,0.50)" }}>
              Fale connosco para uma análise inicial do seu projecto académico.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 24px rgba(22,163,74,0.30)" }}
            >
              Solicitar Consulta →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
