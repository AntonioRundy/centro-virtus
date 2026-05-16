"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800", "900"] });

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Virtus Pesquisa & Desenvolvimento.")}`;

export default function PsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#070D1B" }}
    >
      {/* CSS grid lines — data/tech aesthetic */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      {/* Amber glow — bottom right */}
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: "rgba(232,160,72,0.10)" }} />

      {/* Subtle amber glow — top left */}
      <div className="absolute top-0 -left-20 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(232,160,72,0.05)" }} />

      <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.60 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px" style={{ backgroundColor: "#E8A048" }} />
            <span className="text-xs font-semibold tracking-[0.28em] uppercase" style={{ color: "#E8A048" }}>
              Virtus P&D · Inteligência Aplicada
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.10, ease: [0.25, 0.1, 0.25, 1] }}
            className={`${outfit.className} text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-black leading-[1.00] mb-7`}
            style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Dados reais.<br />
            <span style={{
              background: "linear-gradient(135deg, #E8A048 0%, #C5A880 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              Inteligência
            </span>{" "}
            aplicada.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="text-lg sm:text-xl font-light mb-12 max-w-2xl"
            style={{ color: "rgba(244,244,242,0.60)", lineHeight: 1.65 }}
          >
            Pesquisa científica, estudos de mercado e análise estratégica baseada em evidências para organizações que tomam decisões com base em conhecimento real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#E8A048", boxShadow: "0 4px 32px rgba(232,160,72,0.30)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4893a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E8A048")}
            >
              Iniciar Projecto
            </a>
            <a href="#servicos"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#F4F4F2" }}>
              Ver Serviços →
            </a>
          </motion.div>

          {/* Bottom stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.80 }}
            className="flex flex-wrap items-center gap-10 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "Pesquisa Científica", label: "Rigor metodológico" },
              { value: "Estudos de Mercado", label: "Dados reais de Angola" },
              { value: "Geociências & Geofísica", label: "Investigação especializada" },
            ].map(({ value, label }) => (
              <div key={value}>
                <p className={`${outfit.className} text-sm font-bold`} style={{ color: "#FFFFFF" }}>{value}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(244,244,242,0.40)" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
