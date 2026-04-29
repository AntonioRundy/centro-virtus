import { User, Clock, Heart, Wifi, Home } from "lucide-react";

const pillars = [
  {
    icon: User,
    title: "Centrado no Aluno",
    desc: "Cada aluno é único. O nosso ensino parte das necessidades e do perfil de aprendizagem de cada estudante, garantindo relevância e eficácia.",
    color: "text-green-400",
    bg: "bg-green-500/15",
    border: "border-green-500/30",
  },
  {
    icon: Heart,
    title: "Atenção Individualizada",
    desc: "Professores dedicados que conhecem cada aluno pelo nome, acompanham o seu progresso e investem no seu sucesso a longo prazo.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/15",
    border: "border-yellow-500/30",
  },
  {
    icon: Clock,
    title: "Respeito pelo Ritmo",
    desc: "Nenhuma pressão desnecessária. Avançamos no ritmo certo para cada aluno, consolidando conhecimentos antes de introduzir novos desafios.",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
  },
];

const modalities = [
  {
    icon: Wifi,
    title: "Modalidade Online",
    desc: "Aulas via videochamada com partilha de ecrã, quadro virtual e materiais digitais. Aprenda em casa, sem deslocações, com toda a qualidade.",
    tag: "Mais prático",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    icon: Home,
    title: "Modalidade ao Domicílio",
    desc: "O professor desloca-se à sua casa. Ambiente familiar e confortável para o aluno, com materiais físicos e atenção presencial.",
    tag: "Mais personalizado",
    tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
];

export default function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0f2044 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Como trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            A Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Três pilares fundamentais que guiam o nosso trabalho e garantem resultados reais.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              className={`card-lift group relative rounded-2xl border ${border} bg-[#111d3c] p-8`}
            >
              <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon size={26} className={color} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-16" />

        {/* Modalities */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white">
            Duas formas de aprender,{" "}
            <span className="text-green-400">um só objetivo</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modalities.map(({ icon: Icon, title, desc, tag, tagColor }) => (
            <div
              key={title}
              className="card-lift rounded-2xl bg-[#111d3c] border border-white/10 p-8"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColor}`}>
                  {tag}
                </span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
