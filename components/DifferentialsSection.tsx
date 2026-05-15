const differentials = [
  { title: "Até 3 Disciplinas por Pacote", desc: "Cobertura ampla sem custos excessivos — até três disciplinas num único plano.",                      badge: "Flexível"    },
  { title: "Professores Especializados",   desc: "Cada disciplina é lecionada pelo professor mais qualificado nessa área — não por um generalista.",   badge: "Qualidade"   },
  { title: "Planos Personalizados",        desc: "Desenhamos o acompanhamento com base nas necessidades reais do aluno e do currículo escolar.",       badge: "Sob medida"  },
  { title: "Acompanhamento Contínuo",      desc: "Monitorização regular do progresso, feedback para encarregados e ajuste do plano quando necessário.", badge: "Consistente" },
];

export default function DifferentialsSection() {
  return (
    <section className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="label-gold inline-block mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#F4F4F2" }}>
            Diferenciais dos Nossos <span className="gradient-text">Pacotes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            Mais do que simples aulas — uma experiência de aprendizagem completa e estruturada.
          </p>
        </div>

        {/* Differential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map(({ title, desc, badge }) => (
            <div
              key={title}
              className="card-lift rounded-2xl p-10"
              style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-extrabold text-xl" style={{ color: "#F4F4F2" }}>{title}</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "rgba(197,168,128,0.10)", color: "#C5A880" }}>{badge}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.65)" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { value: "+200", label: "Alunos acompanhados",   dark: true  },
            { value: "4",    label: "Currículos suportados", dark: false },
            { value: "+5",   label: "Anos de experiência",   dark: true  },
            { value: "100%", label: "Foco no aluno",         dark: false },
          ].map(({ value, label, dark }) => (
            <div
              key={label}
              className="py-8 text-center px-4"
              style={dark ? { backgroundColor: "#16a34a" } : { backgroundColor: "rgba(30,18,8,0.8)" }}
            >
              <p className={`text-3xl font-black ${dark ? "" : "gradient-text"}`} style={dark ? { color: "#F4F4F2" } : {}}>
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: dark ? "rgba(244,244,242,0.70)" : "#94a3b8" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
