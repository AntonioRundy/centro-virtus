const pillars = [
  { title: "Centrado no Aluno",      desc: "Ensino adaptado ao perfil de cada estudante — sem fórmulas genéricas, com resultados reais." },
  { title: "Atenção Individualizada", desc: "Professores que conhecem cada aluno e acompanham a evolução de forma contínua e dedicada."   },
  { title: "Respeito pelo Ritmo",     desc: "Avançamos quando o aluno está pronto — consolidação sólida antes de novos desafios."          },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-gold inline-block mb-3">
            Como trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#F4F4F2" }}>
            A Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            Três pilares que garantem progressão real e duradoura para cada aluno.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map(({ title, desc }) => (
            <div key={title} className="card-lift rounded-2xl p-10"
              style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
              <h3 className="text-xl font-extrabold mb-3" style={{ color: "#F4F4F2" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.65)" }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-14" />

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold" style={{ color: "#F4F4F2" }}>
            Aprender onde for mais cómodo para si
          </h3>
        </div>

        {/* Modalities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Online */}
          <div className="card-lift rounded-2xl p-10"
            style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
            <div className="flex items-start justify-between mb-5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(197,168,128,0.10)", color: "#C5A880" }}>Mais prático</span>
            </div>
            <h4 className="font-extrabold text-2xl mb-2" style={{ color: "#F4F4F2" }}>Modalidade Online</h4>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.65)" }}>
              Aulas via videochamada com quadro virtual e materiais digitais. Qualidade total, sem deslocações.
            </p>
          </div>

          {/* Domicílio */}
          <div className="card-lift rounded-2xl p-10"
            style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
            <div className="flex items-start justify-between mb-5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(197,168,128,0.10)", color: "#C5A880" }}>Mais personalizado</span>
            </div>
            <h4 className="font-extrabold text-2xl mb-2" style={{ color: "#F4F4F2" }}>Modalidade ao Domicílio</h4>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.65)" }}>
              O professor desloca-se a casa. Ambiente familiar, materiais físicos e atenção 100% presencial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
