import Link from "next/link";
import { asset } from "@/lib/basePath";

const WA_URL = "https://wa.me/244946038986";

export default function Footer() {
  return (
    <footer className="border-t pt-16 pb-8" style={{ backgroundColor: "#070D1B", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/logo.png")} alt="Logo Centro de Estudos Virtus" className="h-9 w-auto object-contain" />
              <span className="font-extrabold text-sm leading-tight" style={{ color: "#F4F4F2" }}>
                Centro de Estudos{" "}
                <span style={{ color: "#16a34a" }}>Virtus</span>
              </span>
            </div>
            <p className="text-sm leading-[1.75] mb-6" style={{ color: "rgba(244,244,242,0.42)" }}>
              Plataforma multidisciplinar dedicada à educação, investigação e consultoria académica.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-80"
              style={{ border: "1px solid rgba(197,168,128,0.30)", color: "#C5A880" }}
            >
              Explorar Divisões →
            </Link>
          </div>

          {/* Col 2 — Divisões */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(244,244,242,0.40)" }}>
              Divisões
            </p>
            <ul className="space-y-3">
              {[
                { label: "Virtus Pesquisa & Desenvolvimento", href: "/pesquisa" },
                { label: "Virtus Consultoria Académica",       href: "/consultoria" },
                { label: "Virtus Educação",                    href: "/educacao" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: "rgba(244,244,242,0.45)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Institucional */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(244,244,242,0.40)" }}>
              Institucional
            </p>
            <ul className="space-y-3">
              {[
                { label: "Sobre o Grupo Virtus", href: "/" },
                { label: "Missão e Visão",        href: "/" },
                { label: "Contacto",              href: "/educacao#contacto" },
                { label: "Política de Privacidade", href: "/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: "rgba(244,244,242,0.45)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(244,244,242,0.40)" }}>
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+244946038986" className="text-sm transition-colors duration-200 hover:opacity-80 block"
                  style={{ color: "rgba(244,244,242,0.45)" }}>
                  +244 946 038 986
                </a>
              </li>
              <li>
                <a href="mailto:centrodeestudovirtus@gmail.com" className="text-sm transition-colors duration-200 hover:opacity-80 block"
                  style={{ color: "rgba(244,244,242,0.45)" }}>
                  centrodeestudovirtus@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm block" style={{ color: "rgba(244,244,242,0.45)" }}>Luanda, Angola</span>
              </li>
              <li className="pt-1">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:opacity-80"
                  style={{ backgroundColor: "rgba(22,163,74,0.12)", color: "#4ade80", border: "1px solid rgba(22,163,74,0.20)" }}>
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.05)", color: "rgba(244,244,242,0.28)" }}>
          <p>© {new Date().getFullYear()} Centro de Estudos Virtus. Todos os direitos reservados.</p>
          <p>Luanda, Angola 🇦🇴</p>
        </div>
      </div>
    </footer>
  );
}
