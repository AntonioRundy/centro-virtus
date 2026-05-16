"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800"] });

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
      else setCount(to);
    };
    requestAnimationFrame((t) => step(t, t));
  }, [inView, to]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { prefix: "+", value: 50,  suffix: "",  label: "Projectos de Pesquisa" },
  { prefix: "+", value: 12,  suffix: "",  label: "Sectores Analisados"  },
  { prefix: "+", value: 800, suffix: "",  label: "Entrevistas Conduzidas" },
  { prefix: "+", value: 5,   suffix: " anos", label: "De Investigação" },
];

export default function PsStats() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {stats.map(({ prefix, value, suffix, label }, i) => (
            <div key={label}
              className="py-10 px-8 text-center"
              style={{
                backgroundColor: "#111520",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
              <p className={`${outfit.className} text-3xl lg:text-4xl font-black mb-2`}
                style={{
                  background: "linear-gradient(135deg, #E8A048 0%, #C5A880 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                }}>
                <Counter to={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-xs font-medium tracking-wider uppercase" style={{ color: "rgba(244,244,242,0.40)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
