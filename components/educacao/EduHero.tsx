"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { asset } from "@/lib/basePath";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita na Virtus Educação.")}`;

export default function EduHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#070D1B" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "52px 52px" }} />

      {/* Amber glow bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: "rgba(232,160,72,0.08)" }} />

      {/* Green glow top-left */}
      <div className="absolute top-0 -left-32 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.06)" }} />

      <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 items-center">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px" style={{ backgroundColor: "#C5A880" }} />
              <span className="text-xs font-semibold tracking-[0.26em] uppercase" style={{ color: "#C5A880" }}>
                Virtus Educação · Luanda
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className={`${playfair.className} text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5rem] font-black leading-[1.03] mb-7`}
              style={{ color: "#FFFFFF" }}>
              Ensino que<br />
              <span style={{
                background: "linear-gradient(135deg, #C5A880 0%, #E8A048 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                transforma
              </span>{" "}
              o futuro.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-light mb-10 max-w-xl"
              style={{ color: "rgba(244,244,242,0.62)", lineHeight: 1.65 }}>
              Acompanhamento personalizado, preparação estratégica para exames e metodologia moderna — online e ao domicílio em Luanda.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ boxShadow: "0 4px 32px rgba(22,163,74,0.30)" }}>
                Agendar Aula Gratuita
              </a>
              <a href="#niveis"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#F4F4F2" }}>
                Ver Preços →
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {["+200 alunos acompanhados", "+5 anos de experiência", "4 currículos", "1ª aula gratuita"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C5A880" }} />
                  <span className="text-sm" style={{ color: "rgba(244,244,242,0.48)" }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.90, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/menina.png")}
                alt="Aluno em sessão de estudo — Virtus Educação"
                className="w-full object-cover object-top"
                style={{ height: "500px", filter: "brightness(0.88) contrast(1.05)" }}
              />
              <div className="px-7 py-6"
                style={{ backgroundColor: "#111520", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs font-semibold tracking-[0.20em] uppercase mb-1" style={{ color: "#C5A880" }}>
                  Acompanhamento personalizado
                </p>
                <p className="text-sm" style={{ color: "rgba(244,244,242,0.55)" }}>
                  Professores especializados, horários flexíveis, resultados reais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
