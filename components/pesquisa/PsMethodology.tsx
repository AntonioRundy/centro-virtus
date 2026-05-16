"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

const phases = [
  {
    n: "01",
    title: "Diagnóstico & Briefing",
    desc: "Reunião de alinhamento para compreender os objectivos, contexto, público-alvo e requisitos do projecto. Definimos o âmbito, os recursos e o cronograma detalhado.",
  },
  {
    n: "02",
    title: "Metodologia & Recolha",
    desc: "Desenho da metodologia científica mais adequada — quantitativa, qualitativa ou mista. Recolha de dados em campo com instrumentos validados: inquéritos, entrevistas, observação.",
  },
  {
    n: "03",
    title: "Análise & Entrega",
    desc: "Tratamento estatístico, análise crítica e interpretação dos resultados. Entrega de relatório completo com visualizações, conclusões e recomendações estratégicas accionáveis.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function PsMethodology() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
            Processo
          </span>
          <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black`}
            style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            Como trabalhamos.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {phases.map(({ n, title, desc }) => (
            <motion.div key={n} variants={itemVariants}
              className="rounded-2xl p-10 lg:p-12"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-bold tracking-[0.24em] uppercase block mb-8"
                style={{ color: "rgba(232,160,72,0.55)" }}>{n}</span>
              <h3 className={`${outfit.className} text-xl lg:text-2xl font-bold mb-4 leading-tight`}
                style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}>{title}</h3>
              <p className="text-sm leading-[1.80]" style={{ color: "rgba(244,244,242,0.55)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
