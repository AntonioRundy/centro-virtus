"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });

const testimonials = [
  {
    quote: "O meu filho transformou completamente a relação com a Matemática. Em dois meses passou de 10 para 16. A diferença está na atenção personalizada que nunca encontrámos noutro lado.",
    author: "Maria João Ferreira",
    role: "Encarregada de educação — EPL, 10º Ano",
  },
  {
    quote: "A preparação para os exames nacionais foi absolutamente decisiva. As simulações e o feedback detalhado ajudaram-me a estruturar o raciocínio de forma que antes não conseguia.",
    author: "Ana Luísa Domingos",
    role: "Aluna — CCB, 12º Ano. Aprovada com distinção.",
  },
  {
    quote: "Recomendo sem hesitar. A equipa entende o currículo do LIS em profundidade e isso faz uma diferença enorme na qualidade do acompanhamento.",
    author: "Carlos Teixeira",
    role: "Encarregado de educação — LIS, 8º Ano",
  },
];

export default function EduTestimonials() {
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
          <span className="label-gold block mb-4">Testemunhos</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Resultados que<br />ficam para sempre.
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {testimonials.map(({ quote, author, role }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.10 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start"
            >
              {/* Opening quote — large gold serif */}
              <span className={`${playfair.className} text-7xl lg:text-8xl font-black leading-none select-none`}
                style={{ color: "rgba(197,168,128,0.25)", lineHeight: 0.8, paddingTop: "0.15em" }}>
                &ldquo;
              </span>
              <div>
                <p className={`${playfair.className} text-xl sm:text-2xl lg:text-[1.7rem] font-normal italic leading-[1.55] mb-7`}
                  style={{ color: "rgba(244,244,242,0.82)" }}>
                  {quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px" style={{ backgroundColor: "#C5A880" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{author}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(244,244,242,0.40)" }}>{role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
