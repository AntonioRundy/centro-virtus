"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

const bars = [65, 82, 55, 90, 73, 88, 60, 95, 78, 85, 70, 92];
const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

export default function PsDashboard() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
          >
            <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
              Visualização de Dados
            </span>
            <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black mb-6`}
              style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
              Dados transformados em decisões.
            </h2>
            <p className="text-base leading-[1.80] mb-8" style={{ color: "rgba(244,244,242,0.60)" }}>
              Os nossos relatórios convertem dados brutos em visualizações claras e insights accionáveis. Cada estudo é entregue com dashboards interactivos e documentação completa.
            </p>
            <ul className="space-y-3">
              {["Relatórios com visualização de dados profissional", "Dashboards executivos personalizados", "Análise estatística com interpretação estratégica", "Apresentações de resultados para stakeholders"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm" style={{ color: "rgba(244,244,242,0.58)" }}>
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E8A048" }} />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: CSS dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.80, delay: 0.10 }}
          >
            <div className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 24px 64px rgba(0,0,0,0.50)" }}>

              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-medium" style={{ color: "rgba(244,244,242,0.30)" }}>
                  Virtus Analytics · Relatório 2024
                </span>
                <div />
              </div>

              {/* Metric cards row */}
              <div className="grid grid-cols-3 gap-px p-px"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                {[
                  { label: "Respostas", value: "1.247" },
                  { label: "Sectores", value: "8" },
                  { label: "Cobertura", value: "94%" },
                ].map(({ label, value }) => (
                  <div key={label} className="py-5 px-5 text-center" style={{ backgroundColor: "#111520" }}>
                    <p className={`${outfit.className} text-2xl font-bold mb-1`} style={{
                      background: "linear-gradient(135deg, #E8A048, #C5A880)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                    }}>{value}</p>
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(244,244,242,0.35)" }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="px-6 pt-6 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(244,244,242,0.35)" }}>
                  Volume de Dados Recolhidos — 2024
                </p>
                <div className="flex items-end gap-1.5 h-28">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.60, delay: i * 0.04, ease: "easeOut" }}
                      style={{
                        background: i === bars.indexOf(Math.max(...bars))
                          ? "linear-gradient(180deg, #E8A048, rgba(232,160,72,0.40))"
                          : "linear-gradient(180deg, rgba(232,160,72,0.40), rgba(232,160,72,0.12))",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {months.map((m, i) => (
                    <span key={m} className="text-[8px] flex-1 text-center" style={{ color: "rgba(244,244,242,0.22)" }}>
                      {i % 3 === 0 ? m : ""}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer bar */}
              <div className="px-6 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[10px]" style={{ color: "rgba(244,244,242,0.28)" }}>Virtus P&D © 2024</span>
                <span className="text-[10px] px-2 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(232,160,72,0.12)", color: "#E8A048" }}>
                  Confidencial
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
