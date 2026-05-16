"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["700"] });

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = (ts: number, t0: number) => {
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame((t) => step(t, t0));
      else setCount(to);
    };
    requestAnimationFrame((t) => step(t, t));
  }, [inView, to]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { prefix: "+", value: 120, suffix: "",    label: "Projectos Orientados" },
  { prefix: "+", value: 15,  suffix: "",    label: "Áreas Científicas" },
  { prefix: "",  value: 98,  suffix: "%",   label: "Taxa de Satisfação" },
  { prefix: "+", value: 5,   suffix: " anos", label: "De Experiência" },
];

export default function CsStats() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {stats.map(({ prefix, value, suffix, label }, i) => (
            <div key={label} className="py-10 px-8 text-center"
              style={{ backgroundColor: "#111520", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <p className={`${cormorant.className} font-bold mb-2`}
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", background: "linear-gradient(135deg, #C5A880, #D4A853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <Counter to={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-xs font-medium tracking-wider uppercase" style={{ color: "rgba(244,244,242,0.38)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
