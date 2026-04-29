import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudo Galileu.")}`;
const MAIL    = "mailto:centrogalileu@gmail.com";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-700 text-sm font-semibold tracking-widest uppercase mb-3">Estamos aqui para si</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Entre em <span className="gradient-text">Contacto</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-700 text-lg">
            Pronto para melhorar o desempenho escolar? Fale connosco e descubra o melhor plano para o seu educando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {/* WhatsApp */}
            <a href={WA_FULL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-5 bg-green-600 hover:bg-green-700 rounded-2xl p-7 transition-all card-lift group shadow-md shadow-green-200">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">WhatsApp</p>
                <p className="text-green-100 text-sm">+244 946 038 986</p>
                <p className="text-white/70 text-xs mt-1 group-hover:text-white/90 transition-colors">Resposta em menos de 2 horas →</p>
              </div>
            </a>

            {/* Email */}
            <a href={MAIL}
              className="flex items-center gap-5 bg-white border border-gray-200 hover:border-yellow-400 rounded-2xl p-7 transition-all card-lift group shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-yellow-700" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">Email</p>
                <p className="text-gray-700 text-sm">centrogalileu@gmail.com</p>
                <p className="text-gray-500 text-xs mt-1 group-hover:text-yellow-700 transition-colors">Enviar mensagem →</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-gray-700" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">Telefone</p>
                <p className="text-gray-700 text-sm">+244 946 038 986</p>
                <p className="text-gray-500 text-xs mt-1">Disponível das 8h às 20h</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-gray-700" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">Localização</p>
                <p className="text-gray-700 text-sm">Luanda, Angola</p>
                <p className="text-gray-500 text-xs mt-1">Online e ao Domicílio</p>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-gray-900 font-extrabold text-2xl mb-6">Porque contactar-nos agora?</h3>
              <ul className="space-y-5 mb-8">
                {[
                  { emoji: "🎓", title: "Aula experimental gratuita",  desc: "Experimente antes de se comprometer. Sem riscos." },
                  { emoji: "⚡", title: "Vagas limitadas",             desc: "Grupos reduzidos para máxima atenção a cada aluno." },
                  { emoji: "📋", title: "Plano personalizado em 24h",  desc: "Após o contacto, enviamos um plano adaptado ao seu educando." },
                  { emoji: "💬", title: "Sem pressão",                 desc: "Conversamos, entendemos e propomos a melhor solução." },
                ].map(({ emoji, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{title}</p>
                      <p className="text-gray-700 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a href={WA_FULL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-base transition-all shadow-md shadow-green-200 hover:scale-[1.02]">
              <MessageCircle size={18} /> Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
