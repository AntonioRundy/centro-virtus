"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
      else setCount(to);
    };
    requestAnimationFrame((t) => step(t, t));
    return () => { start = 1; void start; };
  }, [inView, to]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { prefix: "+", value: 200, suffix: "",  label: "Alunos acompanhados" },
  { prefix: "+", value: 5,   suffix: "",  label: "Anos de experiência" },
  { prefix: "",  value: 4,   suffix: "",  label: "Currículos suportados" },
  { prefix: "",  value: 100, suffix: "%", label: "Foco no aluno" },
];

export default function EduStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {stats.map(({ prefix, value, suffix, label }, i) => (
            <div key={label} className="py-10 px-8 text-center"
              style={{
                backgroundColor: "#111520",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
              <p className={`${playfair.className} text-4xl lg:text-5xl font-bold mb-2`}
                style={{
                  background: "linear-gradient(135deg, #C5A880 0%, #E8A048 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                }}>
                <Counter to={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-xs font-medium tracking-wider uppercase" style={{ color: "rgba(244,244,242,0.42)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
