import { CheckCircle } from "lucide-react";

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
            <span className="label-gold inline-block mb-3">
              Alcance global, qualidade local
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: "#F4F4F2" }}>
              Curriculum <span className="gradient-text">Internacional</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(244,244,242,0.75)" }}>
              Apoiamos alunos de diferentes escolas e sistemas de ensino em Luanda.
              Os nossos professores conhecem os currículos específicos de cada instituição,
              garantindo acompanhamento verdadeiramente alinhado com a realidade escolar do aluno.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm" style={{ color: "rgba(244,244,242,0.75)" }}>
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: school cards — GREEN */}
          <div className="grid grid-cols-2 gap-5">
            {schools.map(({ abbr, name, desc }) => (
              <div
                key={abbr}
                className="card-lift rounded-2xl p-8"
                style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}
              >
                <p className="font-bold text-2xl mb-1" style={{ color: "#F4F4F2" }}>{abbr}</p>
                <p className="text-xs font-medium mb-2" style={{ color: "#C5A880" }}>{name}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(244,244,242,0.60)" }}>{desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Banner */}
        <div className="mt-14 rounded-2xl p-10" style={{ background: "rgba(197,168,128,0.05)", border: "1px solid rgba(197,168,128,0.12)" }}>
          <div>
            <p className="font-bold text-lg" style={{ color: "#F4F4F2" }}>A sua escola não está na lista?</p>
            <p className="text-sm mt-1" style={{ color: "rgba(244,244,242,0.70)" }}>
              Não se preocupe. Contacte-nos e adaptamos o nosso acompanhamento ao currículo específico do seu educando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
