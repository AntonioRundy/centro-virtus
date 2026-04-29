import { CheckCircle } from "lucide-react";
import { asset } from "@/lib/basePath";

const highlights = [
  "Professores com formação académica superior",
  "Mais de 5 anos de experiência no acompanhamento escolar",
  "Familiarizados com currículos angolano, português e internacional",
  "Comunicação constante com os encarregados de educação",
  "Apaixonados pelo ensino e pelo sucesso dos alunos",
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/equipe.png")}
                alt="Equipa do Centro de Estudo Galileu"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "480px", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#f4b400" }}
            >
              A nossa equipa
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: "#0f172a" }}
            >
              Uma equipa{" "}
              <span className="gradient-text">dedicada</span> e preparada
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "#334155" }}>
              Uma equipa dedicada, preparada para acompanhar cada aluno com excelência.
              Os nossos professores não são apenas especialistas nas suas áreas —
              são educadores que acreditam no potencial de cada estudante e trabalham
              para o ajudar a alcançá-lo.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3" style={{ color: "#334155" }}>
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/244946038986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f4b400] hover:bg-[#e0a800] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md shadow-yellow-200"
                style={{ color: "#0f172a" }}
              >
                Conhecer a Equipa
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-green-500 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-green-50 hover:text-green-700"
                style={{ color: "#334155" }}
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
