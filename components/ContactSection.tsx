import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const WA_URL   = "https://wa.me/244946038986";
const WA_TEXT  = encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudos Galileu.");
const WA_FULL  = `${WA_URL}?text=${WA_TEXT}`;
const MAIL     = "mailto:centrogalileu@gmail.com";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #0f2044 0%, #070e1f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Estamos aqui para si
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Entre em <span className="gradient-text">Contacto Connosco</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Pronto para melhorar o desempenho escolar? Fale connosco agora e descubra o melhor plano para o seu educando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact actions */}
          <div className="space-y-5">
            {/* WhatsApp - primary */}
            <a
              href={WA_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-green-500 hover:bg-green-400 rounded-2xl p-7 transition-all duration-200 card-lift group shadow-xl shadow-green-900/40"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">WhatsApp</p>
                <p className="text-green-100/80 text-sm">+244 946 038 986</p>
                <p className="text-white/60 text-xs mt-1 group-hover:text-white/80 transition-colors">
                  Resposta em menos de 2 horas →
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={MAIL}
              className="flex items-center gap-5 bg-[#111d3c] border border-white/10 hover:border-green-500/40 rounded-2xl p-7 transition-all duration-200 card-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={26} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Email</p>
                <p className="text-slate-400 text-sm">centrogalileu@gmail.com</p>
                <p className="text-slate-500 text-xs mt-1 group-hover:text-green-400 transition-colors">
                  Enviar mensagem →
                </p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-[#111d3c] border border-white/10 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Telefone</p>
                <p className="text-slate-400 text-sm">+244 946 038 986</p>
                <p className="text-slate-500 text-xs mt-1">Disponível das 8h às 20h</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 bg-[#111d3c] border border-white/10 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Localização</p>
                <p className="text-slate-400 text-sm">Luanda, Angola</p>
                <p className="text-slate-500 text-xs mt-1">Online e ao Domicílio</p>
              </div>
            </div>
          </div>

          {/* Right: info panel */}
          <div className="rounded-2xl bg-[#111d3c] border border-white/10 p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-extrabold text-2xl mb-4">
                Porque contactar-nos agora?
              </h3>
              <ul className="space-y-5 mb-8">
                {[
                  {
                    emoji: "🎓",
                    title: "Aula experimental gratuita",
                    desc: "Experimente antes de se comprometer. Sem riscos.",
                  },
                  {
                    emoji: "⚡",
                    title: "Vagas limitadas",
                    desc: "Garantimos grupos reduzidos para máxima atenção a cada aluno.",
                  },
                  {
                    emoji: "📋",
                    title: "Plano personalizado em 24h",
                    desc: "Após o contacto, enviamos um plano adaptado ao seu educando.",
                  },
                  {
                    emoji: "💬",
                    title: "Sem pressão",
                    desc: "Conversamos, entendemos as necessidades e propomos a melhor solução.",
                  },
                ].map(({ emoji, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WA_FULL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-full text-base transition-all shadow-lg shadow-green-900/40 hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
