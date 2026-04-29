import { User, Clock, Heart, Wifi, Home } from "lucide-react";

const pillars = [
  { icon: User,  title: "Centrado no Aluno",      desc: "Cada aluno é único. O nosso ensino parte das necessidades e do perfil de aprendizagem de cada estudante." },
  { icon: Heart, title: "Atenção Individualizada", desc: "Professores dedicados que conhecem cada aluno pelo nome, acompanham o seu progresso e investem no sucesso." },
  { icon: Clock, title: "Respeito pelo Ritmo",     desc: "Avançamos no ritmo certo para cada aluno, consolidando conhecimentos antes de introduzir novos desafios." },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f4b400" }}>
            Como trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            A Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Três pilares fundamentais que guiam o nosso trabalho e garantem resultados reais.
          </p>
        </div>

        {/* Pillar cards — BLUE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-lift rounded-2xl p-8"
              style={{ backgroundColor: "#2563eb", boxShadow: "0 10px 30px rgba(37,99,235,0.25)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-blue-100">{desc}</p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-14" />

        {/* Modalities label */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold" style={{ color: "#0f172a" }}>
            Duas formas de aprender,{" "}
            <span className="gradient-text">um só objetivo</span>
          </h3>
        </div>

        {/* Modality cards — GREEN / YELLOW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Online → GREEN */}
          <div
            className="card-lift rounded-2xl p-8"
            style={{ backgroundColor: "#16a34a", boxShadow: "0 10px 30px rgba(22,163,74,0.25)" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Wifi size={22} className="text-white" />
              </div>
              <span className="text-xs font-semibold bg-white/25 text-white px-3 py-1 rounded-full">
                Mais prático
              </span>
            </div>
            <h4 className="font-bold text-lg text-white mb-2">Modalidade Online</h4>
            <p className="text-sm leading-relaxed text-green-100">
              Aulas via videochamada com partilha de ecrã, quadro virtual e materiais digitais. Qualidade total, sem deslocações.
            </p>
          </div>

          {/* Domicílio → YELLOW */}
          <div
            className="card-lift rounded-2xl p-8"
            style={{ backgroundColor: "#facc15", boxShadow: "0 10px 30px rgba(250,204,21,0.30)" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                <Home size={22} style={{ color: "#0f172a" }} />
              </div>
              <span className="text-xs font-semibold bg-black/10 px-3 py-1 rounded-full" style={{ color: "#0f172a" }}>
                Mais personalizado
              </span>
            </div>
            <h4 className="font-bold text-lg mb-2" style={{ color: "#0f172a" }}>Modalidade ao Domicílio</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              O professor desloca-se a casa. Ambiente familiar e confortável, com materiais físicos e atenção totalmente presencial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
