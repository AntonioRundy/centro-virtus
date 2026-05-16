"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const phases = [
  { n: "01", title: "Diagnóstico Académico", desc: "Análise inicial do projecto — tema, objectivos, estado actual, prazos e requisitos institucionais. Identificação das principais necessidades de orientação." },
  { n: "02", title: "Planeamento Científico", desc: "Definição da metodologia mais adequada, estrutura do trabalho, cronograma detalhado e instrumentos de recolha de dados. Plano personalizado por área científica." },
  { n: "03", title: "Acompanhamento Especializado", desc: "Sessões regulares de orientação com feedback técnico, revisão de capítulos, análise de dados e apoio contínuo até à conclusão do trabalho." },
  { n: "04", title: "Revisão e Consolidação", desc: "Revisão final de conteúdo, coerência, normas bibliográficas e formatação. Preparação para entrega e apoio na apresentação ou defesa pública." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function CsProcess() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-20">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Processo</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Como funciona a Consultoria Virtus.
          </h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          {phases.map(({ n, title, desc }) => (
            <motion.div key={n} variants={itemVariants} className="rounded-2xl p-10 lg:p-11"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-bold tracking-[0.24em] uppercase block mb-8" style={{ color: "rgba(197,168,128,0.50)" }}>{n}</span>
              <h3 className={`${cormorant.className} font-semibold text-xl mb-4 leading-tight`} style={{ color: "#FFFFFF" }}>{title}</h3>
              <p className="text-sm leading-[1.82]" style={{ color: "rgba(244,244,242,0.52)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
