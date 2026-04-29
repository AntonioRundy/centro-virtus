import { Package, UserCheck, LayoutTemplate, BarChart3 } from "lucide-react";

const differentials = [
  {
    icon: Package,
    title: "Até 3 Disciplinas por Pacote",
    desc: "Cobertura ampla sem custos excessivos — até três disciplinas num único plano mensal.",
    badge: "Flexível",
    badgeBg: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: UserCheck,
    title: "Professores Especializados",
    desc: "Cada disciplina é lecionada pelo professor mais qualificado nessa área — não por um generalista.",
    badge: "Qualidade",
    badgeBg: "bg-green-100 text-green-700",
  },
  {
    icon: LayoutTemplate,
    title: "Planos Personalizados",
    desc: "Desenhamos o acompanhamento com base nas necessidades reais do aluno e do currículo escolar.",
    badge: "Sob medida",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento Contínuo",
    desc: "Monitorização regular do progresso, feedback para encarregados e ajuste do plano quando necessário.",
    badge: "Consistente",
    badgeBg: "bg-purple-100 text-purple-700",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Diferenciais dos Nossos <span className="gradient-text">Pacotes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Mais do que simples aulas — uma experiência de aprendizagem completa e estruturada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map(({ icon: Icon, title, desc, badge, badgeBg }) => (
            <div
              key={title}
              className="card-lift bg-white rounded-2xl border border-gray-100 hover:border-yellow-200 shadow-sm hover:shadow-md p-8 flex gap-6 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon size={24} className="text-gray-700" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-gray-900 font-bold text-base">{title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeBg}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {[
            { value: "+200", label: "Alunos acompanhados" },
            { value: "4",    label: "Currículos suportados" },
            { value: "+5",   label: "Anos de experiência" },
            { value: "100%", label: "Foco no aluno" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-8 text-center px-4 ${i % 2 === 0 ? "bg-yellow-400" : "bg-white"}`}
            >
              <p className={`text-3xl font-black ${i % 2 === 0 ? "text-gray-900" : "gradient-text"}`}>
                {value}
              </p>
              <p className={`text-xs mt-1 ${i % 2 === 0 ? "text-yellow-800" : "text-gray-400"}`}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
