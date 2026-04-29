import { User, Clock, Heart, Wifi, Home } from "lucide-react";

const pillars = [
  {
    icon: User,
    title: "Centrado no Aluno",
    desc: "Cada aluno é único. O nosso ensino parte das necessidades e do perfil de aprendizagem de cada estudante.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    border: "hover:border-yellow-300",
  },
  {
    icon: Heart,
    title: "Atenção Individualizada",
    desc: "Professores dedicados que conhecem cada aluno pelo nome, acompanham o seu progresso e investem no sucesso.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "hover:border-green-300",
  },
  {
    icon: Clock,
    title: "Respeito pelo Ritmo",
    desc: "Avançamos no ritmo certo para cada aluno, consolidando conhecimentos antes de introduzir novos desafios.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "hover:border-blue-300",
  },
];

const modalities = [
  {
    icon: Wifi,
    title: "Modalidade Online",
    desc: "Aulas via videochamada com partilha de ecrã, quadro virtual e materiais digitais. Qualidade total, sem deslocações.",
    tag: "Mais prático",
    tagClass: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },
  {
    icon: Home,
    title: "Modalidade ao Domicílio",
    desc: "O professor desloca-se a casa. Ambiente familiar e confortável para o aluno, com materiais físicos e atenção presencial.",
    tag: "Mais personalizado",
    tagClass: "bg-green-100 text-green-700 border border-green-200",
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Como trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            A Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Três pilares fundamentais que guiam o nosso trabalho e garantem resultados reais.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map(({ icon: Icon, title, desc, iconBg, iconColor, border }) => (
            <div
              key={title}
              className={`card-lift bg-white rounded-2xl border border-gray-100 ${border} p-8 transition-all duration-200`}
            >
              <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon size={26} className={iconColor} />
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-14" />

        {/* Modalities */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Duas formas de aprender,{" "}
            <span className="gradient-text">um só objetivo</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modalities.map(({ icon: Icon, title, desc, tag, tagClass }) => (
            <div key={title} className="card-lift bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Icon size={22} className="text-gray-700" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagClass}`}>
                  {tag}
                </span>
              </div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">{title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
