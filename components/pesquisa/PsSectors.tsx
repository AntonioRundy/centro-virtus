"use client";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

const sectors = [
  { name: "Petróleo & Gás",       abbr: "O&G" },
  { name: "Sector Bancário",      abbr: "FIN" },
  { name: "Telecomunicações",     abbr: "TLC" },
  { name: "Agro-indústria",       abbr: "AGR" },
  { name: "Retalho & Consumo",    abbr: "RTL" },
  { name: "Saúde & Farmácia",     abbr: "HLT" },
  { name: "Educação",             abbr: "EDU" },
  { name: "Construção & Real Est",abbr: "CRE" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function PsSectors() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.26em] uppercase block mb-4" style={{ color: "#E8A048" }}>
            Sectores de Actuação
          </span>
          <h2 className={`${outfit.className} text-4xl sm:text-5xl lg:text-6xl font-black`}
            style={{ color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            Onde trabalhamos.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {sectors.map(({ name, abbr }) => (
            <motion.div
              key={abbr}
              variants={itemVariants}
              className="group rounded-xl p-6 lg:p-8 cursor-default transition-all duration-300"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{ borderColor: "rgba(232,160,72,0.25)", y: -3 }}
            >
              <span className={`${outfit.className} text-xs font-bold tracking-[0.18em] uppercase block mb-3`}
                style={{ color: "rgba(232,160,72,0.50)" }}>{abbr}</span>
              <p className="text-sm font-medium leading-snug" style={{ color: "rgba(244,244,242,0.70)" }}>{name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.30 }}
          className="text-xs mt-10 text-center"
          style={{ color: "rgba(244,244,242,0.30)" }}
        >
          Trabalhamos com organizações dos sectores público e privado. Não encontra o seu sector? Contacte-nos.
        </motion.p>
      </div>
    </section>
  );
}
