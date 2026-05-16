"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const services = [
  { n: "01", title: "Monografias",            desc: "Orientação completa desde a definição do tema até à defesa, com revisão metodológica e de conteúdo." },
  { n: "02", title: "Dissertações de Mestrado", desc: "Apoio especializado no quadro teórico, metodologia, recolha de dados e redação científica rigorosa." },
  { n: "03", title: "Metodologia Científica",  desc: "Formação e orientação em métodos qualitativos, quantitativos e mistos para investigação séria." },
  { n: "04", title: "Análise Estatística",     desc: "Tratamento de dados com SPSS, Excel e R, com interpretação orientada aos objectivos da investigação." },
  { n: "05", title: "Revisão Académica",       desc: "Revisão crítica de conteúdo, estrutura, coerência argumentativa e normas bibliográficas." },
  { n: "06", title: "Estruturação de Pesquisa", desc: "Apoio na organização do projecto de pesquisa, definição de objectivos e enquadramento teórico." },
  { n: "07", title: "Softwares Científicos",   desc: "Orientação no uso de SPSS, NVivo, Atlas.ti, R, MAXQDA e outras ferramentas académicas." },
  { n: "08", title: "Interpretação de Dados",  desc: "Análise, leitura e apresentação de resultados de forma clara, rigorosa e académica." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function CsServices() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <section id="servicos" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-20">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Serviços</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Áreas de orientação.
          </h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          {services.map(({ n, title, desc }) => (
            <motion.div key={n} variants={itemVariants}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(null)}
              className="rounded-2xl p-8 lg:p-9 flex flex-col transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "#111520",
                border: hovered === n ? "1px solid rgba(197,168,128,0.25)" : "1px solid rgba(255,255,255,0.07)",
                transform: hovered === n ? "translateY(-4px)" : "translateY(0)",
              }}>
              <span className="text-xs font-bold tracking-[0.22em] uppercase block mb-6" style={{ color: "rgba(197,168,128,0.48)" }}>{n}</span>
              <h3 className={`${cormorant.className} font-semibold text-xl mb-3 leading-tight`} style={{ color: "#FFFFFF" }}>{title}</h3>
              <p className="text-xs leading-[1.80] flex-1" style={{ color: "rgba(244,244,242,0.52)" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
