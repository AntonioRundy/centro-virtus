"use client";

import { useState } from "react";
import { X, CheckCircle, MessageCircle } from "lucide-react";
import { services, Service } from "@/data/services";

const WA_URL = "https://wa.me/244946038986";

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-fade-up"
        style={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.10)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X size={16} />
        </button>
        <h3 className="text-2xl font-extrabold mb-2" style={{ color: "#ffffff" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#e2e8f0" }}>{service.fullDesc}</p>
        <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(180,130,0,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#fbbf24" }}>Quando é recomendado?</p>
          <p className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>{service.when}</p>
        </div>
        <p className="font-semibold text-sm mb-3" style={{ color: "#ffffff" }}>Benefícios incluídos:</p>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "#e2e8f0" }}>
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
    <section id="servicos" className="section-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#ffffff" }}>
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            Clique em qualquer serviço para descobrir como pode ajudar o seu educando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className="card-lift group text-left rounded-2xl p-10 cursor-pointer"
              style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}
            >
              <h3 className="font-extrabold text-2xl mb-2" style={{ color: "#ffffff" }}>{service.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>{service.shortDesc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                style={{ color: "#16a34a" }}>
                Ver detalhes →
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
