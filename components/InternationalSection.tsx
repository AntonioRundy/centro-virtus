import { Globe, CheckCircle } from "lucide-react";

const schools = [
  { abbr: "EPL",  name: "Escola Portuguesa de Luanda",  flag: "🇵🇹", desc: "Currículo português, 1º ao 12º ano."     },
  { abbr: "CCB",  name: "Camilo Castelo Branco",         flag: "📚",  desc: "Ensino angolano, currículo nacional."   },
  { abbr: "LIS",  name: "Luanda International School",   flag: "🌐",  desc: "Currículo IB/British. Apoio em inglês." },
  { abbr: "CAT",  name: "Colégio Angolano de Talatona",  flag: "🏫",  desc: "Currículo angolano especializado."      },
];

const highlights = [
  "Professores familiarizados com cada currículo",
  "Apoio em português e inglês",
  "Materiais adaptados a cada sistema de ensino",
  "Experiência com alunos de múltiplas nacionalidades",
];

export default function InternationalSection() {
  return (
    <section id="escolas" className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
              Alcance global, qualidade local
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: "#ffffff" }}>
              Curriculum <span className="gradient-text">Internacional</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#e2e8f0" }}>
              Apoiamos alunos de diferentes escolas e sistemas de ensino em Luanda.
              Os nossos professores conhecem os currículos específicos de cada instituição,
              garantindo acompanhamento verdadeiramente alinhado com a realidade escolar do aluno.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm" style={{ color: "#e2e8f0" }}>
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: school cards — GREEN */}
          <div className="grid grid-cols-2 gap-5">
            {schools.map(({ abbr, name, flag, desc }) => (
              <div
                key={abbr}
                className="card-lift rounded-2xl p-6"
                style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.20)", boxShadow: "0 10px 28px rgba(22,163,74,0.12)" }}
              >
                <div className="text-3xl mb-3">{flag}</div>
                <p className="font-bold text-sm text-white">{abbr}</p>
                <p className="text-xs font-medium mb-2" style={{ color: "#86efac" }}>{name}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#e2e8f0" }}>{desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Banner */}
        <div className="mt-14 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-5" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.20)" }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(212,175,55,0.15)" }}>
            <Globe size={26} style={{ color: "#d4af37" }} />
          </div>
          <div>
            <p className="font-bold text-lg" style={{ color: "#ffffff" }}>A sua escola não está na lista?</p>
            <p className="text-sm mt-1" style={{ color: "#e2e8f0" }}>
              Não se preocupe. Contacte-nos e adaptamos o nosso acompanhamento ao currículo específico do seu educando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
