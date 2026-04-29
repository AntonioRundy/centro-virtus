"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, MessageCircle, RotateCcw, Clock, Info } from "lucide-react";
import { pricing, subjects, PricingLevel } from "@/data/pricing";

const levels: { key: PricingLevel; label: string; range: string }[] = [
  { key: "A", label: "Nível A", range: "1º–6º Ano"    },
  { key: "B", label: "Nível B", range: "7º–9º Ano"    },
  { key: "C", label: "Nível C", range: "10º–12º Ano"  },
  { key: "D", label: "Nível D", range: "Universidade"  },
];

const WA_URL = "https://wa.me/244946038986";

function formatKz(n: number) {
  return n.toLocaleString("pt-AO") + " Kz";
}

export default function CourseSelector() {
  const [step, setStep]         = useState<1 | 2 | 3>(1);
  const [subject, setSubject]   = useState<(typeof subjects)[0] | null>(null);
  const [level, setLevel]       = useState<PricingLevel | null>(null);
  const [expanded, setExpanded] = useState(false);

  function reset() { setStep(1); setSubject(null); setLevel(null); setExpanded(false); }

  const selectedPricing = level ? pricing[level] : null;

  return (
    <section id="precos" className="section-gray py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f4b400" }}>
            Personalize o seu plano
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#0f172a" }}>
            Escolha o que pretende <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Em 3 passos simples, encontre o plano ideal para o seu educando.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                step > s
                  ? "text-[#0f172a]"
                  : step === s
                  ? "border-2 border-[#f4b400] text-[#f4b400]"
                  : "bg-slate-100 text-slate-400"
              }`}
                style={step > s ? { backgroundColor: "#f4b400" } : {}}
              >
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-0.5 rounded-full transition-all duration-300 ${step > s ? "bg-[#f4b400]" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* ── STEP 1: Subject ── */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold text-center mb-8" style={{ color: "#0f172a" }}>
              Passo 1 — Qual é a disciplina?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSubject(s); setStep(2); }}
                  className="card-elevated card-lift group rounded-2xl p-6 text-center hover:border-[#f4b400] cursor-pointer"
                >
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <p className="font-semibold text-sm" style={{ color: "#0f172a" }}>{s.name}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: "#64748b" }}>{s.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Level ── */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold" style={{ color: "#0f172a" }}>Passo 2 — Qual é o nível?</h3>
              <button onClick={reset} className="text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>
            {subject && (
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                {subject.icon} {subject.name} selecionado
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {levels.map((l) => (
                <button
                  key={l.key}
                  onClick={() => { setLevel(l.key); setStep(3); }}
                  className="card-elevated card-lift group rounded-2xl p-6 text-center hover:border-[#f4b400] cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-black text-xl mx-auto mb-3">
                    {l.key}
                  </div>
                  <p className="font-bold text-sm" style={{ color: "#0f172a" }}>{l.label}</p>
                  <p className="text-xs mt-1" style={{ color: "#64748b" }}>{l.range}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 3: Results ── */}
        {step === 3 && selectedPricing && (
          <div className="animate-fade-up max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#0f172a" }}>O seu plano personalizado</h3>
              <button onClick={reset} className="text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>

            {/* Selected tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {subject && (
                <span className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {subject.icon} {subject.name}
                </span>
              )}
              {level && (
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedPricing.label} · {selectedPricing.range}
                </span>
              )}
            </div>

            {/* ── Pricing cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Online */}
              <div className="rounded-2xl p-7" style={{ backgroundColor: "#f4b400" }}>
                <span className="text-xs font-bold bg-white/30 text-yellow-900 px-3 py-1 rounded-full">Online</span>
                <p className="text-4xl font-black mt-4" style={{ color: "#0f172a" }}>
                  {formatKz(selectedPricing.online)}
                </p>
                <p className="text-sm font-semibold mt-1 text-yellow-900">Kz / hora</p>
              </div>

              {/* Domiciliar */}
              <div className="rounded-2xl p-7" style={{ backgroundColor: "#0f172a" }}>
                <span className="text-xs font-bold bg-white/15 text-white px-3 py-1 rounded-full">Ao Domicílio</span>
                <p className="text-4xl font-black text-white mt-4">
                  {formatKz(selectedPricing.domiciliar)}
                </p>
                <p className="text-sm font-semibold mt-1 text-slate-400">Kz / hora</p>
              </div>
            </div>

            {/* ── Pricing explanation ── */}
            <div className="card-elevated rounded-2xl p-5 mb-4 flex gap-3">
              <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#0f172a" }}>Como funciona?</p>
                <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                  O encarregado pode montar o plano de acordo com as horas desejadas.
                  O preço indicado é por hora de aula.
                </p>
              </div>
            </div>

            {/* ── Minimum session note ── */}
            <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-5">
              <Clock size={16} className="text-amber-600 flex-shrink-0" />
              <p className="text-sm font-medium text-amber-800">
                Sessões mínimas: <span className="font-bold">1h30 por dia</span>
              </p>
            </div>

            {/* Description */}
            <div className="card-elevated rounded-2xl p-6 mb-4">
              <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                {selectedPricing.description}
              </p>
            </div>

            {/* Expandable details */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors"
              style={{ color: "#f4b400" }}
            >
              <ChevronRight
                size={16}
                className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
              />
              {expanded ? "Ocultar detalhes" : "Ver o que está incluído"}
            </button>

            {expanded && (
              <div className="card-elevated rounded-2xl p-6 mb-6 animate-fade-in">
                <p className="font-semibold text-sm mb-3" style={{ color: "#0f172a" }}>O que está incluído:</p>
                <ul className="space-y-2.5">
                  {selectedPricing.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                      <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-green-200 hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Receber detalhes no WhatsApp
              <ChevronRight size={16} />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
