"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, MessageCircle, RotateCcw } from "lucide-react";
import { pricing, subjects, PricingLevel } from "@/data/pricing";

const levels: { key: PricingLevel; label: string; range: string }[] = [
  { key: "A", label: "Nível A", range: "1º–6º Ano" },
  { key: "B", label: "Nível B", range: "7º–9º Ano" },
  { key: "C", label: "Nível C", range: "10º–12º Ano" },
  { key: "D", label: "Nível D", range: "Universidade" },
];

const WA_URL = "https://wa.me/244946038986";

function formatKz(amount: number) {
  return amount.toLocaleString("pt-AO") + " Kz";
}

export default function CourseSelector() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [subject, setSubject] = useState<(typeof subjects)[0] | null>(null);
  const [level, setLevel] = useState<PricingLevel | null>(null);
  const [expanded, setExpanded] = useState(false);

  function reset() {
    setStep(1);
    setSubject(null);
    setLevel(null);
    setExpanded(false);
  }

  const selectedPricing = level ? pricing[level] : null;

  return (
    <section
      id="precos"
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #070e1f 0%, #0a1628 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Personalize o seu plano
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Escolha o que pretende <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Em 3 passos simples, encontre o plano ideal para o seu educando.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step > s
                    ? "bg-green-500 text-white"
                    : step === s
                    ? "bg-green-500/20 border-2 border-green-500 text-green-400"
                    : "bg-white/10 text-slate-500"
                }`}
              >
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-0.5 ${step > s ? "bg-green-500" : "bg-white/15"} transition-all`} />
              )}
            </div>
          ))}
        </div>

        {/* ── STEP 1: Subject ── */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-white text-xl font-bold text-center mb-8">
              Passo 1 — Qual é a disciplina?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSubject(s); setStep(2); }}
                  className="group rounded-2xl bg-[#111d3c] border border-white/10 hover:border-green-500/50 p-6 text-center transition-all duration-200 card-lift"
                >
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <p className="text-white font-semibold text-sm">{s.name}</p>
                  <p className="text-slate-500 text-xs mt-1">{s.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Level ── */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-xl font-bold">
                Passo 2 — Qual é o nível?
              </h3>
              <button onClick={reset} className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>
            {subject && (
              <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                {subject.icon} {subject.name} selecionado
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.map((l) => (
                <button
                  key={l.key}
                  onClick={() => { setLevel(l.key); setStep(3); }}
                  className="group rounded-2xl bg-[#111d3c] border border-white/10 hover:border-yellow-500/50 p-6 text-center transition-all duration-200 card-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-black text-xl mx-auto mb-3">
                    {l.key}
                  </div>
                  <p className="text-white font-bold text-sm">{l.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{l.range}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 3: Results ── */}
        {step === 3 && selectedPricing && (
          <div className="animate-fade-up max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-xl font-bold">
                Passo 3 — O seu plano personalizado
              </h3>
              <button onClick={reset} className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {subject && (
                <span className="bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {subject.icon} {subject.name}
                </span>
              )}
              {level && (
                <span className="bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedPricing.label} · {selectedPricing.range}
                </span>
              )}
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Online */}
              <div className="rounded-2xl bg-[#111d3c] border border-green-500/30 p-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Online</span>
                </div>
                <p className="text-3xl font-black text-white mt-3">{formatKz(selectedPricing.online)}</p>
                <p className="text-slate-500 text-xs mt-1">por mês / por disciplina</p>
              </div>

              {/* Domiciliar */}
              <div className="rounded-2xl bg-[#111d3c] border border-yellow-500/30 p-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">Ao Domicílio</span>
                </div>
                <p className="text-3xl font-black text-white mt-3">{formatKz(selectedPricing.domiciliar)}</p>
                <p className="text-slate-500 text-xs mt-1">por mês / por disciplina</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#111d3c] border border-white/10 rounded-2xl p-6 mb-4">
              <p className="text-slate-300 text-sm leading-relaxed">{selectedPricing.description}</p>
            </div>

            {/* Expandable details */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-4 hover:text-green-300 transition-colors"
            >
              <ChevronRight
                size={16}
                className={`transition-transform ${expanded ? "rotate-90" : ""}`}
              />
              {expanded ? "Ocultar detalhes" : "Ver mais detalhes"}
            </button>

            {expanded && (
              <div className="bg-[#111d3c] border border-white/10 rounded-2xl p-6 mb-6 animate-fade-in">
                <p className="text-white font-semibold text-sm mb-3">O que está incluído:</p>
                <ul className="space-y-2">
                  {selectedPricing.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
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
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-full text-base transition-all shadow-xl shadow-green-500/25 hover:scale-[1.02]"
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
