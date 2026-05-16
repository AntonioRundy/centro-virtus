"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const faqs = [
  { q: "Como funciona a primeira aula gratuita?", a: "Após o contacto via WhatsApp, marcamos uma sessão experimental sem custo e sem compromisso. O professor avalia as necessidades do aluno e apresentamos um plano personalizado em 24 horas." },
  { q: "Quais são os preços das aulas?", a: "Os preços variam entre 5.500 Kz/h (Ensino Básico, online) e 10.000 Kz/h (Ensino Superior, ao domicílio). Use o nosso simulador na secção de Preços para ver o valor exato para o seu caso." },
  { q: "As aulas são online ou presenciais?", a: "Oferecemos as duas modalidades. Online por videochamada com quadro virtual — sem deslocação. Ao domicílio — o professor vai a casa para uma experiência totalmente presencial." },
  { q: "Quais disciplinas estão disponíveis?", a: "Matemática, Físico-Química, Economia, Inglês, Filosofia, Língua Portuguesa, Ciências Naturais e outras sob pedido. Os nossos professores são especializados por área." },
  { q: "Apoiam alunos de qualquer escola em Luanda?", a: "Sim. Temos experiência com os currículos da EPL, CCB, LIS e CAT. Se a escola do seu educando não estiver na lista, contacte-nos — adaptamos o acompanhamento." },
  { q: "Posso contratar aulas para mais de uma disciplina?", a: "Sim. Os nossos pacotes permitem até 3 disciplinas em simultâneo, com professores especializados em cada área, optimizando custo e qualidade." },
];

export default function EduFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <span className="label-gold block mb-4">FAQ</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Perguntas frequentes.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.50, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left transition-colors"
                style={{ backgroundColor: open === i ? "#1a1f30" : "#111520" }}
              >
                <span className="font-semibold text-sm sm:text-base pr-6" style={{ color: "#FFFFFF" }}>{q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl flex-shrink-0 font-light"
                  style={{ color: "#C5A880" }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
                    style={{ overflow: "hidden", backgroundColor: "#1a1f30" }}
                  >
                    <p className="px-7 pb-7 text-sm leading-[1.82]" style={{ color: "rgba(244,244,242,0.65)" }}>
                      {a}
                    </p>
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
