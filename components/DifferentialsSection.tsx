import { Package, UserCheck, LayoutTemplate, BarChart3 } from "lucide-react";

const differentials = [
  { icon: Package,        title: "Até 3 Disciplinas por Pacote", desc: "Cobertura ampla sem custos excessivos — até três disciplinas num único plano.",                      badge: "Flexível"    },
  { icon: UserCheck,      title: "Professores Especializados",   desc: "Cada disciplina é lecionada pelo professor mais qualificado nessa área — não por um generalista.",   badge: "Qualidade"   },
  { icon: LayoutTemplate, title: "Planos Personalizados",        desc: "Desenhamos o acompanhamento com base nas necessidades reais do aluno e do currículo escolar.",       badge: "Sob medida"  },
  { icon: BarChart3,      title: "Acompanhamento Contínuo",      desc: "Monitorização regular do progresso, feedback para encarregados e ajuste do plano quando necessário.", badge: "Consistente" },
];

export default function DifferentialsSection() {
  return (
    <section className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f4b400" }}>
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Diferenciais dos Nossos <span className="gradient-text">Pacotes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Mais do que simples aulas — uma experiência de aprendizagem completa e estruturada.
          </p>
        </div>

        {/* Differential cards — GREEN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map(({ icon: Icon, title, desc, badge }) => (
            <div
              key={title}
              className="card-lift rounded-2xl p-8 flex gap-6"
              style={{ backgroundColor: "#22c55e", boxShadow: "0 10px 30px rgba(34,197,94,0.22)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-base text-white">{title}</h3>
                  <span className="text-xs font-semibold bg-white/25 text-white px-2.5 py-0.5 rounded-full">{badge}</span>
                </div>
                <p className="text-sm leading-relaxed text-green-50">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          {[
            { value: "+200", label: "Alunos acompanhados",   dark: true  },
            { value: "4",    label: "Currículos suportados", dark: false },
            { value: "+5",   label: "Anos de experiência",   dark: true  },
            { value: "100%", label: "Foco no aluno",         dark: false },
          ].map(({ value, label, dark }) => (
            <div
              key={label}
              className="py-8 text-center px-4"
              style={dark ? { backgroundColor: "#f4b400" } : { backgroundColor: "#ffffff" }}
            >
              <p className={`text-3xl font-black ${dark ? "" : "gradient-text"}`} style={dark ? { color: "#0f172a" } : {}}>
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: dark ? "#78350f" : "#64748b" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
