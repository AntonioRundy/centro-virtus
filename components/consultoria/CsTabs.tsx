"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const tabs = [
  {
    id: "sociais", label: "Ciências Sociais",
    title: "Apoio em Ciências Sociais e Humanas.",
    desc: "Orientação em Sociologia, Psicologia, Ciências Políticas, Direito, Antropologia e áreas afins. Metodologias qualitativas e quantitativas aplicadas ao contexto angolano e africano.",
    points: ["Análise de discurso e conteúdo", "Estudo de caso e etnografia", "Inquéritos e entrevistas", "Análise documental e histórica"],
    detail: [{ k: "Métodos predominantes", v: "Qualitativo & Misto" }, { k: "Ferramentas", v: "NVivo, Atlas.ti, MAXQDA" }, { k: "Nível de apoio", v: "Licenciatura a Doutoramento" }, { k: "Língua", v: "Português" }],
  },
  {
    id: "engenharia", label: "Engenharia",
    title: "Suporte técnico-científico para Engenharia.",
    desc: "Apoio em projectos finais, dissertações e investigação nas áreas de Engenharia Civil, Mecânica, Eléctrica, Petróleo e áreas afins. Análise de dados técnicos e relatórios estruturados.",
    points: ["Análise e tratamento de dados técnicos", "Revisão de metodologia e cálculos", "Estruturação de relatórios finais", "Revisão de normas e referências"],
    detail: [{ k: "Métodos predominantes", v: "Quantitativo & Experimental" }, { k: "Ferramentas", v: "Excel, R, MATLAB (básico)" }, { k: "Nível de apoio", v: "Licenciatura a Mestrado" }, { k: "Língua", v: "Português" }],
  },
  {
    id: "geo", label: "Geociências",
    title: "Investigação em Geociências e Geofísica.",
    desc: "Orientação especializada em trabalhos académicos nas áreas de Geologia, Geofísica, Geoquímica e Ambiente. Em colaboração com a divisão Virtus P&D.",
    points: ["Estruturação de projectos de investigação", "Análise de dados geológicos e geofísicos", "Revisão de metodologia científica", "Enquadramento teórico e bibliográfico"],
    detail: [{ k: "Especialidade", v: "Geociências aplicadas" }, { k: "Ferramentas", v: "Excel, ArcGIS (básico)" }, { k: "Nível de apoio", v: "Licenciatura a Doutoramento" }, { k: "Colaboração", v: "Virtus P&D" }],
  },
  {
    id: "saude", label: "Saúde",
    title: "Apoio a investigação na área da Saúde.",
    desc: "Orientação para trabalhos académicos em Medicina, Enfermagem, Saúde Pública e áreas afins. Apoio em metodologia epidemiológica, biostatística e revisão científica.",
    points: ["Análise epidemiológica e clínica", "Biostatística e testes de hipótese", "Revisão sistemática e meta-análise", "Normas de publicação científica na saúde"],
    detail: [{ k: "Métodos predominantes", v: "Quantitativo & Epidemiológico" }, { k: "Ferramentas", v: "SPSS, Excel, R" }, { k: "Nível de apoio", v: "Licenciatura a Mestrado" }, { k: "Normas", v: "APA, Vancouver" }],
  },
  {
    id: "dados", label: "Estatística & Dados",
    title: "Análise estatística para qualquer área.",
    desc: "Serviço transversal de análise estatística para investigadores de todas as áreas científicas. Desde o design do estudo até à interpretação e apresentação dos resultados.",
    points: ["Estatística descritiva e inferencial", "Testes paramétricos e não-paramétricos", "Análise de regressão e correlação", "Visualização e apresentação de dados"],
    detail: [{ k: "Software", v: "SPSS, R, Excel, Stata" }, { k: "Tipos de análise", v: "Descritiva, Inferencial, Exploratória" }, { k: "Entrega", v: "Relatório interpretado + ficheiros" }, { k: "Disponibilidade", v: "Online & Presencial" }],
  },
];

export default function CsTabs() {
  const [active, setActive] = useState("sociais");
  const current = tabs.find((t) => t.id === active)!;
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-14">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Áreas Científicas</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Por área de conhecimento.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActive(tab.id)}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300"
              style={{
                backgroundColor: active === tab.id ? "#C5A880" : "rgba(255,255,255,0.05)",
                color: active === tab.id ? "#0A0B12" : "rgba(244,244,242,0.55)",
                border: active === tab.id ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[58%_42%] rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Left */}
            <div className="p-10 lg:p-14" style={{ backgroundColor: "#111520" }}>
              <h3 className={`${cormorant.className} font-semibold text-2xl lg:text-3xl mb-5 leading-tight`} style={{ color: "#FFFFFF" }}>
                {current.title}
              </h3>
              <p className="text-base leading-[1.82] mb-8" style={{ color: "rgba(244,244,242,0.60)" }}>{current.desc}</p>
              <ul className="space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "rgba(244,244,242,0.58)" }}>
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C5A880" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right */}
            <div className="p-10 lg:p-14 flex flex-col justify-between"
              style={{ backgroundColor: "rgba(197,168,128,0.05)", borderLeft: "1px solid rgba(197,168,128,0.10)" }}>
              <div className="space-y-6">
                {current.detail.map(({ k, v }) => (
                  <div key={k}>
                    <p className="text-xs font-medium mb-1" style={{ color: "rgba(244,244,242,0.35)" }}>{k}</p>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{v}</p>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/244946038986?text=${encodeURIComponent(`Olá! Tenho interesse em Consultoria Académica — área: ${current.label}.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-10 text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-70"
                style={{ color: "#C5A880" }}>
                Solicitar orientação →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
