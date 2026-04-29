import { ArrowRight, MessageCircle, Star, Users, Award } from "lucide-react";

const WA_URL = "https://wa.me/244946038986";

const stats = [
  { icon: Star,  value: "+5 anos",   label: "de experiência"      },
  { icon: Users, value: "+200",      label: "alunos acompanhados" },
  { icon: Award, value: "4 escolas", label: "currículos suportados" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #070e1f 0%, #0f2044 50%, #0a1628 100%)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Vagas disponíveis para este mês
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-up delay-100">
          Bem-vindo ao{" "}
          <span className="gradient-text block sm:inline">Centro Galileu</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 animate-fade-up delay-200">
          Acompanhamento escolar personalizado para o sucesso do seu educando —
          online ou ao domicílio, com professores qualificados e metodologia comprovada.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-green-500/25 hover:shadow-green-400/40 hover:scale-105"
          >
            Comece Agora
            <ArrowRight size={18} />
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
          >
            <MessageCircle size={18} />
            Fale Connosco
          </a>
        </div>

        {/* Trust badge */}
        <p className="text-slate-400 text-sm mb-4 animate-fade-up delay-300">
          ✓ Aula experimental gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl animate-fade-up delay-400">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">{value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L720 0L1440 60V60H0V60Z" fill="#0a1628" />
        </svg>
      </div>
    </section>
  );
}
