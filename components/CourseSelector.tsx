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

        <div className="text-center mb-14">
          <span className="inline-block text-yellow-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Personalize o seu plano
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Escolha o que pretende <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Em 3 passos simples, encontre o plano ideal para o seu educando.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s
                  ? "bg-yellow-400 text-gray-900"
                  : step === s
                  ? "bg-yellow-400/20 border-2 border-yellow-400 text-yellow-700"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-14 h-0.5 rounded-full ${step > s ? "bg-yellow-400" : "bg-gray-200"} transition-all`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-gray-900 text-xl font-bold text-center mb-8">Passo 1 — Qual é a disciplina?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSubject(s); setStep(2); }}
                  className="card-lift group rounded-2xl bg-white border border-gray-100 hover:border-yellow-300 shadow-sm hover:shadow-md p-6 text-center transition-all"
                >
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <p className="text-gray-900 font-semibold text-sm">{s.name}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-tight">{s.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-gray-900 text-xl font-bold">Passo 2 — Qual é o nível?</h3>
              <button onClick={reset} className="text-gray-400 hover:text-gray-600 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>
            {subject && (
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                {subject.icon} {subject.name} selecionado
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {levels.map((l) => (
                <button
                  key={l.key}
                  onClick={() => { setLevel(l.key); setStep(3); }}
                  className="card-lift group rounded-2xl bg-white border border-gray-100 hover:border-yellow-300 shadow-sm hover:shadow-md p-6 text-center transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-black text-xl mx-auto mb-3">
                    {l.key}
                  </div>
                  <p className="text-gray-900 font-bold text-sm">{l.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{l.range}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && selectedPricing && (
          <div className="animate-fade-up max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-gray-900 text-xl font-bold">O seu plano personalizado</h3>
              <button onClick={reset} className="text-gray-400 hover:text-gray-600 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {subject && (
                <span className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {subject.icon} {subject.name}
                </span>
              )}
              {level && (
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedPricing.label} · {selectedPricing.range}
                </span>
              )}
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl bg-yellow-400 p-7">
                <span className="text-xs font-bold bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full">Online</span>
                <p className="text-4xl font-black text-gray-900 mt-4">{formatKz(selectedPricing.online)}</p>
                <p className="text-yellow-800 text-xs mt-1">por mês / por disciplina</p>
              </div>
              <div className="rounded-2xl bg-gray-900 p-7">
                <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full">Ao Domicílio</span>
                <p className="text-4xl font-black text-white mt-4">{formatKz(selectedPricing.domiciliar)}</p>
                <p className="text-gray-400 text-xs mt-1">por mês / por disciplina</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-4 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">{selectedPricing.description}</p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-yellow-600 text-sm font-semibold mb-4 hover:text-yellow-700 transition-colors"
            >
              <ChevronRight size={16} className={`transition-transform ${expanded ? "rotate-90" : ""}`} />
              {expanded ? "Ocultar detalhes" : "Ver mais detalhes"}
            </button>

            {expanded && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm animate-fade-in">
                <p className="text-gray-900 font-semibold text-sm mb-3">O que está incluído:</p>
                <ul className="space-y-2">
                  {selectedPricing.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-full text-base transition-all shadow-lg shadow-green-200 hover:scale-[1.02]"
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
