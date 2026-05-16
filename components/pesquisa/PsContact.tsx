"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

const services = [
  "Estudo de Mercado",
  "Levantamento Social",
  "Geociências & Geofísica",
  "Pesquisa Científica",
  "Relatório Estratégico",
  "Outro",
];

export default function PsContact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Sou ${form.name} (${form.email}). Tenho interesse em: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/244946038986?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputStyle = {
    backgroundColor: "#111520",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#F4F4F2",
    borderRadius: "12px",
    padding: "14px 18px",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s",
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
              Contacto
            </span>
            <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black mb-6`}
              style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
              Tem um projecto?
            </h2>
            <p className="text-base leading-[1.80] mb-10" style={{ color: "rgba(244,244,242,0.60)" }}>
              Partilhe os detalhes do seu projecto de pesquisa ou análise. Respondemos em menos de 24 horas com uma proposta inicial.
            </p>
            <div className="space-y-5">
              {[
                { label: "Email", value: "centrodeestudovirtus@gmail.com" },
                { label: "WhatsApp", value: "+244 946 038 986" },
                { label: "Localização", value: "Luanda, Angola" },
                { label: "Disponibilidade", value: "Segunda a Sábado · 8h–20h" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-8 h-px mt-3 flex-shrink-0" style={{ backgroundColor: "#E8A048", opacity: 0.50 }} />
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "rgba(244,244,242,0.35)" }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.10 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.45)" }}>
                    Nome *
                  </label>
                  <input
                    type="text" required placeholder="O seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,72,0.50)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.45)" }}>
                    Email *
                  </label>
                  <input
                    type="email" required placeholder="email@empresa.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,72,0.50)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.45)" }}>
                  Serviço de interesse *
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,72,0.50)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                >
                  <option value="" disabled style={{ backgroundColor: "#111520" }}>Seleccionar serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ backgroundColor: "#111520" }}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.45)" }}>
                  Descreva o projecto
                </label>
                <textarea
                  rows={5}
                  placeholder="Contexto, objectivos, âmbito e qualquer detalhe relevante..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" as const }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(232,160,72,0.50)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: sent ? "#16a34a" : "#E8A048",
                  color: "#0A0B12",
                  boxShadow: `0 4px 28px ${sent ? "rgba(22,163,74,0.30)" : "rgba(232,160,72,0.28)"}`,
                }}
              >
                {sent ? "✓ Mensagem enviada via WhatsApp" : "Enviar Proposta →"}
              </button>
              <p className="text-center text-xs" style={{ color: "rgba(244,244,242,0.30)" }}>
                A submissão abre o WhatsApp com a sua mensagem pré-preenchida.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
