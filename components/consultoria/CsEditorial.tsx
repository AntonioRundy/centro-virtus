"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"] });

function DocumentMockup() {
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 24px 60px rgba(0,0,0,0.50)" }}>
      {/* Doc header */}
      <div className="px-8 py-5 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(197,168,128,0.40)" }} />
          <span className="text-xs font-semibold tracking-wide" style={{ color: "rgba(244,244,242,0.30)" }}>Dissertação_Final_v3.docx</span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded"
          style={{ backgroundColor: "rgba(22,163,74,0.12)", color: "#4ade80", fontSize: "10px" }}>✓ Revisto</span>
      </div>
      {/* Doc body lines */}
      <div className="p-8 space-y-3">
        <div className="h-px rounded" style={{ backgroundColor: "rgba(197,168,128,0.30)", width: "60%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)", width: "100%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)", width: "85%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)", width: "92%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.06)", width: "70%" }} />
        <div className="mt-6 h-px rounded" style={{ backgroundColor: "rgba(197,168,128,0.20)", width: "45%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.07)", width: "100%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.07)", width: "88%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.07)", width: "96%" }} />
        {/* Annotation bubble */}
        <div className="ml-4 mt-4 rounded-lg p-3 text-xs"
          style={{ backgroundColor: "rgba(197,168,128,0.08)", border: "1px solid rgba(197,168,128,0.18)", color: "#C5A880" }}>
          ✏ Sugestão metodológica: considerar análise factorial exploratória.
        </div>
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.06)", width: "80%" }} />
        <div className="h-px rounded" style={{ backgroundColor: "rgba(255,255,255,0.06)", width: "65%" }} />
      </div>
      {/* Footer */}
      <div className="px-8 py-4 flex justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-xs" style={{ color: "rgba(244,244,242,0.22)" }}>Virtus Consultoria · Rev. 3</span>
        <span className="text-xs" style={{ color: "rgba(244,244,242,0.22)" }}>Pág. 47 / 128</span>
      </div>
    </div>
  );
}

export default function CsEditorial() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0A0B12" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: document mockup */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.78 }}>
            <DocumentMockup />
          </motion.div>
          {/* Right: text */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75, delay: 0.12 }}>
            <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-5" style={{ color: "#C5A880" }}>Rigor Científico</span>
            <h2 className={`${cormorant.className} font-semibold mb-6`}
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "#FFFFFF", lineHeight: 1.08 }}>
              <em style={{ fontStyle: "italic" }}>Cada trabalho merece</em><br />orientação de qualidade.
            </h2>
            <p className="text-base leading-[1.82] mb-6" style={{ color: "rgba(244,244,242,0.60)" }}>
              Não orientamos apenas a estrutura do trabalho. Aprofundamos a compreensão metodológica, desenvolvemos o pensamento científico e garantimos que o investigador compreende cada decisão metodológica tomada.
            </p>
            <p className="text-base leading-[1.82]" style={{ color: "rgba(244,244,242,0.45)" }}>
              A nossa abordagem privilegia a autonomia intelectual do investigador — tornamos o processo formativo, não apenas instrumental.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
