"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { asset } from "@/lib/basePath";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  photo?: string;
  initials?: string;
  color?: string;
}

const team: TeamMember[] = [
  {
    name: "António Rundy",
    role: "Fundador & Director Pedagógico",
    specialty: "Matemática · Ensino Superior",
    photo: "/antonio.png",
  },
  {
    name: "Maria Santos",
    role: "Professora Sénior",
    specialty: "Físico-Química · Secundário",
    initials: "M.S.",
    color: "#C5A880",
  },
  {
    name: "João Lopes",
    role: "Especialista EPL & LIS",
    specialty: "Inglês · Economia · IB",
    initials: "J.L.",
    color: "#E8A048",
  },
  {
    name: "Carla Dias",
    role: "Professora de Ciências",
    specialty: "Biologia · Química · Básico",
    initials: "C.D.",
    color: "#6d28d9",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60 } },
};

function PhotoCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-2xl overflow-hidden transition-all duration-350"
      style={{
        backgroundColor: "#111520",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
      whileHover={{ borderColor: "rgba(197,168,128,0.28)", y: -4 }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(member.photo!)}
          alt={`${member.name} — ${member.role}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ filter: "brightness(0.88) contrast(1.06) saturate(0.95)" }}
        />
        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(17,21,32,0.95) 0%, transparent 100%)" }}
        />
        {/* Premium corner accent */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-[0.16em] uppercase"
          style={{ backgroundColor: "rgba(22,163,74,0.18)", color: "#4ade80", border: "1px solid rgba(22,163,74,0.25)" }}
        >
          Fundador
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pt-5 pb-8">
        <h3 className={`${playfair.className} font-bold text-lg mb-1`} style={{ color: "#FFFFFF" }}>
          {member.name}
        </h3>
        <p className="text-xs mb-4" style={{ color: "rgba(244,244,242,0.45)" }}>{member.role}</p>
        <div className="h-px mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
        <p className="text-xs font-medium" style={{ color: "#C5A880" }}>{member.specialty}</p>
      </div>
    </motion.div>
  );
}

function InitialsCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-2xl p-8 lg:p-10 transition-all duration-300"
      style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}
      whileHover={{ borderColor: "rgba(197,168,128,0.20)", y: -3 }}
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black mb-6 text-white"
        style={{ backgroundColor: member.color }}
      >
        {member.initials}
      </div>
      <h3 className="font-bold text-base mb-1" style={{ color: "#FFFFFF" }}>{member.name}</h3>
      <p className="text-xs mb-4" style={{ color: "rgba(244,244,242,0.45)" }}>{member.role}</p>
      <div className="h-px mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
      <p className="text-xs font-medium" style={{ color: "#C5A880" }}>{member.specialty}</p>
    </motion.div>
  );
}

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
          <h2
            className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}
          >
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
          {team.map((member) =>
            member.photo
              ? <PhotoCard key={member.name} member={member} />
              : <InitialsCard key={member.name} member={member} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
