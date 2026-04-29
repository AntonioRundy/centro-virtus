import Image from "next/image";
import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/244946038986";

const links = {
  "Serviços":  ["Explicação", "Apoio Escolar", "Planos de Revisão", "Preparação para Exames"],
  "Escolas":   ["Escola Portuguesa de Luanda", "Camilo Castelo Branco", "Luanda Int. School", "Colégio Angolano de Talatona"],
  "Contacto":  ["+244 946 038 986", "centrogalileu@gmail.com", "Luanda, Angola"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image src="/logo.png" alt="Centro Galileu" fill className="object-contain" />
              </div>
              <span className="font-extrabold text-white text-lg">
                Centro <span className="text-yellow-400">Galileu</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Acompanhamento escolar personalizado em Luanda. Online e ao domicílio.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle size={13} />
              Fale Connosco
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Centro de Estudos Galileu. Todos os direitos reservados.</p>
          <p>Feito com dedicação em Luanda, Angola 🇦🇴</p>
        </div>
      </div>
    </footer>
  );
}
