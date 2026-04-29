import { BookOpen, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/244946038986";

const links = {
  "Serviços": ["Explicação", "Apoio Escolar", "Planos de Revisão", "Preparação para Exames"],
  "Escolas":  ["Escola Portuguesa de Luanda", "Camilo Castelo Branco", "Luanda International School", "Colégio Angolano de Talatona"],
  "Contacto": ["WhatsApp: +244 946 038 986", "centrogalileu@gmail.com", "Luanda, Angola"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#030a16" }} className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <BookOpen size={18} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">Centro <span className="text-green-400">Galileu</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Acompanhamento escolar personalizado em Luanda. Online e ao domicílio.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-500/25 transition-colors"
            >
              <MessageCircle size={14} />
              Fale Connosco
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-4">{group}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-slate-500 text-sm hover:text-slate-300 transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} Centro de Estudos Galileu. Todos os direitos reservados.</p>
          <p>Feito com dedicação em Luanda, Angola 🇦🇴</p>
        </div>
      </div>
    </footer>
  );
}
