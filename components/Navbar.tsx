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
          ? "bg-white/97 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo.png")}
            alt="Centro de Estudo Galileu"
            className="h-10 w-auto object-contain"
          />
          <span className="font-extrabold text-[#0f172a] text-base leading-tight hidden lg:block">
            Centro de Estudo{" "}
            <span style={{ color: "#f4b400" }}>Galileu</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[#334155] hover:text-[#0f172a] text-sm font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#f4b400] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-600/25 hover:scale-[1.03]"
        >
          Fale Connosco
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-[#334155] hover:bg-slate-100 transition-colors"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-6 pt-3 animate-fade-in shadow-lg">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[#334155] hover:bg-yellow-50 hover:text-[#0f172a] text-sm font-medium transition-colors"
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
            Fale Connosco
          </a>
        </div>
      )}
    </header>
  );
}
