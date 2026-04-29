import { Package, UserCheck, LayoutTemplate, BarChart3 } from "lucide-react";

const differentials = [
  {
    icon: Package,
    title: "Até 3 Disciplinas por Pacote",
    desc: "Os nossos pacotes permitem acompanhamento em até três disciplinas, oferecendo cobertura ampla sem custos excessivos.",
    badge: "Flexível",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    icon: UserCheck,
    title: "Professores Especializados por Área",
    desc: "Cada disciplina é lecionada pelo professor mais qualificado nessa área — não por um generalista, mas por um especialista.",
    badge: "Qualidade",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    icon: LayoutTemplate,
    title: "Planos Personalizados",
    desc: "Nenhum plano é igual ao outro. Desenhamos o acompanhamento com base nas necessidades reais do aluno e do currículo escolar.",
    badge: "Sob medida",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento Contínuo",
    desc: "Monitorização regular do progresso, feedback para os encarregados e ajuste do plano sempre que necessário.",
    badge: "Consistente",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0f2044 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Diferenciais dos Nossos <span className="gradient-text">Pacotes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Mais do que simples aulas, oferecemos uma experiência de aprendizagem completa e estruturada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map(({ icon: Icon, title, desc, badge, badgeColor }) => (
            <div
              key={title}
              className="card-lift rounded-2xl bg-[#111d3c] border border-white/10 hover:border-white/20 p-8 flex gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon size={26} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-white font-bold text-base">{title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {[
            { value: "+200", label: "Alunos acompanhados" },
            { value: "4",    label: "Currículos suportados" },
            { value: "+5",   label: "Anos de experiência" },
            { value: "100%", label: "Foco no aluno" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[#111d3c] py-8 text-center px-4">
              <p className="text-3xl font-black gradient-text">{value}</p>
              <p className="text-slate-400 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
