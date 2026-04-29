import { CalendarCheck, MessageCircle } from "lucide-react";
import { asset } from "@/lib/basePath";

const WA_URL  = "https://wa.me/244946038986";
const WA_FULL = `${WA_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar uma aula gratuita no Centro de Estudo Galileu.")}`;

const proof = [
  { value: "+200",    label: "alunos"      },
  { value: "+5 anos", label: "experiência" },
  { value: "4",       label: "currículos"  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0c1f4a 0%, #1e3a8a 45%, #dbeafe 100%)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-24 left-8 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.12)" }} />
      <div className="absolute bottom-16 right-12 w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(212,175,55,0.12)" }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-up"
              style={{ backgroundColor: "rgba(22,163,74,0.18)", border: "1px solid rgba(22,163,74,0.35)", color: "#4ade80" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Aula experimental disponível — sem compromisso
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold leading-[1.08] text-white mb-6 animate-fade-up delay-100">
              O futuro académico do{" "}
              <br className="hidden sm:block" />
              seu filho{" "}
              <span className="gradient-text">começa aqui.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up delay-200"
              style={{ color: "#bfdbfe" }}>
              Acompanhamento personalizado com professores experientes e resultados comprovados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up delay-300">
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-green-900/30 hover:scale-[1.03]"
              >
                <CalendarCheck size={18} />
                Agendar Aula Gratuita
              </a>
              <a
                href={WA_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/15"
                style={{ border: "2px solid rgba(255,255,255,0.30)", color: "#ffffff" }}
              >
                <MessageCircle size={18} />
                Fale Connosco
              </a>
            </div>

            {/* Micro-trust */}
            <p className="text-sm mb-8 animate-fade-up delay-300" style={{ color: "#93c5fd" }}>
              ✓ Primeira aula gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida
            </p>

            {/* Social proof bar */}
            <div
              className="inline-flex items-center rounded-2xl overflow-hidden animate-fade-up delay-400"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {proof.map(({ value, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && <div className="w-px h-10" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />}
                  <div className="text-center px-6 py-3">
                    <p className="text-xl font-extrabold text-white">{value}</p>
                    <p className="text-xs" style={{ color: "#93c5fd" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Image ── */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">

            {/* Card */}
            <div className="rounded-3xl p-3 bg-white" style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/menina.png")}
                alt="Aluna a estudar — Centro de Estudo Galileu"
                className="w-full rounded-2xl object-cover object-top"
                style={{ height: "440px", background: "linear-gradient(135deg, #dbeafe, #dcfce7)" }}
              />
            </div>

            {/* Accent strip */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.20)" }}>
                <p className="text-white font-extrabold text-xl">+200</p>
                <p className="text-xs" style={{ color: "#93c5fd" }}>Alunos</p>
              </div>
              <div className="flex-1 rounded-2xl px-4 py-3 text-center" style={{ backgroundColor: "#16a34a" }}>
                <p className="text-white font-extrabold text-xl">Online</p>
                <p className="text-green-100 text-xs">& Domicílio</p>
              </div>
              <div className="flex-1 rounded-2xl px-4 py-3 text-center" style={{ backgroundColor: "#d4af37" }}>
                <p className="font-extrabold text-xl" style={{ color: "#020617" }}>+5</p>
                <p className="text-xs" style={{ color: "#374151" }}>Anos</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
