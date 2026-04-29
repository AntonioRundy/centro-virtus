"use client";

import { useState } from "react";
import { X, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { services, Service } from "@/data/services";

const WA_URL = "https://wa.me/244946038986";

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl animate-fade-up"
        style={{ border: "1px solid #e2e8f0" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-extrabold mb-2" style={{ color: "#0f172a" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#334155" }}>{service.fullDesc}</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5">
          <p className="text-yellow-800 text-xs font-semibold uppercase tracking-wider mb-1">Quando é recomendado?</p>
          <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{service.when}</p>
        </div>
        <p className="font-semibold text-sm mb-3" style={{ color: "#0f172a" }}>Benefícios incluídos:</p>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
              <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full transition-all duration-300">
          <MessageCircle size={16} /> Saber mais no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicos" className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f4b400" }}>
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#64748b" }}>
            Clique em qualquer serviço para descobrir como pode ajudar o seu educando.
          </p>
        </div>

        {/* All service cards — GREEN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className="card-lift group text-left rounded-2xl p-7 cursor-pointer"
              style={{ backgroundColor: "#22c55e", boxShadow: "0 10px 30px rgba(34,197,94,0.25)" }}
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <div className="w-10 h-1 rounded-full bg-white/40 mb-4 transition-all duration-300 group-hover:w-16" />
              <h3 className="font-bold text-lg mb-2 text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-4 text-green-50">{service.shortDesc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:gap-2 transition-all">
                Ver detalhes <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
