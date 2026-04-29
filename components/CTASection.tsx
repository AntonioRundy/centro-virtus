import { MessageCircle, Mail, Zap } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudos Galileu.")}`;

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative yellow glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <Zap size={12} className="fill-yellow-400" />
          Vagas limitadas este mês
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Próximos <span className="text-yellow-400">Passos</span>
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Pronto para melhorar o desempenho escolar? Fale connosco agora e descubra
          o melhor plano para o seu educando — sem compromisso.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {["✅ Aula experimental gratuita", "✅ Sem compromisso inicial", "✅ Resposta em menos de 2h"].map((t) => (
            <span key={t} className="text-gray-400 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <a
            href={WA_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group rounded-2xl bg-yellow-400 hover:bg-yellow-300 p-8 text-left transition-all"
          >
            <MessageCircle size={28} className="text-gray-900 mb-4" />
            <h3 className="text-gray-900 font-bold text-lg mb-2">Aula Experimental Gratuita</h3>
            <p className="text-yellow-800 text-sm leading-relaxed">
              Experimente antes de se comprometer. Uma aula gratuita para avaliar a qualidade do nosso ensino.
            </p>
            <span className="inline-block mt-4 text-gray-700 text-xs font-semibold group-hover:translate-x-1 transition-transform">
              Agendar agora →
            </span>
          </a>

          <a
            href={WA_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/40 p-8 text-left transition-all"
          >
            <Mail size={28} className="text-yellow-400 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Receber Detalhes dos Pacotes</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Receba por WhatsApp toda a informação sobre preços, horários e planos disponíveis.
            </p>
            <span className="inline-block mt-4 text-yellow-400/70 text-xs font-semibold group-hover:text-yellow-300 group-hover:translate-x-1 transition-all">
              Receber detalhes →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
