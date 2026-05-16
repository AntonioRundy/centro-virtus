"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"] });

const testimonials = [
  { quote: "A orientação da Virtus foi decisiva para a qualidade da minha dissertação. O rigor metodológico exigido e o feedback detalhado capítulo a capítulo transformaram o meu trabalho.", author: "Filomena Carvalho", role: "Mestranda em Gestão · Universidade Agostinho Neto" },
  { quote: "Estava completamente perdido com a análise estatística. Em duas sessões, o consultor clarificou tudo e o relatório final ficou muito acima das minhas expectativas.", author: "Rui Mendes", role: "Finalista em Engenharia Civil · Universidade Técnica de Angola" },
  { quote: "Profissionalismo e competência em cada sessão. Recomendo a qualquer investigador angolano que queira elevar a qualidade do seu trabalho académico.", author: "Adélia Sousa", role: "Doutoranda em Saúde Pública · FMUAN" },
];

export default function CsTestimonials() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-20">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Testemunhos</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Investigadores que <em style={{ fontStyle: "italic" }}>confiaram</em> em nós.
          </h2>
        </motion.div>
        <div className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {testimonials.map(({ quote, author, role }, i) => (
            <motion.div key={author}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.62, delay: i * 0.09 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-[72px_1fr] gap-6 lg:gap-12 items-start">
              <span className={`${cormorant.className} font-bold hidden lg:block`}
                style={{ fontSize: "5.5rem", lineHeight: 0.75, color: "rgba(197,168,128,0.22)" }}>&ldquo;</span>
              <div>
                <p className={`${cormorant.className} font-normal text-xl sm:text-2xl leading-[1.58] mb-6`}
                  style={{ color: "rgba(244,244,242,0.78)", fontStyle: "italic" }}>
                  {quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px" style={{ backgroundColor: "#C5A880" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{author}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(244,244,242,0.38)" }}>{role}</p>
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
