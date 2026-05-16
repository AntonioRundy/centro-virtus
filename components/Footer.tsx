import { MessageCircle } from "lucide-react";
import { asset } from "@/lib/basePath";

const WA_URL = "https://wa.me/244946038986";

const links: Record<string, { label: string; href: string }[]> = {
  "Divisões": [
    { label: "Pesquisa & Desenvolvimento", href: "/pesquisa"    },
    { label: "Consultoria Académica",       href: "/consultoria" },
    { label: "Virtus Educação",             href: "/educacao"    },
  ],
  "Educação": [
    { label: "Explicação",             href: "/educacao#servicos" },
    { label: "Apoio Escolar",          href: "/educacao#servicos" },
    { label: "Preparação para Exames", href: "/educacao#servicos" },
    { label: "Ver Preços",             href: "/educacao#precos"   },
  ],
  "Contacto": [
    { label: "+244 946 038 986",               href: "tel:+244946038986"                     },
    { label: "centrodeestudovirtus@gmail.com", href: "mailto:centrodeestudovirtus@gmail.com" },
    { label: "Luanda, Angola",                 href: "/educacao#contacto"                    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/logo.png")} alt="Logo Centro de Estudos Virtus" className="h-9 w-auto object-contain" />
              <span className="font-extrabold text-base leading-tight" style={{ color: "#F4F4F2" }}>
                Centro de Estudos{" "}
                <span style={{ color: "#16a34a" }}>Virtus</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(244,244,242,0.50)" }}>
              Acompanhamento escolar personalizado em Luanda. Online e ao domicílio.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              <MessageCircle size={13} /> Agendar Aula
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm transition-colors footer-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.05)", color: "rgba(244,244,242,0.35)" }}>
          <p>© {new Date().getFullYear()} Centro de Estudos Virtus. Todos os direitos reservados.</p>
          <p>Feito com dedicação em Luanda, Angola 🇦🇴</p>
        </div>
      </div>
    </footer>
  );
}
