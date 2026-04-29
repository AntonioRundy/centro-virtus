import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Users, Award } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudos Galileu.")}`;

const stats = [
  { icon: Star,  value: "+5 anos",   label: "de experiência"       },
  { icon: Users, value: "+200",      label: "alunos acompanhados"  },
  { icon: Award, value: "4 escolas", label: "currículos suportados" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-white min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-4 py-2 rounded-full mb-7 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Vagas disponíveis para este mês
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 animate-fade-up delay-100">
              Bem-vindo ao{" "}
              <span className="gradient-text">Centro Galileu</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
              Acompanhamento escolar personalizado para o sucesso do seu educando —
              online ou ao domicílio, com professores qualificados e metodologia comprovada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up delay-300">
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-yellow-200 hover:shadow-yellow-300 hover:scale-[1.03]"
              >
                Comece Agora
                <ArrowRight size={18} />
              </a>
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-green-50"
              >
                <MessageCircle size={18} />
                Fale Connosco
              </a>
            </div>

            {/* Trust line */}
            <p className="text-gray-400 text-sm mb-8 animate-fade-up delay-300">
              ✓ Aula experimental gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fade-up delay-400">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-center"
                >
                  <div className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-yellow-600" />
                  </div>
                  <p className="text-gray-900 font-extrabold text-lg leading-none">{value}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero image ── */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/5] lg:aspect-[3/4] bg-yellow-50">
              <Image
                src="/hero.png"
                alt="Aluno a estudar com professor do Centro Galileu"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative badge on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-gray-900 font-bold text-sm">🎓 Aula experimental gratuita</p>
                <p className="text-gray-500 text-xs mt-0.5">Experimente sem compromisso — fale connosco hoje.</p>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 bg-yellow-400 rounded-2xl px-4 py-3 text-center">
                <p className="text-gray-900 font-extrabold text-xl">+200</p>
                <p className="text-yellow-800 text-xs font-medium">Alunos</p>
              </div>
              <div className="flex-1 bg-gray-900 rounded-2xl px-4 py-3 text-center">
                <p className="text-white font-extrabold text-xl">Online</p>
                <p className="text-gray-400 text-xs font-medium">& Domicílio</p>
              </div>
              <div className="flex-1 bg-green-500 rounded-2xl px-4 py-3 text-center">
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
