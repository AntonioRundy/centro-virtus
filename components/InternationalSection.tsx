import { Globe, CheckCircle } from "lucide-react";

const schools = [
  { abbr: "EPL",  name: "Escola Portuguesa de Luanda",   flag: "🇵🇹", desc: "Currículo português, 1º ao 12º ano." },
  { abbr: "CCB",  name: "Camilo Castelo Branco",          flag: "📚",  desc: "Ensino angolano, currículo nacional." },
  { abbr: "LIS",  name: "Luanda International School",   flag: "🌐",  desc: "Currículo IB/British. Apoio em inglês." },
  { abbr: "CAT",  name: "Colégio Angolano de Talatona",  flag: "🏫",  desc: "Currículo angolano especializado." },
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

          {/* Left */}
          <div>
            <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Alcance global, qualidade local
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Curriculum <span className="gradient-text">Internacional</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Apoiamos alunos de diferentes escolas e sistemas de ensino em Luanda.
              Os nossos professores conhecem os currículos específicos de cada instituição,
              garantindo acompanhamento verdadeiramente alinhado com a realidade escolar do aluno.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: schools */}
          <div className="grid grid-cols-2 gap-4">
            {schools.map(({ abbr, name, flag, desc }) => (
              <div
                key={abbr}
                className="card-lift rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 shadow-sm hover:shadow-md p-6 transition-all"
              >
                <div className="text-3xl mb-3">{flag}</div>
                <p className="text-gray-900 font-bold text-sm">{abbr}</p>
                <p className="text-yellow-600 text-xs font-medium mb-2">{name}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="mt-14 rounded-2xl bg-yellow-50 border border-yellow-200 p-8 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <Globe size={26} className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">A sua escola não está na lista?</p>
            <p className="text-gray-500 text-sm">
              Não se preocupe. Contacte-nos e adaptamos o nosso acompanhamento ao currículo específico do seu educando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
