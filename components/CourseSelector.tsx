"use client";

import { useState } from "react";
import { ChevronRight, MessageCircle, CalendarCheck } from "lucide-react";
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

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="h-1 w-20 rounded-full transition-all duration-300"
                style={{ backgroundColor: step >= s ? "#16a34a" : "rgba(255,255,255,0.12)" }}
              />
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
                  className="card-lift group rounded-2xl p-6 text-center cursor-pointer"
                  style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
                  <p className="font-extrabold text-lg" style={{ color: "#ffffff" }}>{s.name}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: "#94a3b8" }}>
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
                Recomeçar
              </button>
            </div>
            {subject && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: subject.color, color: subjectTextColor(subject) }}>
                {subject.name} selecionado
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {levels.map((l) => (
                <button key={l.key} onClick={() => { setLevel(l.key); setStep(3); }}
                  className="card-lift group rounded-2xl p-8 text-center cursor-pointer"
                  style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
                  <p className="font-extrabold text-2xl text-white mb-1">{l.label}</p>
                  <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>{l.range}</p>
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
                Recomeçar
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {subject && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: subject.color, color: subjectTextColor(subject) }}>
                  {subject.name}
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
              <div className="rounded-2xl p-10" style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1 rounded-full">Online</span>
                <p className="text-4xl font-black text-white mt-4">{fmt(sp.online)}</p>
                <p className="text-sm font-semibold mt-1 text-green-400">por hora</p>
              </div>
              <div className="rounded-2xl p-10" style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
                <span className="text-xs font-bold bg-white/10 text-white px-3 py-1 rounded-full">Ao Domicílio</span>
                <p className="text-4xl font-black text-white mt-4">{fmt(sp.domiciliar)}</p>
                <p className="text-sm font-semibold mt-1 text-slate-400">por hora</p>
              </div>
            </div>

            {/* Info box */}
            <div className="rounded-2xl p-6 mb-4" style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
              <p className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>Como funciona?</p>
              <p className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>
                O encarregado monta o seu pacote conforme a necessidade do aluno. O preço é por hora de aula.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl px-5 py-3 mb-5" style={{ background: "rgba(180,130,0,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}>
              <p className="text-sm font-medium" style={{ color: "#fbbf24" }}>
                Recomendação mínima: <strong>1h30 por sessão</strong> para garantir melhor aproveitamento.
              </p>
            </div>

            <div className="rounded-2xl p-6 mb-4" style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>{sp.description}</p>
            </div>

            <button onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors hover:opacity-80"
              style={{ color: "#16a34a" }}>
              <ChevronRight size={16} className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
              {expanded ? "Ocultar detalhes" : "Ver o que está incluído"}
            </button>

            {expanded && (
              <div className="rounded-2xl p-6 mb-6 animate-fade-in" style={{ backgroundColor: "#172237", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "none" }}>
                <p className="font-semibold text-sm mb-3" style={{ color: "#ffffff" }}>O que está incluído:</p>
                <ul className="space-y-2.5">
                  {sp.features.map((f) => (
                    <li key={f} className="text-sm" style={{ color: "#e2e8f0" }}>
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
