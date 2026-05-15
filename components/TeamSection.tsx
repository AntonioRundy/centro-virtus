const credentials = [
  { title: "Mais de 5 Anos de Experiência", desc: "Prática no acompanhamento de alunos de diferentes níveis, perfis e sistemas de ensino."      },
  { title: "Professores Qualificados",      desc: "Formação académica superior — rigor e qualidade garantidos em cada sessão."                  },
  { title: "Dedicação e Paixão",            desc: "Motivação e entusiasmo transmitidos em cada aula — ingredientes essenciais para o sucesso."  },
  { title: "Múltiplos Currículos",          desc: "Experiência com currículos angolano, português e internacional (IB/British)."                  },
];

export default function TeamSection() {
  return (
    <section className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="label-gold inline-block mb-3">
            Credenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#F4F4F2" }}>
            Professores <span className="gradient-text">Qualificados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            A qualidade do acompanhamento começa com a qualidade dos professores.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ title, desc }) => (
            <div key={title} className="card-lift rounded-2xl p-10 text-center"
              style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
              <h3 className="font-extrabold text-xl mb-3" style={{ color: "#F4F4F2" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.60)" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-2xl px-10 py-10 text-center"
            style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
            <p className="text-lg leading-relaxed italic" style={{ color: "rgba(244,244,242,0.80)" }}>
              "O Centro de Estudos Virtus transformou a relação do meu filho com a Matemática.
              Em dois meses, a nota subiu de 10 para 16."
            </p>
            <p className="text-sm mt-4" style={{ color: "#94a3b8" }}>
              — Encarregado de educação, aluno do 9º ano
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
