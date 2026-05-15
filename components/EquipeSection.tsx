import { CheckCircle, CalendarCheck } from "lucide-react";
import { asset } from "@/lib/basePath";

const WA_FULL = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudos Virtus.")}`;

const highlights = [
  "Professores com formação académica superior",
  "Mais de 5 anos de experiência no acompanhamento escolar",
  "Familiarizados com currículos angolano, português e internacional",
  "Comunicação constante com os encarregados de educação",
  "Apaixonados pelo ensino e pelo sucesso dos alunos",
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: image */}
          <div>
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 20px 48px rgba(0,0,0,0.5)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/equipe.png")}
                alt="Equipa do Centro de Estudos Virtus"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "480px", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
              A nossa equipa
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight" style={{ color: "#ffffff" }}>
              Professores <span className="gradient-text">dedicados</span>,{" "}
              focados no sucesso de cada aluno.
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "#e2e8f0" }}>
              Não somos apenas especialistas nas nossas áreas — somos educadores que acreditam
              no potencial de cada estudante e trabalham diariamente para o ajudar a alcançá-lo.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3" style={{ color: "#e2e8f0" }}>
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.35)" }}
              >
                <CalendarCheck size={16} />
                Agendar Aula Gratuita
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:border-green-500 hover:text-green-400"
                style={{ color: "#94a3b8", borderColor: "rgba(255,255,255,0.20)" }}
              >
                Falar com um Professor
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
