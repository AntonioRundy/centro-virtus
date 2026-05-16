"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"] });

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Virtus Consultoria Académica.")}`;

export default function CsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#070D1B" }}>

      {/* Fine dot grid — academic paper texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Warm gold glow — top centre */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: "rgba(197,168,128,0.07)" }} />

      {/* Subtle amber bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: "rgba(212,168,83,0.05)" }} />

      <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.60 }}
            className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px" style={{ backgroundColor: "#C5A880" }} />
            <span className="text-xs font-semibold tracking-[0.28em] uppercase" style={{ color: "#C5A880" }}>
              Virtus Consultoria Académica
            </span>
          </motion.div>

          {/* Headline — Cormorant italic for sophistication */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.90, delay: 0.10, ease: [0.25, 0.1, 0.25, 1] }}
            className={`${cormorant.className} font-semibold leading-[1.05] mb-8`}
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#FFFFFF" }}
          >
            Metodologia rigorosa.<br />
            <em style={{
              background: "linear-gradient(135deg, #C5A880 0%, #D4A853 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              fontStyle: "italic",
            }}>
              Orientação especializada.
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.80, delay: 0.22 }}
            className="text-lg sm:text-xl font-light mb-12 max-w-xl"
            style={{ color: "rgba(244,244,242,0.60)", lineHeight: 1.70 }}
          >
            Apoio especializado para monografias, dissertações e investigação científica — com rigor metodológico, análise de dados e revisão académica de qualidade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#16a34a", boxShadow: "0 4px 28px rgba(22,163,74,0.28)" }}>
              Solicitar Consulta
            </a>
            <a href="#servicos"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#F4F4F2" }}>
              Ver Serviços →
            </a>
          </motion.div>

          {/* Institutional strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.80 }}
            className="flex flex-wrap items-center gap-10 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {["Monografias & Dissertações", "Metodologia Científica", "Análise Estatística", "Revisão Académica"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C5A880" }} />
                <span className="text-xs" style={{ color: "rgba(244,244,242,0.42)", letterSpacing: "0.02em" }}>{t}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
