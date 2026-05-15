"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, MessageCircle, RotateCcw, Clock, Info, CalendarCheck } from "lucide-react";
import { pricing, subjects, Subject, PricingLevel } from "@/data/pricing";

const levels: { key: PricingLevel; label: string; range: string }[] = [
  { key: "A", label: "Nível A", range: "1º–6º Ano"   },
  { key: "B", label: "Nível B", range: "7º–9º Ano"   },
  { key: "C", label: "Nível C", range: "10º–12º Ano" },
  { key: "D", label: "Nível D", range: "Universidade" },
];

const WA_URL = "https://wa.me/244946038986";

function fmt(n: number) { return n.toLocaleString("pt-AO") + " Kz"; }

function subjectTextColor(s: Subject): string {
  return s.textColor === "dark" ? "#0f172a" : "#ffffff";
}
function subjectSecondColor(s: Subject): string {
  return s.textColor === "dark" ? "rgba(0,0,0,0.60)" : "rgba(255,255,255,0.75)";
}

export default function CourseSelector() {
  const [step, setStep]         = useState<1 | 2 | 3>(1);
  const [subject, setSubject]   = useState<Subject | null>(null);
  const [level, setLevel]       = useState<PricingLevel | null>(null);
  const [expanded, setExpanded] = useState(false);

  function reset() { setStep(1); setSubject(null); setLevel(null); setExpanded(false); }

  const sp = level ? pricing[level] : null;

  return (
    <section id="precos" className="section-gray py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            Preços transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3" style={{ color: "#ffffff" }}>
            Escolha a disciplina <span className="gradient-text">e o nível</span>
          </h2>
          <p className="text-base mb-1" style={{ color: "#94a3b8" }}>
            Valores a partir de <strong style={{ color: "#ffffff" }}>6.000 Kz/hora</strong>
          </p>
          <p className="text-sm" style={{ color: "#94a3b8" }}>
            O encarregado monta o seu pacote conforme a necessidade do aluno.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step === s ? "border-2 border-green-500" : step < s ? "text-slate-500" : ""
                }`}
                style={step < s ? { backgroundColor: "rgba(255,255,255,0.08)" } : {}}
                style={step > s ? { backgroundColor: "#16a34a", color: "#fff" } : step === s ? { color: "#16a34a" } : {}}
              >
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div className="w-16 h-0.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: step > s ? "#16a34a" : "rgba(255,255,255,0.10)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Subject */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
              Passo 1 — Qual é a disciplina?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => { setSubject(s); setStep(2); }}
                  className="card-lift group rounded-2xl p-5 text-center cursor-pointer"
                  style={{ backgroundColor: s.color, boxShadow: `0 10px 28px ${s.color}44` }}>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <p className="font-semibold text-sm" style={{ color: subjectTextColor(s) }}>{s.name}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: subjectSecondColor(s) }}>
                    {s.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Level */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold" style={{ color: "#ffffff" }}>Passo 2 — Qual é o nível?</h3>
              <button onClick={reset} className="text-slate-400 hover:text-slate-300 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>
            {subject && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: subject.color, color: subjectTextColor(subject) }}>
                {subject.icon} {subject.name} selecionado
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {levels.map((l) => (
                <button key={l.key} onClick={() => { setLevel(l.key); setStep(3); }}
                  className="card-lift group rounded-2xl p-6 text-center cursor-pointer"
                  style={{ backgroundColor: "#1e3a8a", boxShadow: "0 10px 28px rgba(30,58,138,0.30)" }}>
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white font-black text-xl mx-auto mb-3">
                    {l.key}
                  </div>
                  <p className="font-bold text-sm text-white">{l.label}</p>
                  <p className="text-xs mt-1" style={{ color: "#bfdbfe" }}>{l.range}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && sp && (
          <div className="animate-fade-up max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#ffffff" }}>O seu plano personalizado</h3>
              <button onClick={reset} className="text-slate-400 hover:text-slate-300 text-xs flex items-center gap-1 transition-colors">
                <RotateCcw size={12} /> Recomeçar
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {subject && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: subject.color, color: subjectTextColor(subject) }}>
                  {subject.icon} {subject.name}
                </span>
              )}
              {level && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#e2e8f0" }}>
                  {sp.label} · {sp.range}
                </span>
              )}
            </div>

            {/* Price cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl p-7" style={{ backgroundColor: "#16a34a" }}>
                <span className="text-xs font-bold bg-white/25 text-white px-3 py-1 rounded-full">Online</span>
                <p className="text-4xl font-black text-white mt-4">{fmt(sp.online)}</p>
                <p className="text-sm font-semibold mt-1 text-green-100">por hora</p>
              </div>
              <div className="rounded-2xl p-7" style={{ backgroundColor: "#0f172a" }}>
                <span className="text-xs font-bold bg-white/15 text-white px-3 py-1 rounded-full">Ao Domicílio</span>
                <p className="text-4xl font-black text-white mt-4">{fmt(sp.domiciliar)}</p>
                <p className="text-sm font-semibold mt-1 text-slate-400">por hora</p>
              </div>
            </div>

            {/* Info boxes */}
            <div className="card-elevated rounded-2xl p-5 mb-4 flex gap-3">
              <Info size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>Como funciona?</p>
                <p className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>
                  O encarregado monta o seu pacote conforme a necessidade do aluno. O preço é por hora de aula.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl px-5 py-3 mb-5" style={{ background: "rgba(180,130,0,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}>
              <Clock size={16} className="flex-shrink-0" style={{ color: "#fbbf24" }} />
              <p className="text-sm font-medium" style={{ color: "#fbbf24" }}>
                Recomendação mínima: <strong>1h30 por sessão</strong> para garantir melhor aproveitamento.
              </p>
            </div>

            <div className="card-elevated rounded-2xl p-6 mb-4">
              <p className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>{sp.description}</p>
            </div>

            <button onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors hover:opacity-80"
              style={{ color: "#16a34a" }}>
              <ChevronRight size={16} className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
              {expanded ? "Ocultar detalhes" : "Ver o que está incluído"}
            </button>

            {expanded && (
              <div className="card-elevated rounded-2xl p-6 mb-6 animate-fade-in">
                <p className="font-semibold text-sm mb-3" style={{ color: "#ffffff" }}>O que está incluído:</p>
                <ul className="space-y-2.5">
                  {sp.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#e2e8f0" }}>
                      <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:scale-[1.02]" style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.35)" }}>
              <CalendarCheck size={18} />
              Agendar Aula Gratuita
              <ChevronRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
