"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const faqs = [
  { q: "A consultoria substitui o orientador da universidade?", a: "Não. A Virtus Consultoria Académica é um serviço complementar. Apoiamos o investigador a compreender e aplicar a metodologia correcta, mas não substituímos nem interferimos com a relação formal com o orientador institucional." },
  { q: "Qual a diferença entre orientação e elaboração de trabalhos?", a: "A nossa missão é orientar e capacitar o investigador — não elaborar trabalhos em nome do aluno. O nosso trabalho é formativo: ensinamos metodologia, análise e redação científica para que o investigador evolua academicamente." },
  { q: "Quanto tempo demora o processo de orientação?", a: "Depende do tipo e extensão do trabalho. Uma monografia pode requerer 4-8 semanas de acompanhamento. Uma dissertação de mestrado tipicamente necessita de 8-16 semanas. Fazemos um plano personalizado na primeira sessão." },
  { q: "Quais softwares de análise de dados são suportados?", a: "Trabalhamos com SPSS, R, Excel, NVivo, Atlas.ti e MAXQDA. Para outros softwares, consulte-nos — avaliamos caso a caso conforme a disponibilidade dos nossos consultores." },
  { q: "A consultoria é disponível online e presencialmente?", a: "Sim. Oferecemos sessões online por videochamada e sessões presenciais em Luanda. A maioria dos nossos clientes opta pelo formato online pela flexibilidade de horário." },
  { q: "A Virtus emite declaração ou certificado de acompanhamento?", a: "Emitimos uma declaração de acompanhamento académico mediante solicitação. Este documento descreve o tipo de apoio prestado e pode ser solicitado para fins de transparência institucional." },
];

export default function CsFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-16">
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>FAQ</span>
          <h2 className={`${cormorant.className} font-semibold`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05 }}>
            Perguntas frequentes.
          </h2>
        </motion.div>
        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.48, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left transition-colors"
                style={{ backgroundColor: open === i ? "#1a1f2e" : "#111520" }}>
                <span className="font-semibold text-sm sm:text-base pr-6" style={{ color: "#FFFFFF" }}>{q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.22 }}
                  className="text-xl flex-shrink-0 font-light" style={{ color: "#C5A880" }}>+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: "hidden", backgroundColor: "#1a1f2e" }}>
                    <p className="px-7 pb-7 text-sm leading-[1.84]" style={{ color: "rgba(244,244,242,0.62)" }}>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
