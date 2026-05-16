"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const areas = [
  "Gestão & Administração", "Direito", "Medicina & Saúde", "Engenharia Civil",
  "Geociências", "Ciências Sociais", "Economia", "Psicologia",
  "Educação", "Arquitectura", "Engenharia Petróleo", "Ciências Ambientais",
];
const tools = [
  { name: "SPSS", desc: "Análise estatística" },
  { name: "R", desc: "Estatística avançada" },
  { name: "NVivo", desc: "Análise qualitativa" },
  { name: "Excel", desc: "Dados e gráficos" },
  { name: "Atlas.ti", desc: "Codificação qualitativa" },
  { name: "MAXQDA", desc: "Métodos mistos" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const itemVariants = { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.42 } } };

export default function CsAreas() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-20">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Abrangência</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Áreas e ferramentas apoiadas.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Areas */}
          <div>
            <p className="text-xs font-semibold tracking-[0.20em] uppercase mb-6" style={{ color: "rgba(197,168,128,0.55)" }}>Áreas Académicas</p>
            <motion.div className="grid grid-cols-2 gap-2"
              variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              {areas.map((a) => (
                <motion.div key={a} variants={itemVariants}
                  className="px-4 py-3 rounded-xl text-xs font-medium cursor-default transition-all duration-250"
                  style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(244,244,242,0.60)" }}
                  whileHover={{ borderColor: "rgba(197,168,128,0.22)", color: "#F4F4F2" }}>
                  {a}
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Tools */}
          <div>
            <p className="text-xs font-semibold tracking-[0.20em] uppercase mb-6" style={{ color: "rgba(197,168,128,0.55)" }}>Softwares Científicos</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map(({ name, desc }) => (
                <div key={name} className="rounded-xl p-5"
                  style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className={`${cormorant.className} font-bold text-xl mb-1`} style={{ color: "#FFFFFF" }}>{name}</p>
                  <p className="text-xs" style={{ color: "rgba(244,244,242,0.42)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
