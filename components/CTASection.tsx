import { MessageCircle, CalendarCheck, Zap } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudos Virtus.")}`;

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
      {/* Green glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.12)" }} />
      {/* Gold glow */}
      <div className="absolute bottom-0 right-1/3 w-80 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(212,175,55,0.10)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 border text-xs font-semibold px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "rgba(22,163,74,0.15)", borderColor: "rgba(22,163,74,0.30)", color: "#4ade80" }}>
          <Zap size={12} className="fill-green-400" />
          Vagas limitadas este mês
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: "#F4F4F2" }}>
          Dê o próximo passo{" "}
          <span className="gradient-text">hoje.</span>
        </h2>
        <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(244,244,242,0.65)" }}>
          A primeira aula é gratuita. Sem compromisso. Sem burocracia.
          Só a oportunidade de ver o que podemos fazer pelo seu educando.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {["✅ Primeira aula gratuita", "✅ Professores qualificados", "✅ Resultados reais"].map((t) => (
            <span key={t} className="text-sm px-4 py-2 rounded-full"
              style={{ color: "rgba(244,244,242,0.65)", backgroundColor: "rgba(30,18,8,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">

          {/* Primary — GREEN */}
          <a
            href={WA_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group rounded-2xl p-8 text-left transition-all"
            style={{ backgroundColor: "#16a34a", boxShadow: "0 16px 40px rgba(22,163,74,0.30)" }}
          >
            <CalendarCheck size={28} className="text-white mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Agendar Aula Gratuita</h3>
            <p className="text-sm leading-relaxed text-green-100">
              Experimente antes de se comprometer. Uma aula para avaliar a qualidade do nosso ensino.
            </p>
            <span className="inline-block mt-4 text-white/70 text-xs font-semibold group-hover:translate-x-1 transition-transform">
              Clique para agendar →
            </span>
          </a>

          {/* Secondary */}
          <a
            href={WA_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group rounded-2xl p-8 text-left transition-all"
            style={{
              backgroundColor: "rgba(30,18,8,0.8)",
              border: "1px solid rgba(197,168,128,0.20)",
            }}
          >
            <MessageCircle size={28} className="mb-4" style={{ color: "#C5A880" }} />
            <h3 className="font-bold text-lg mb-2" style={{ color: "#F4F4F2" }}>Receber Detalhes</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,242,0.55)" }}>
              Receba por WhatsApp toda a informação sobre preços, horários e planos disponíveis.
            </p>
            <span className="inline-block mt-4 text-xs font-semibold group-hover:translate-x-1 transition-transform"
              style={{ color: "#C5A880" }}>
              Receber detalhes →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
