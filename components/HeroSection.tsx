import { ArrowRight, MessageCircle, Star, Users, Award } from "lucide-react";
import { asset } from "@/lib/basePath";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudo Galileu.")}`;

const stats = [
  { icon: Star,  value: "+5 anos",   label: "de experiência"        },
  { icon: Users, value: "+200",      label: "alunos acompanhados"   },
  { icon: Award, value: "4 escolas", label: "currículos suportados" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text (55%) ── */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs font-semibold px-4 py-2 rounded-full mb-7 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse" />
              Vagas disponíveis para este mês
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5 animate-fade-up delay-100" style={{ color: "#0f172a" }}>
              Bem-vindo ao{" "}
              <span className="gradient-text">Centro de Estudo Galileu</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up delay-200" style={{ color: "#334155" }}>
              Acompanhamento escolar personalizado para o sucesso do seu educando —
              online ou ao domicílio, com professores qualificados e metodologia comprovada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-7 animate-fade-up delay-300">
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f4b400] hover:bg-[#e0a800] text-[#0f172a] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-yellow-200 hover:scale-[1.03]"
              >
                Comece Agora <ArrowRight size={18} />
              </a>
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-green-500 text-[#334155] hover:text-green-700 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-green-50"
              >
                <MessageCircle size={18} /> Fale Connosco
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm mb-8 animate-fade-up delay-300" style={{ color: "#64748b" }}>
              ✓ Aula experimental gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 animate-fade-up delay-400">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white border border-slate-200 rounded-2xl px-3 py-4 text-center shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-yellow-700" />
                  </div>
                  <p className="font-extrabold text-lg leading-none" style={{ color: "#0f172a" }}>{value}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: "#64748b" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero image (45%) ── */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">
            {/* Card wrapper */}
            <div className="bg-white rounded-3xl p-4" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/hero.png")}
                alt="Aluno a estudar com professor do Centro de Estudo Galileu"
                className="w-full rounded-2xl object-cover"
                style={{ height: "420px" }}
              />
            </div>

            {/* Accent bar below card */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 rounded-2xl px-4 py-3 text-center bg-[#f4b400]">
                <p className="font-extrabold text-xl" style={{ color: "#0f172a" }}>+200</p>
                <p className="text-xs font-medium text-yellow-900">Alunos</p>
              </div>
              <div className="flex-1 bg-[#0f172a] rounded-2xl px-4 py-3 text-center">
                <p className="text-white font-extrabold text-xl">Online</p>
                <p className="text-slate-400 text-xs font-medium">& Domicílio</p>
              </div>
              <div className="flex-1 bg-green-600 rounded-2xl px-4 py-3 text-center">
                <p className="text-white font-extrabold text-xl">+5</p>
                <p className="text-green-100 text-xs font-medium">Anos exp.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
