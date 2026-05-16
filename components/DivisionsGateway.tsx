"use client";
import Link from "next/link";
import { useState } from "react";

const divisions = [
  {
    number: "01",
    slug: "pesquisa",
    label: "Pesquisa & Desenvolvimento",
    name: "Virtus Pesquisa & Desenvolvimento",
    tagline: "Inteligência baseada em dados",
    description:
      "Pesquisas científicas, estudos de mercado e inteligência baseada em dados reais para apoiar decisões, análises e produção de conhecimento.",
    href: "/pesquisa",
  },
  {
    number: "02",
    slug: "consultoria",
    label: "Consultoria Académica",
    name: "Virtus Consultoria Académica",
    tagline: "Orientação científica especializada",
    description:
      "Orientação especializada para monografias, dissertações, metodologia científica e análise de dados académicos.",
    href: "/consultoria",
  },
  {
    number: "03",
    slug: "educacao",
    label: "Educação",
    name: "Virtus Educação",
    tagline: "Formação personalizada moderna",
    description:
      "Explicações, preparação para exames, acompanhamento escolar e cursos de apoio à formação académica com metodologia moderna e personalizada.",
    href: "/educacao",
  },
];

export default function DivisionsGateway() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pb-28 lg:pb-36"
      style={{ backgroundColor: "#070D1B" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Divider with label */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
          <span
            className="text-[10px] font-semibold tracking-[0.24em] uppercase whitespace-nowrap"
            style={{ color: "rgba(244,244,242,0.28)" }}
          >
            Divisões Estratégicas
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {divisions.map((div) => (
            <Link
              key={div.number}
              href={div.href}
              onMouseEnter={() => setHovered(div.slug)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex flex-col justify-between rounded-2xl p-10 lg:p-12 min-h-[400px] transition-all duration-300"
              style={{
                backgroundColor: "#1E1208",
                border: hovered === div.slug
                  ? "1px solid rgba(197,168,128,0.20)"
                  : "1px solid rgba(255,255,255,0.05)",
                transform: hovered === div.slug ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === div.slug
                  ? "0 20px 48px rgba(0,0,0,0.5)"
                  : "none",
              }}
            >
              {/* Top row */}
              <div>
                <div className="flex items-start justify-between mb-10">
                  <span
                    className="text-xs font-bold tracking-[0.22em] uppercase"
                    style={{ color: "rgba(197,168,128,0.45)" }}
                  >
                    {div.number}
                  </span>
                  <span
                    className="text-[10px] font-medium tracking-wider uppercase text-right max-w-[120px] leading-relaxed"
                    style={{ color: "rgba(244,244,242,0.22)" }}
                  >
                    {div.tagline}
                  </span>
                </div>

                <h2
                  className="text-2xl lg:text-[1.65rem] font-extrabold leading-tight mb-5"
                  style={{ color: "#F4F4F2" }}
                >
                  {div.name}
                </h2>

                <p
                  className="text-sm leading-[1.80]"
                  style={{ color: "rgba(244,244,242,0.50)" }}
                >
                  {div.description}
                </p>
              </div>

              {/* Bottom row */}
              <div
                className="flex items-center justify-between mt-10 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#C5A880" }}
                >
                  Explorar divisão
                </span>
                <span
                  className="text-base font-light transition-transform duration-300 group-hover:translate-x-2"
                  style={{ color: "#C5A880" }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
