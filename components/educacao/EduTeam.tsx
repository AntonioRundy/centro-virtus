"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const team = [
  { initials: "A.R.", name: "António Rundy", role: "Fundador & Director Pedagógico", specialty: "Matemática · Ensino Superior", color: "#16a34a" },
  { initials: "M.S.", name: "Maria Santos",  role: "Professora Sénior",            specialty: "Físico-Química · Secundário",  color: "#C5A880" },
  { initials: "J.L.", name: "João Lopes",    role: "Especialista EPL & LIS",       specialty: "Inglês · Economia · IB",       color: "#E8A048" },
  { initials: "C.D.", name: "Carla Dias",    role: "Professora de Ciências",       specialty: "Biologia · Química · Básico",  color: "#6d28d9" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60 } },
};

export default function EduTeam() {
  return (
    <section id="equipa" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="label-gold block mb-4">A Nossa Equipa</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            Especialistas dedicados.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {team.map(({ initials, name, role, specialty, color }) => (
            <motion.div key={name} variants={itemVariants}
              className="rounded-2xl p-8 lg:p-10"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}>
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black mb-6 text-white"
                style={{ backgroundColor: color }}>
                {initials}
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: "#FFFFFF" }}>{name}</h3>
              <p className="text-xs mb-4" style={{ color: "rgba(244,244,242,0.45)" }}>{role}</p>
              <div className="h-px mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
              <p className="text-xs font-medium" style={{ color: "#C5A880" }}>{specialty}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
