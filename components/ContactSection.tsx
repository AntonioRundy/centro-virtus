import { MessageCircle, Mail, CalendarCheck } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudos Virtus.")}`;
const MAIL    = "mailto:centrodeestudovirtus@gmail.com";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="label-gold inline-block mb-3">
            Fale connosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#F4F4F2" }}>
            Pronto para <span className="gradient-text">começar?</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            A primeira aula é gratuita. Sem compromisso. Fale connosco agora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: contact actions */}
          <div className="space-y-4">
            <a href={WA_FULL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl p-7 transition-all card-lift group shadow-md"
              style={{ backgroundColor: "#16a34a", boxShadow: "0 12px 32px rgba(22,163,74,0.25)" }}>
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">WhatsApp</p>
                <p className="text-green-100 text-sm">+244 946 038 986</p>
                <p className="text-white/60 text-xs mt-1 group-hover:text-white/80 transition-colors">
                  Resposta em menos de 2 horas →
                </p>
              </div>
            </a>

            <a href={MAIL}
              className="flex items-center gap-5 rounded-2xl p-7 transition-all card-lift group"
              style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(197,168,128,0.10)" }}>
                <Mail size={24} style={{ color: "#C5A880" }} />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#F4F4F2" }}>Email</p>
                <p className="text-sm" style={{ color: "rgba(244,244,242,0.70)" }}>centrodeestudovirtus@gmail.com</p>
                <p className="text-xs mt-1 transition-colors group-hover:text-green-400" style={{ color: "rgba(244,244,242,0.45)" }}>
                  Enviar mensagem →
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-2xl p-7" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <span style={{ color: "rgba(244,244,242,0.60)", fontSize: "1.25rem" }}>📞</span>
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#F4F4F2" }}>Telefone</p>
                <p className="text-sm" style={{ color: "rgba(244,244,242,0.65)" }}>+244 946 038 986</p>
                <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>Disponível das 8h às 20h</p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl p-7" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <span style={{ color: "rgba(244,244,242,0.60)", fontSize: "1.25rem" }}>📍</span>
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#F4F4F2" }}>Localização</p>
                <p className="text-sm" style={{ color: "rgba(244,244,242,0.65)" }}>Luanda, Angola</p>
                <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>Online e ao Domicílio</p>
              </div>
            </div>
          </div>

          {/* Right: reasons panel */}
          <div className="rounded-2xl p-10 flex flex-col justify-between" style={{ backgroundColor: "#1E1208", border: "1px solid rgba(255,255,255,0.04)", boxShadow: "none" }}>
            <div>
              <h3 className="font-extrabold text-2xl mb-6" style={{ color: "#F4F4F2" }}>
                Porque contactar-nos agora?
              </h3>
              <ul className="space-y-5 mb-8">
                {[
                  { emoji: "🎓", title: "Aula experimental gratuita",  desc: "Experimente antes de se comprometer. Sem riscos." },
                  { emoji: "⚡", title: "Vagas limitadas",             desc: "Grupos reduzidos para máxima atenção a cada aluno." },
                  { emoji: "📋", title: "Plano personalizado em 24h",  desc: "Após o contacto, enviamos um plano adaptado." },
                  { emoji: "💬", title: "Sem pressão",                 desc: "Conversamos, entendemos e propomos a melhor solução." },
                ].map(({ emoji, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#F4F4F2" }}>{title}</p>
                      <p className="text-sm" style={{ color: "rgba(244,244,242,0.55)" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a href={WA_FULL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.35)" }}>
              <CalendarCheck size={18} />
              Agendar Aula Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
