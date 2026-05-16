"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

const tabs = [
  {
    id: "mercado",
    label: "Estudos de Mercado",
    title: "Inteligência de mercado baseada em dados reais.",
    desc: "Análise de segmentos, comportamento do consumidor, mapeamento competitivo e levantamento de oportunidades em Angola e na região. Os nossos estudos fornecem dados primários recolhidos em campo — não estimativas genéricas.",
    points: [
      "Análise de segmentação e posicionamento",
      "Mapeamento competitivo e benchmarking",
      "Comportamento do consumidor angolano",
      "Oportunidades de mercado por sector",
    ],
  },
  {
    id: "social",
    label: "Levantamentos Sociais",
    title: "Dados sociais que revelam a realidade.",
    desc: "Levantamentos quantitativos e qualitativos sobre comportamentos, opiniões e tendências sociais em Angola. Utilizamos metodologias validadas internacionalmente, adaptadas ao contexto local.",
    points: [
      "Inquéritos domiciliários e empresariais",
      "Focus groups e entrevistas em profundidade",
      "Análise de tendências e padrões sociais",
      "Relatórios com visualização de dados",
    ],
  },
  {
    id: "geo",
    label: "Geociências & Geofísica",
    title: "Investigação especializada em ciências da terra.",
    desc: "Estudos e investigações na área das Geociências e Geofísica aplicadas — com foco em Angola. Produção de dados científicos e análises técnicas para sectores estratégicos como mineração, petróleo e ambiente.",
    points: [
      "Análise geofísica e mapeamento territorial",
      "Estudos de solo e subsolo",
      "Avaliação de impacto ambiental",
      "Relatórios técnicos científicos",
    ],
  },
  {
    id: "cientifica",
    label: "Pesquisa Científica",
    title: "Produção de conhecimento com rigor académico.",
    desc: "Investigação científica com metodologia rigorosa, enquadramento teórico sólido e análise crítica. Colaboramos com instituições académicas e organizações que precisam de estudos fundamentados.",
    points: [
      "Revisão sistemática de literatura",
      "Desenho de estudos e investigações",
      "Análise estatística e interpretação",
      "Publicação e divulgação científica",
    ],
  },
  {
    id: "relatorios",
    label: "Relatórios Estratégicos",
    title: "Inteligência organizada para decisões melhores.",
    desc: "Produção de relatórios analíticos, white papers e documentos estratégicos que transformam dados complexos em insights accionáveis para líderes e organizações.",
    points: [
      "White papers e relatórios executivos",
      "Análises de risco e cenários",
      "Dashboards e visualização de dados",
      "Briefings estratégicos para gestão",
    ],
  },
];

export default function PsTabs() {
  const [active, setActive] = useState("mercado");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="servicos" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
            Serviços
          </span>
          <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black`}
            style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            Áreas de actuação.
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300"
              style={{
                backgroundColor: active === tab.id ? "#E8A048" : "rgba(255,255,255,0.05)",
                color: active === tab.id ? "#0A0B12" : "rgba(244,244,242,0.55)",
                border: active === tab.id ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-0 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Left: text */}
            <div className="p-10 lg:p-14" style={{ backgroundColor: "#111520" }}>
              <h3 className={`${outfit.className} text-2xl lg:text-3xl font-bold mb-5 leading-tight`}
                style={{ color: "#FFFFFF", letterSpacing: "-0.015em" }}>
                {current.title}
              </h3>
              <p className="text-base leading-[1.80] mb-8" style={{ color: "rgba(244,244,242,0.62)" }}>
                {current.desc}
              </p>
              <ul className="space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "rgba(244,244,242,0.60)" }}>
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E8A048" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: accent panel */}
            <div className="p-10 lg:p-14 flex flex-col justify-between"
              style={{ backgroundColor: "rgba(232,160,72,0.06)", borderLeft: "1px solid rgba(232,160,72,0.12)" }}>
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-6" style={{ color: "#E8A048" }}>
                  Sobre este serviço
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Modalidade", value: "Presencial & Remoto" },
                    { label: "Entrega", value: "Relatório + Apresentação" },
                    { label: "Duração típica", value: "2 a 8 semanas" },
                    { label: "Âmbito", value: "Angola & Região SADC" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs font-medium mb-1" style={{ color: "rgba(244,244,242,0.38)" }}>{label}</p>
                      <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={`https://wa.me/244946038986?text=${encodeURIComponent(`Olá! Tenho interesse em ${current.label} — Virtus P&D.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-70"
                style={{ color: "#E8A048" }}
              >
                Solicitar proposta →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
