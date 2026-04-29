"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WA_TEXT = encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudos Galileu.");
const WA_URL  = `https://wa.me/244946038986?text=${WA_TEXT}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {hovered && (
        <div className="animate-slide-right bg-[#111d3c] border border-white/15 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap">
          Fale connosco no WhatsApp 💬
          <div className="absolute bottom-3 right-[-6px] w-3 h-3 bg-[#111d3c] border-t border-r border-white/15 rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-2xl shadow-green-900/50 transition-all duration-200 hover:scale-110 animate-pulse-glow"
        aria-label="Fale connosco no WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}
