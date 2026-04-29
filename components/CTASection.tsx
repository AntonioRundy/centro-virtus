import { MessageCircle, Mail, Zap } from "lucide-react";

const WA_URL = "https://wa.me/244946038986";
const MAIL   = "mailto:centrogalileu@gmail.com";

export default function CTASection() {
  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1f10 0%, #0f2044 50%, #0a1628 100%)" }}
    >
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <Zap size={12} className="fill-green-400" />
          Vagas limitadas este mês
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Próximos <span className="gradient-text">Passos</span>
        </h2>
        <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Pronto para melhorar o desempenho escolar? Fale connosco agora e descubra
          o melhor plano para o seu educando — sem compromisso.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            "✅ Aula experimental gratuita",
            "✅ Sem compromisso inicial",
            "✅ Resposta em menos de 2h",
          ].map((t) => (
            <span key={t} className="text-slate-300 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-green-500 hover:bg-green-400 p-8 text-left transition-all duration-200 card-lift shadow-xl shadow-green-900/40"
          >
            <MessageCircle size={28} className="text-white mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Aula Experimental Gratuita</h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Experimente antes de se comprometer. Uma aula gratuita para avaliar a qualidade do nosso ensino.
            </p>
            <span className="inline-block mt-4 text-white/70 text-xs group-hover:text-white transition-colors">
              Clique para agendar →
            </span>
          </a>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#111d3c] border border-green-500/30 hover:border-green-500/60 p-8 text-left transition-all duration-200 card-lift"
          >
            <Mail size={28} className="text-green-400 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Receber Detalhes dos Pacotes</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Receba por WhatsApp toda a informação sobre preços, horários e planos disponíveis.
            </p>
            <span className="inline-block mt-4 text-green-400/70 text-xs group-hover:text-green-300 transition-colors">
              Clique para receber →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
