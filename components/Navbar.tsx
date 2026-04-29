"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/basePath";

const navLinks = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços",    href: "#servicos"    },
  { label: "Preços",      href: "#precos"      },
  { label: "Escolas",     href: "#escolas"     },
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
          ? "bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo.png")}
            alt="Centro Galileu"
            className="h-10 w-auto object-contain"
          />
          <span className="font-extrabold text-gray-900 text-lg leading-tight hidden sm:block">
            Centro <span style={{ color: "#f4b400" }}>Galileu</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-green-600/25"
        >
          Fale Connosco
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-3 animate-fade-in shadow-lg">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-yellow-50 hover:text-yellow-800 text-sm font-medium transition-colors"
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
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition-colors"
          >
            Fale Connosco
          </a>
        </div>
      )}
    </header>
  );
}
