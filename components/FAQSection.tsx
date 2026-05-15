"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a primeira aula gratuita?",
    a: "Após o contacto via WhatsApp, marcamos uma aula experimental sem custo e sem compromisso. O objetivo é conhecer o aluno, avaliar as suas necessidades e apresentar o nosso método. Após a aula, propomos um plano personalizado em até 24 horas.",
  },
  {
    q: "Qual é o preço das aulas?",
    a: "Os preços variam conforme o nível escolar e a modalidade. Começam em 5.500 Kz/hora (online, Nível A) e vão até 10.000 Kz/hora (domicílio, universitário). Use o nosso simulador de preços na secção 'Preços' para ver o valor exato.",
  },
  {
    q: "As aulas são online ou presenciais?",
    a: "Oferecemos as duas modalidades. Online por videochamada com quadro virtual — prático e sem deslocação. Ao domicílio — o professor desloca-se a casa do aluno para uma experiência mais personalizada e presencial.",
  },
  {
    q: "Quais disciplinas são disponíveis?",
    a: "Matemática, Físico-Química, Economia, Inglês e Filosofia. Os nossos professores são especializados por área, garantindo qualidade em cada disciplina.",
  },
  {
    q: "O Centro apoia alunos de qualquer escola?",
    a: "Sim. Temos experiência com os currículos da EPL, CCB, LIS e CAT. Se a escola do seu educando não estiver na lista, contacte-nos — adaptamos o acompanhamento ao currículo específico.",
  },
  {
    q: "Posso contratar aulas para mais do que uma disciplina?",
    a: "Sim. Os nossos pacotes permitem até 3 disciplinas simultaneamente, com professores especializados em cada área. Isso garante cobertura ampla sem aumentar excessivamente os custos.",
  },
  {
    q: "Com que antecedência devo agendar?",
    a: "Respondemos em menos de 2 horas e temos vagas disponíveis com frequência. No entanto, recomendamos contactar com antecedência, especialmente em épocas de exames, quando a procura é maior.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-gray py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg" style={{ color: "#64748b" }}>
            Tudo o que precisa de saber antes de começar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base" style={{ color: "#0f172a" }}>{q}</span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ color: "#16a34a", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 animate-fade-in">
                  <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
