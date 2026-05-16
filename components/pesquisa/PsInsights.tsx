"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800", "900"] });

const insights = [
  {
    quote: "Em Angola, 73% das decisões empresariais ainda são tomadas sem suporte de dados estruturados. É exactamente aí que a Virtus actua.",
    source: "Virtus P&D · Relatório Interno 2024",
  },
  {
    quote: "A capacidade de recolher, analisar e interpretar dados locais é o maior diferenciador competitivo para organizações que operam em mercados emergentes.",
    source: "Virtus P&D · Inteligência Aplicada",
  },
];

export default function PsInsights() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
            Insights
          </span>
          <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black`}
            style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            O que os dados revelam.
          </h2>
        </motion.div>

        {/* Big stat highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.70 }}
          className="rounded-2xl p-12 lg:p-16 mb-6 text-center"
          style={{ backgroundColor: "rgba(232,160,72,0.06)", border: "1px solid rgba(232,160,72,0.14)" }}
        >
          <p className={`${outfit.className} text-6xl sm:text-7xl lg:text-8xl font-black mb-4`}
            style={{
              background: "linear-gradient(135deg, #E8A048 0%, #C5A880 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
            73%
          </p>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto" style={{ color: "rgba(244,244,242,0.70)" }}>
            das organizações angolanas tomam decisões críticas sem dados estruturados.
          </p>
          <p className="text-xs mt-6 font-semibold tracking-widest uppercase" style={{ color: "rgba(244,244,242,0.30)" }}>
            Virtus P&D · Relatório de Mercado 2024
          </p>
        </motion.div>

        {/* Quotes */}
        <div className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {insights.map(({ quote, source }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.60, delay: i * 0.10 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6 lg:gap-10 items-start"
            >
              <span className={`${outfit.className} text-5xl font-black leading-none hidden lg:block`}
                style={{ color: "rgba(232,160,72,0.28)" }}>&quot;</span>
              <div>
                <p className="text-lg sm:text-xl leading-[1.65] mb-5" style={{ color: "rgba(244,244,242,0.75)" }}>
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px" style={{ backgroundColor: "#E8A048" }} />
                  <p className="text-xs font-semibold tracking-wide" style={{ color: "rgba(244,244,242,0.38)" }}>{source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
