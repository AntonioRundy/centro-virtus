"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WA_URL = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Centro de Estudos Virtus.")}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {hovered && (
        <div className="animate-slide-right relative bg-white border border-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap" style={{ color: "#334155" }}>
          Fale connosco no WhatsApp 💬
          <div className="absolute bottom-3 right-[-5px] w-2.5 h-2.5 bg-white border-t border-r border-slate-200 rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-2xl shadow-green-300 transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Fale connosco no WhatsApp"
      >
        <MessageCircle size={28} className="text-white" fill="white" />
      </a>
    </div>
  );
}
