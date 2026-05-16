"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"] });

const types = ["Monografia", "Dissertação de Mestrado", "Tese de Doutoramento", "Análise Estatística", "Metodologia Científica", "Revisão Académica", "Outro"];

export default function CsContact() {
  const [form, setForm] = useState({ name: "", email: "", institution: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Sou ${form.name} (${form.email}), da ${form.institution || "N/A"}. Preciso de apoio em: ${form.type}. ${form.message}`;
    window.open(`https://wa.me/244946038986?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.09)",
    color: "#F4F4F2", borderRadius: "12px", padding: "14px 18px",
    fontSize: "0.875rem", width: "100%", outline: "none", transition: "border-color 0.25s",
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = "rgba(197,168,128,0.45)");
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = "rgba(255,255,255,0.09)");

  return (
    <section id="contacto" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#C5A880" }}>Contacto</span>
            <h2 className={`${cormorant.className} font-semibold mb-6`}
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#FFFFFF", lineHeight: 1.08 }}>
              Tem um projecto académico?
            </h2>
            <p className="text-base leading-[1.82] mb-10" style={{ color: "rgba(244,244,242,0.58)" }}>
              Descreva o seu projecto e respondemos em menos de 24 horas com uma análise inicial e proposta de acompanhamento personalizada.
            </p>
            <div className="space-y-5">
              {[
                { k: "Email", v: "centrodeestudovirtus@gmail.com" },
                { k: "WhatsApp", v: "+244 946 038 986" },
                { k: "Localização", v: "Luanda, Angola" },
                { k: "Disponibilidade", v: "Segunda a Sábado · 8h–20h" },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-start gap-4">
                  <div className="w-6 h-px mt-3 flex-shrink-0" style={{ backgroundColor: "#C5A880", opacity: 0.45 }} />
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "rgba(244,244,242,0.32)" }}>{k}</p>
                    <p className="text-sm font-semibold" style={{ color: "#F4F4F2" }}>{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Right: form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.10 }}
            className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.42)" }}>Nome *</label>
                <input type="text" required placeholder="Nome completo" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.42)" }}>Email *</label>
                <input type="email" required placeholder="email@exemplo.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.42)" }}>Instituição / Universidade</label>
              <input type="text" placeholder="Ex: Universidade Agostinho Neto" value={form.institution}
                onChange={(e) => setForm({ ...form, institution: e.target.value })}
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.42)" }}>Tipo de apoio *</label>
              <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer" }} onFocus={focusHandler} onBlur={blurHandler}>
                <option value="" disabled style={{ backgroundColor: "#111520" }}>Seleccionar tipo</option>
                {types.map((t) => <option key={t} value={t} style={{ backgroundColor: "#111520" }}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: "rgba(244,244,242,0.42)" }}>Descreva o projecto</label>
              <textarea rows={5} placeholder="Tema, fase actual, prazos, principais dificuldades e o que necessita de apoio..." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "none" }} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <button type="submit" className="w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.01]"
              style={{ backgroundColor: sent ? "#16a34a" : "#C5A880", color: "#0A0B12", boxShadow: `0 4px 28px ${sent ? "rgba(22,163,74,0.28)" : "rgba(197,168,128,0.25)"}` }}>
              {sent ? "✓ Enviado via WhatsApp" : "Enviar Pedido de Orientação →"}
            </button>
            <p className="text-center text-xs" style={{ color: "rgba(244,244,242,0.28)" }}>A submissão abre o WhatsApp com os dados pré-preenchidos.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
