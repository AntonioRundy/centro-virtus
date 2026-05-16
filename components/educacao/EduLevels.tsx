"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });

const levels = [
  {
    code: "A–B",
    level: "Ensino Básico",
    range: "1º ao 9º ano",
    desc: "Fundamentos sólidos, metodologia lúdica e progressiva. Atenção total ao ritmo individual de cada aluno.",
    subjects: ["Matemática", "Língua Portuguesa", "Ciências Naturais", "Inglês"],
    price: "a partir de 5.500 Kz/h",
  },
  {
    code: "C",
    level: "Ensino Secundário",
    range: "10º ao 12º ano",
    desc: "Preparação intensiva para exames nacionais. Foco em resultados, com simulações e planos estruturados.",
    subjects: ["Matemática", "Físico-Química", "Economia", "Inglês", "Filosofia"],
    price: "a partir de 7.000 Kz/h",
  },
  {
    code: "D",
    level: "Ensino Superior",
    range: "Universitário",
    desc: "Apoio especializado a estudantes universitários, com professores de formação académica superior.",
    subjects: ["Cálculo", "Estatística", "Gestão", "Economia", "Metodologia"],
    price: "a partir de 9.000 Kz/h",
  },
];

export default function EduLevels() {
  const [hovered, setHovered] = useState<string | null>(null);
  const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os preços da Virtus Educação.")}`;

  return (
    <section id="niveis" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="label-gold block mb-4">Níveis de Ensino</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Para cada fase académica.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {levels.map((l, i) => (
            <motion.div
              key={l.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.10 }}
              onMouseEnter={() => setHovered(l.code)}
              onMouseLeave={() => setHovered(null)}
              className="rounded-2xl p-10 lg:p-12 flex flex-col justify-between min-h-[440px] cursor-default"
              style={{
                backgroundColor: "#111520",
                border: hovered === l.code
                  ? "1px solid rgba(197,168,128,0.28)"
                  : "1px solid rgba(255,255,255,0.07)",
                transform: hovered === l.code ? "translateY(-5px)" : "translateY(0)",
                transition: "border 0.3s ease, transform 0.3s ease",
              }}
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase"
                    style={{ color: "rgba(197,168,128,0.50)" }}>{l.code}</span>
                  <span className="text-xs font-medium tracking-wider"
                    style={{ color: "rgba(244,244,242,0.28)" }}>{l.range}</span>
                </div>

                <h3 className={`${playfair.className} text-2xl lg:text-3xl font-bold mb-4 leading-tight`}
                  style={{ color: "#FFFFFF" }}>
                  {l.level}
                </h3>

                <p className="text-sm leading-[1.78] mb-8" style={{ color: "rgba(244,244,242,0.55)" }}>
                  {l.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {l.subjects.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(244,244,242,0.55)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-sm font-semibold" style={{ color: "#C5A880" }}>{l.price}</span>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-70"
                  style={{ color: "#C5A880" }}>
                  Saber mais →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
