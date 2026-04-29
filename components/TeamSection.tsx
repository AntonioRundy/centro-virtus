import { Shield, GraduationCap, Users, Star } from "lucide-react";

const credentials = [
  {
    icon: Star,
    title: "Mais de 5 Anos de Experiência",
    desc: "Os nossos professores acumulam anos de prática no acompanhamento a alunos de diferentes níveis e perfis de aprendizagem.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/15",
  },
  {
    icon: GraduationCap,
    title: "Professores Qualificados",
    desc: "Todos os nossos professores possuem formação académica superior na área em que lecionam, garantindo rigor e qualidade.",
    color: "text-green-400",
    bg: "bg-green-500/15",
  },
  {
    icon: Users,
    title: "Dedicação e Paixão",
    desc: "Mais do que conhecimento, os nossos professores transmitem motivação e entusiasmo — ingredientes essenciais para o sucesso.",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
  },
  {
    icon: Shield,
    title: "Múltiplos Currículos",
    desc: "Experiência comprovada com currículos angolano, português e internacional (IB/British), adaptando o ensino a cada realidade.",
    color: "text-purple-400",
    bg: "bg-purple-500/15",
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #070e1f 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            A nossa equipa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Professores <span className="gradient-text">Qualificados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            A qualidade do acompanhamento começa com a qualidade dos professores. Conheça o que nos distingue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="card-lift rounded-2xl bg-[#111d3c] border border-white/10 hover:border-white/20 p-7 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-5`}>
                <Icon size={28} className={color} />
              </div>
              <h3 className="text-white font-bold text-base mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial-style banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#111d3c] border border-white/10 rounded-2xl px-8 py-6 max-w-3xl">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-slate-300 text-lg leading-relaxed italic">
              "O acompanhamento personalizado do Centro Galileu transformou a relação do meu filho com a Matemática.
              Em dois meses, a nota subiu de 10 para 16."
            </p>
            <p className="text-slate-500 text-sm mt-3">— Encarregado de educação, aluno do 9º ano</p>
          </div>
        </div>
      </div>
    </section>
  );
}
