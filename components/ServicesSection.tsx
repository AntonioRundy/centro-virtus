"use client";

import { useState } from "react";
import { X, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { services, Service } from "@/data/services";

const WA_URL = "https://wa.me/244946038986";

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-[#111d3c] border border-white/15 rounded-3xl p-8 shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X size={16} />
        </button>

        {/* Icon + title */}
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-extrabold text-white mb-2">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.fullDesc}</p>

        {/* When */}
        <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-xl p-4 mb-5">
          <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">
            Quando é recomendado?
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">{service.when}</p>
        </div>

        {/* Benefits */}
        <p className="text-white font-semibold text-sm mb-3">Benefícios incluídos:</p>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-full transition-all"
        >
          <MessageCircle size={16} />
          Saber mais no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section
      id="servicos"
      className="py-20 lg:py-32"
      style={{ background: "#070e1f" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Clique em qualquer serviço para saber mais detalhes e como pode beneficiar o seu educando.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className="card-lift group text-left rounded-2xl bg-[#111d3c] border border-white/10 hover:border-green-500/40 p-7 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <div
                className={`w-12 h-1 rounded-full bg-gradient-to-r ${service.color} mb-4 transition-all duration-300 group-hover:w-20`}
              />
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
              <span className="inline-flex items-center gap-1 text-green-400 text-xs font-semibold group-hover:gap-2 transition-all">
                Ver detalhes <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
