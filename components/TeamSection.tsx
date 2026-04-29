import { Shield, GraduationCap, Users, Star } from "lucide-react";

const credentials = [
  { icon: Star,          title: "Mais de 5 Anos de Experiência", desc: "Os nossos professores acumulam anos de prática no acompanhamento de alunos de diferentes níveis e perfis." },
  { icon: GraduationCap, title: "Professores Qualificados",      desc: "Formação académica superior na área em que lecionam — rigor e qualidade em cada sessão."                   },
  { icon: Users,         title: "Dedicação e Paixão",            desc: "Os nossos professores transmitem motivação e entusiasmo — ingredientes essenciais para o sucesso."           },
  { icon: Shield,        title: "Múltiplos Currículos",          desc: "Experiência comprovada com currículos angolano, português e internacional (IB/British)."                     },
];

export default function TeamSection() {
  return (
    <section className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            A nossa equipa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Professores <span className="gradient-text">Qualificados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            A qualidade do acompanhamento começa com a qualidade dos professores.
          </p>
        </div>

        {/* Credential cards — BLUE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-lift rounded-2xl p-7 text-center"
              style={{ backgroundColor: "#3b82f6", boxShadow: "0 10px 30px rgba(59,130,246,0.25)" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-base text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-blue-100">{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-elevated rounded-2xl px-8 py-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-lg leading-relaxed italic" style={{ color: "#334155" }}>
              "O acompanhamento personalizado do Centro de Estudo Galileu transformou a relação do meu filho com a Matemática.
              Em dois meses, a nota subiu de 10 para 16."
            </p>
            <p className="text-sm mt-4" style={{ color: "#64748b" }}>— Encarregado de educação, aluno do 9º ano</p>
          </div>
        </div>
      </div>
    </section>
  );
}
