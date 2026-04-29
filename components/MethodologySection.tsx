import { User, Clock, Heart, Wifi, Home } from "lucide-react";

const pillars = [
  { icon: User,  title: "Centrado no Aluno",       desc: "Cada aluno é único. O nosso ensino parte das necessidades e do perfil de aprendizagem de cada estudante.", iconBg: "bg-yellow-100", iconColor: "text-yellow-700" },
  { icon: Heart, title: "Atenção Individualizada",  desc: "Professores dedicados que conhecem cada aluno pelo nome, acompanham o seu progresso e investem no sucesso.", iconBg: "bg-green-100",  iconColor: "text-green-700"  },
  { icon: Clock, title: "Respeito pelo Ritmo",      desc: "Avançamos no ritmo certo para cada aluno, consolidando conhecimentos antes de introduzir novos desafios.",    iconBg: "bg-blue-100",  iconColor: "text-blue-700"  },
];

const modalities = [
  { icon: Wifi, title: "Modalidade Online",       desc: "Aulas via videochamada com partilha de ecrã, quadro virtual e materiais digitais. Qualidade total, sem deslocações.", tag: "Mais prático",      tagClass: "bg-yellow-100 text-yellow-800 border border-yellow-300" },
  { icon: Home, title: "Modalidade ao Domicílio", desc: "O professor desloca-se a casa. Ambiente familiar e confortável, com materiais físicos e atenção totalmente presencial.", tag: "Mais personalizado", tagClass: "bg-green-100 text-green-800 border border-green-300"   },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f4b400" }}>Como trabalhamos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            A Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Três pilares fundamentais que guiam o nosso trabalho e garantem resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map(({ icon: Icon, title, desc, iconBg, iconColor }) => (
            <div key={title} className="card-elevated card-lift rounded-2xl p-8 transition-all duration-300 hover:border-[#f4b400]">
              <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon size={26} className={iconColor} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0f172a" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-14" />

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold" style={{ color: "#0f172a" }}>
            Duas formas de aprender, <span className="gradient-text">um só objetivo</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modalities.map(({ icon: Icon, title, desc, tag, tagClass }) => (
            <div key={title} className="card-elevated card-lift rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon size={22} className="text-slate-700" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagClass}`}>{tag}</span>
              </div>
              <h4 className="font-bold text-lg mb-2" style={{ color: "#0f172a" }}>{title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
