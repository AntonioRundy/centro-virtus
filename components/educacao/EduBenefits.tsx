"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });

const benefits = [
  {
    n: "01",
    title: "Acompanhamento verdadeiramente personalizado",
    desc: "Cada aluno tem um plano de estudo adaptado ao seu ritmo, currículo escolar e objetivos específicos. Não há fórmulas genéricas.",
  },
  {
    n: "02",
    title: "Preparação estratégica para exames",
    desc: "Simulações reais, revisões estruturadas e técnicas de gestão de tempo que resultam em aprovações comprovadas.",
  },
  {
    n: "03",
    title: "Flexibilidade total de horários",
    desc: "Aulas online por videochamada ou ao domicílio. Horários adaptados à rotina do aluno, incluindo fins de semana.",
  },
  {
    n: "04",
    title: "Professores com formação superior",
    desc: "Especialistas por área e currículo — EPL, CCB, LIS, CAT — com experiência comprovada e dedicação ao sucesso do aluno.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function EduBenefits() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="label-gold block mb-4">Porquê a Virtus Educação</span>
          <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl`}
            style={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            O que nos distingue.
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {benefits.map(({ n, title, desc }) => (
            <motion.div key={n} variants={itemVariants}
              className="rounded-2xl p-10 lg:p-12"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-bold tracking-[0.22em] uppercase block mb-7"
                style={{ color: "rgba(197,168,128,0.50)" }}>
                {n}
              </span>
              <h3 className={`${playfair.className} text-xl lg:text-2xl font-bold mb-4 leading-tight`}
                style={{ color: "#FFFFFF" }}>
                {title}
              </h3>
              <p className="text-sm leading-[1.80]" style={{ color: "rgba(244,244,242,0.55)" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
