import { Globe, CheckCircle } from "lucide-react";

const schools = [
  {
    abbr: "EPL",
    name: "Escola Portuguesa de Luanda",
    flag: "🇵🇹",
    desc: "Currículo português, do 1º ao 12º ano.",
  },
  {
    abbr: "CCB",
    name: "Camilo Castelo Branco",
    flag: "📚",
    desc: "Ensino angolano adaptado ao currículo nacional.",
  },
  {
    abbr: "LIS",
    name: "Luanda International School",
    flag: "🌐",
    desc: "Currículo internacional (IB/British). Apoio em inglês.",
  },
  {
    abbr: "CAT",
    name: "Colégio Angolano de Talatona",
    flag: "🏫",
    desc: "Currículo angolano com acompanhamento especializado.",
  },
];

const highlights = [
  "Professores familiarizados com cada currículo",
  "Apoio em português e inglês",
  "Materiais adaptados a cada sistema de ensino",
  "Experiência com alunos de múltiplas nacionalidades",
];

export default function InternationalSection() {
  return (
    <section
      id="escolas"
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #0f2044 0%, #070e1f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Alcance global, qualidade local
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Curriculum <span className="gradient-text">Internacional</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Apoiamos alunos de diferentes escolas e sistemas de ensino em Luanda.
              Os nossos professores conhecem os currículos específicos de cada instituição,
              garantindo um acompanhamento verdadeiramente alinhado com a realidade escolar do aluno.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: schools grid */}
          <div className="grid grid-cols-2 gap-4">
            {schools.map(({ abbr, name, flag, desc }) => (
              <div
                key={abbr}
                className="card-lift rounded-2xl bg-[#111d3c] border border-white/10 hover:border-green-500/30 p-6 transition-all"
              >
                <div className="text-3xl mb-3">{flag}</div>
                <p className="text-white font-bold text-sm mb-0.5">{abbr}</p>
                <p className="text-green-400 text-xs font-medium mb-2">{name}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom globe banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/20 p-8 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Globe size={28} className="text-green-400" />
          </div>
          <div>
            <p className="text-white font-bold text-lg mb-1">
              A sua escola não está na lista?
            </p>
            <p className="text-slate-400 text-sm">
              Não se preocupe. Contacte-nos e adaptamos o nosso acompanhamento ao currículo específico do seu educando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
