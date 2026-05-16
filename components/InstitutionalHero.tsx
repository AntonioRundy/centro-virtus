"use client";
import { motion } from "framer-motion";

function DataChartSVG({ opacity = 0.14 }: { opacity?: number }) {
  const points = [28, 52, 38, 68, 55, 82, 70, 90, 76, 96];
  const w = 260, h = 90;
  const coords = points.map((y, i) => `${(i / (points.length - 1)) * w},${h - (y / 100) * h}`);
  const polyPts = coords.join(" ");
  const areaPts = `0,${h} ${polyPts} ${w},${h}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={{ opacity }}>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C5A880" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPts} fill="url(#cg)" />
      <polyline points={polyPts} stroke="rgba(197,168,128,0.60)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {coords.map((c, i) => {
        const [cx, cy] = c.split(",");
        return <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(197,168,128,0.70)" />;
      })}
    </svg>
  );
}

function DataLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[12, 30, 50, 68, 85].map((top) => (
        <div key={top} className="absolute w-full h-px" style={{
          top: `${top}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.022) 25%, rgba(255,255,255,0.022) 75%, transparent 100%)"
        }} />
      ))}
    </div>
  );
}

export default function InstitutionalHero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6"
      style={{ backgroundColor: "#070D1B" }}
    >
      {/* Fine dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }} />

      {/* Horizontal data lines */}
      <DataLines />

      {/* Amber glow — bottom right */}
      <div className="absolute -bottom-24 -right-24 w-[640px] h-[520px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: "rgba(197,168,128,0.08)" }} />

      {/* Gold glow — top left */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: "rgba(212,168,83,0.06)" }} />

      {/* Green glow — centre top */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[280px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.04)" }} />

      {/* SVG chart decorations — corners */}
      <div className="absolute right-10 bottom-28 hidden lg:block pointer-events-none">
        <DataChartSVG opacity={0.13} />
      </div>
      <div className="absolute left-10 top-36 hidden lg:block pointer-events-none" style={{ transform: "scaleX(-1) rotate(-8deg)" }}>
        <DataChartSVG opacity={0.08} />
      </div>

      {/* Vertical accent line — far right */}
      <div className="absolute right-12 top-0 bottom-0 w-px hidden xl:block pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(197,168,128,0.10) 40%, rgba(197,168,128,0.10) 60%, transparent 100%)" }} />

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70 }}
          className="inline-flex items-center gap-4 mb-14"
        >
          <div className="w-12 h-px" style={{ backgroundColor: "#C5A880", opacity: 0.55 }} />
          <span className="text-xs font-semibold tracking-[0.32em] uppercase" style={{ color: "#C5A880" }}>
            Virtus Group · Luanda, Angola
          </span>
          <div className="w-12 h-px" style={{ backgroundColor: "#C5A880", opacity: 0.55 }} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.90, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-black tracking-tight leading-[0.92] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", color: "#F4F4F2", letterSpacing: "-0.025em" }}
        >
          Centro de<br />Estudos Virtus
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.80, delay: 0.24 }}
          className="font-light mb-5 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)", color: "rgba(244,244,242,0.58)", letterSpacing: "0.01em", lineHeight: 1.58 }}
        >
          Conhecimento, Pesquisa e Desenvolvimento Aplicado.
        </motion.p>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.38 }}
          className="text-sm sm:text-base mb-20 max-w-md mx-auto"
          style={{ color: "rgba(244,244,242,0.28)", lineHeight: 1.70 }}
        >
          Três divisões especializadas. Uma abordagem multidisciplinar completa.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.42 }}
          transition={{ delay: 0.72, duration: 0.80 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold tracking-[0.26em] uppercase" style={{ color: "#C5A880" }}>
            Descobrir
          </span>
          <motion.div
            animate={{ height: [30, 44, 30] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            className="w-px"
            style={{ backgroundColor: "#C5A880" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
