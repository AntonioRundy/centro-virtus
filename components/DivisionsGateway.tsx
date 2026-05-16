"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const divisions = [
  {
    number: "01",
    slug: "pesquisa",
    name: "Virtus Pesquisa & Desenvolvimento",
    tagline: "Inteligência baseada em dados reais",
    description:
      "Pesquisa científica, estudos de mercado, levantamentos sociais e análise estratégica baseada em evidências para organizações que decidem com base em conhecimento real.",
    href: "/pesquisa",
    hoverBorder: "rgba(232,160,72,0.30)",
    hoverGlow: "rgba(232,160,72,0.07)",
    accentColor: "#E8A048",
  },
  {
    number: "02",
    slug: "consultoria",
    name: "Virtus Consultoria Académica",
    tagline: "Orientação científica especializada",
    description:
      "Apoio especializado a investigadores, estudantes de pós-graduação e instituições na produção de trabalhos académicos com rigor metodológico e análise de dados de qualidade.",
    href: "/consultoria",
    hoverBorder: "rgba(197,168,128,0.30)",
    hoverGlow: "rgba(197,168,128,0.07)",
    accentColor: "#C5A880",
  },
  {
    number: "03",
    slug: "educacao",
    name: "Virtus Educação",
    tagline: "Formação académica personalizada",
    description:
      "Acompanhamento escolar personalizado, preparação estratégica para exames e formação complementar com metodologia moderna, online e ao domicílio em Luanda.",
    href: "/educacao",
    hoverBorder: "rgba(22,163,74,0.25)",
    hoverGlow: "rgba(22,163,74,0.06)",
    accentColor: "#4ade80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function DivisionsGateway() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-28 lg:pb-36" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase whitespace-nowrap"
            style={{ color: "rgba(244,244,242,0.26)" }}>
            Divisões Estratégicas
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {divisions.map((div) => {
            const isHovered = hovered === div.slug;
            return (
              <motion.div key={div.number} variants={cardVariants}>
                <Link
                  href={div.href}
                  onMouseEnter={() => setHovered(div.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex flex-col justify-between rounded-2xl p-11 lg:p-12 min-h-[420px] transition-all duration-350 block"
                  style={{
                    backgroundColor: isHovered ? "#131c2e" : "#111520",
                    border: isHovered
                      ? `1px solid ${div.hoverBorder}`
                      : "1px solid rgba(255,255,255,0.07)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 24px 56px rgba(0,0,0,0.55), inset 0 0 60px ${div.hoverGlow}`
                      : "none",
                    transition: "all 0.32s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  {/* Top */}
                  <div>
                    {/* Number + tagline row */}
                    <div className="flex items-center justify-between mb-10">
                      <span className="text-xs font-bold tracking-[0.28em] uppercase"
                        style={{ color: isHovered ? div.accentColor : "rgba(197,168,128,0.40)", transition: "color 0.3s" }}>
                        {div.number}
                      </span>
                      <span className="text-[10px] font-medium tracking-wider uppercase text-right max-w-[130px] leading-relaxed"
                        style={{ color: "rgba(244,244,242,0.20)" }}>
                        {div.tagline}
                      </span>
                    </div>

                    {/* Division name */}
                    <h2 className="font-extrabold leading-tight mb-5"
                      style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)", color: "#F4F4F2", letterSpacing: "-0.01em" }}>
                      {div.name}
                    </h2>

                    {/* Description */}
                    <p className="text-sm leading-[1.82]"
                      style={{ color: "rgba(244,244,242,0.48)" }}>
                      {div.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-10 pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <span className="text-xs font-semibold tracking-wide uppercase transition-all duration-300"
                      style={{ color: isHovered ? div.accentColor : "#C5A880" }}>
                      Explorar divisão
                    </span>
                    <span className="text-base font-light transition-transform duration-300 group-hover:translate-x-2"
                      style={{ color: isHovered ? div.accentColor : "#C5A880" }}>
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
