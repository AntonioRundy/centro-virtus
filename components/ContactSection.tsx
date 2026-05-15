import { MessageCircle, Mail, Phone, MapPin, CalendarCheck } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudos Virtus.")}`;
const MAIL    = "mailto:centrodeestudovirtus@gmail.com";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            Fale connosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Pronto para <span className="gradient-text">começar?</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#64748b" }}>
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
              className="flex items-center gap-5 bg-white border border-slate-200 hover:border-green-400 rounded-2xl p-7 transition-all card-lift group shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-green-700" />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#0f172a" }}>Email</p>
                <p className="text-sm" style={{ color: "#334155" }}>centrodeestudovirtus@gmail.com</p>
                <p className="text-xs mt-1 transition-colors group-hover:text-green-600" style={{ color: "#64748b" }}>
                  Enviar mensagem →
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                <Phone size={22} style={{ color: "#334155" }} />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#0f172a" }}>Telefone</p>
                <p className="text-sm" style={{ color: "#334155" }}>+244 946 038 986</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>Disponível das 8h às 20h</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} style={{ color: "#334155" }} />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: "#0f172a" }}>Localização</p>
                <p className="text-sm" style={{ color: "#334155" }}>Luanda, Angola</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>Online e ao Domicílio</p>
              </div>
            </div>
          </div>

          {/* Right: reasons panel */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-2xl mb-6" style={{ color: "#0f172a" }}>
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
                      <p className="font-semibold text-sm" style={{ color: "#0f172a" }}>{title}</p>
                      <p className="text-sm" style={{ color: "#64748b" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a href={WA_FULL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-base transition-all duration-300 shadow-md shadow-green-200 hover:scale-[1.02]">
              <CalendarCheck size={18} />
              Agendar Aula Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
