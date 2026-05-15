"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/basePath";

const navLinks = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços",    href: "#servicos"    },
  { label: "Preços",      href: "#precos"      },
  { label: "Escolas",     href: "#escolas"     },
  { label: "Equipa",      href: "#equipe"      },
  { label: "Contacto",    href: "#contacto"    },
];

const WA_URL = "https://wa.me/244946038986";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(7,13,27,0.94)" } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo.png")} alt="Logo Centro de Estudos Virtus" className="h-10 w-auto object-contain" />
          <span className="font-extrabold text-base leading-tight hidden lg:block" style={{ color: "#ffffff" }}>
            Centro de Estudos{" "}
            <span style={{ color: "#16a34a" }}>Virtus</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{ color: "#F4F4F2" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-600/25 hover:scale-[1.03]"
        >
          Agendar Aula
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          style={{ color: "#F4F4F2" }}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-4 pb-6 pt-3 animate-fade-in" style={{ backgroundColor: "#070D1B" }}>
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-white/8"
                  style={{ color: "#F4F4F2" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition-all duration-300"
          >
            Agendar Aula Gratuita
          </a>
        </div>
      )}
    </header>
  );
}
