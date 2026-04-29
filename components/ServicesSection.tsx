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
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.fullDesc}</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5">
          <p className="text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-1">
            Quando é recomendado?
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{service.when}</p>
        </div>

        <p className="text-gray-900 font-semibold text-sm mb-3">Benefícios incluídos:</p>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-gray-600 text-sm">
              <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-full transition-all"
        >
          <MessageCircle size={16} />
          Saber mais no WhatsApp
        </a>
      </div>
    </div>
  );
}

const accentColors = [
  "bg-yellow-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
];

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicos" className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Clique em qualquer serviço para descobrir como pode ajudar o seu educando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className="card-lift group text-left rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 shadow-sm hover:shadow-md p-7 transition-all duration-200 cursor-pointer"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <div className={`w-10 h-1 rounded-full ${accentColors[i % accentColors.length]} mb-4 transition-all duration-300 group-hover:w-16`} />
              <h3 className="text-gray-900 font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
              <span className="inline-flex items-center gap-1 text-yellow-600 text-xs font-semibold group-hover:gap-2 transition-all">
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
