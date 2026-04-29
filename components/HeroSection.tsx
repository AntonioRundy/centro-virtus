import { ArrowRight, MessageCircle, CalendarCheck } from "lucide-react";
import { asset } from "@/lib/basePath";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudo Galileu.")}`;

const socialProof = [
  { value: "+200",    label: "alunos"       },
  { value: "+5 anos", label: "experiência"  },
  { value: "4",       label: "currículos"   },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8fafc 0%, #eef2f7 60%, #e8f5e9 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text (55%) ── */}
          <div className="order-2 lg:order-1">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold px-4 py-2 rounded-full mb-7 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Aula experimental disponível — sem compromisso
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.08] mb-6 animate-fade-up delay-100"
              style={{ color: "#0f172a" }}
            >
              O futuro académico do{" "}
              <br className="hidden sm:block" />
              seu filho{" "}
              <span className="gradient-text">começa aqui.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up delay-200"
              style={{ color: "#334155" }}
            >
              Acompanhamento escolar personalizado com professores qualificados
              e resultados reais — online ou ao domicílio.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-7 animate-fade-up delay-300">
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-green-200 hover:scale-[1.03]"
              >
                <CalendarCheck size={18} />
                Agendar Aula Gratuita
              </a>
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-green-500 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-green-50"
                style={{ color: "#334155" }}
              >
                <MessageCircle size={18} />
                Fale Connosco
              </a>
            </div>

            {/* Micro-trust */}
            <p className="text-sm mb-8 animate-fade-up delay-300" style={{ color: "#64748b" }}>
              ✓ Primeira aula gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida
            </p>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-0 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fade-up delay-400">
              {socialProof.map(({ value, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && <div className="w-px h-12 bg-slate-100" />}
                  <div className="text-center px-6 py-4">
                    <p className="text-xl font-extrabold" style={{ color: "#0f172a" }}>{value}</p>
                    <p className="text-xs font-medium" style={{ color: "#64748b" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Image (45%) ── */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">

            {/* Image card */}
            <div
              className="rounded-3xl p-4 bg-white"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/menina.png")}
                alt="Aluna a estudar — Centro de Estudo Galileu"
                className="w-full rounded-2xl object-cover object-top"
                style={{
                  height: "420px",
                  background: "linear-gradient(135deg, #e8f5e9, #dbeafe)",
                }}
              />
            </div>

            {/* Accent cards below image */}
            <div className="flex gap-3 mt-4">
              <div
                className="flex-1 rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: "#16a34a" }}
              >
                <p className="text-white font-extrabold text-xl">+200</p>
                <p className="text-green-100 text-xs font-medium">Alunos</p>
              </div>
              <div
                className="flex-1 rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: "#0f172a" }}
              >
                <p className="text-white font-extrabold text-xl">Online</p>
                <p className="text-slate-400 text-xs font-medium">& Domicílio</p>
              </div>
              <div
                className="flex-1 rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: "#2563eb" }}
              >
                <p className="text-white font-extrabold text-xl">+5</p>
                <p className="text-blue-100 text-xs font-medium">Anos exp.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
