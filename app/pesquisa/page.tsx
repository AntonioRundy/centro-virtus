import type { Metadata } from "next";
import Navbar        from "@/components/Navbar";
import DivisionHero  from "@/components/DivisionHero";
import Footer        from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Virtus Pesquisa & Desenvolvimento | Centro de Estudos Virtus",
  description:
    "Pesquisas científicas, estudos de mercado e inteligência baseada em dados para apoio a decisões académicas e empresariais em Angola.",
};

const services = [
  {
    title: "Pesquisa Científica",
    desc: "Desenvolvimento de estudos e investigações académicas com rigor metodológico e enquadramento teórico sólido.",
  },
  {
    title: "Estudos de Mercado",
    desc: "Análise de segmentos, comportamento do consumidor e mapeamento competitivo para decisões estratégicas.",
  },
  {
    title: "Análise de Dados",
    desc: "Tratamento estatístico, modelação de dados e visualização para extrair insights a partir de informação complexa.",
  },
  {
    title: "Relatórios de Inteligência",
    desc: "Produção de documentos técnicos, white papers e relatórios analíticos com base em evidências e fontes primárias.",
  },
];

const process = [
  { step: "01", title: "Briefing & Diagnóstico", desc: "Reunião inicial para compreender os objetivos, contexto e requisitos do projeto de pesquisa." },
  { step: "02", title: "Metodologia & Plano", desc: "Definição da abordagem metodológica, instrumentos de recolha e calendário de execução." },
  { step: "03", title: "Execução & Entrega", desc: "Recolha de dados, análise, interpretação e produção do relatório final com recomendações." },
];

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Virtus Pesquisa & Desenvolvimento.")}`;

export default function PesquisaPage() {
  return (
    <>
      <Navbar />
      <main>
        <DivisionHero
          number="01"
          division="Pesquisa & Desenvolvimento"
          name="Virtus Pesquisa & Desenvolvimento"
          tagline="Inteligência baseada em dados reais."
          description="Produção de conhecimento científico, análise de mercado e inteligência de dados para apoiar decisões académicas, empresariais e institucionais em Angola e na região."
          accentColor="#16a34a"
        />

        {/* Services */}
        <section className="section-gray py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="label-gold block mb-3">Áreas de Actuação</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ color: "#F4F4F2" }}>
                O que desenvolvemos
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

        {/* Process */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="label-gold block mb-3">Processo</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ color: "#F4F4F2" }}>
                Como trabalhamos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {process.map((p) => (
                <div key={p.step} className="rounded-2xl p-10" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-xs font-bold tracking-[0.22em] uppercase mb-6 block" style={{ color: "rgba(22,163,74,0.60)" }}>{p.step}</span>
                  <h3 className="text-lg font-extrabold mb-3" style={{ color: "#F4F4F2" }}>{p.title}</h3>
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
              Tem um projeto de pesquisa?
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(244,244,242,0.50)" }}>
              Contacte-nos para discutir a metodologia, o âmbito e os objetivos do seu projeto.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 24px rgba(22,163,74,0.30)" }}
            >
              Iniciar Conversa →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
