import { Shield, GraduationCap, Users, Star } from "lucide-react";

const credentials = [
  {
    icon: Star,
    title: "Mais de 5 Anos de Experiência",
    desc: "Os nossos professores acumulam anos de prática no acompanhamento de alunos de diferentes níveis e perfis.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: GraduationCap,
    title: "Professores Qualificados",
    desc: "Formação académica superior na área em que lecionam — rigor e qualidade em cada sessão.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Dedicação e Paixão",
    desc: "Os nossos professores transmitem motivação e entusiasmo — ingredientes essenciais para o sucesso.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Múltiplos Currículos",
    desc: "Experiência comprovada com currículos angolano, português e internacional (IB/British).",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function TeamSection() {
  return (
    <section className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
            A nossa equipa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Professores <span className="gradient-text">Qualificados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            A qualidade do acompanhamento começa com a qualidade dos professores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ icon: Icon, title, desc, iconBg, iconColor }) => (
            <div
              key={title}
              className="card-lift bg-white rounded-2xl border border-gray-100 hover:border-yellow-200 shadow-sm hover:shadow-md p-7 text-center transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-5`}>
                <Icon size={28} className={iconColor} />
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "O acompanhamento personalizado do Centro Galileu transformou a relação do meu filho com a Matemática.
              Em dois meses, a nota subiu de 10 para 16."
            </p>
            <p className="text-gray-400 text-sm mt-4">— Encarregado de educação, aluno do 9º ano</p>
          </div>
        </div>
      </div>
    </section>
  );
}
