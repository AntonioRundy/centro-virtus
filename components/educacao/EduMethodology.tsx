"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { asset } from "@/lib/basePath";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });

const sections = [
  {
    tag: "Metodologia",
    title: "Ensino centrado no aluno, sempre.",
    desc: "Cada sessão começa com um diagnóstico das dificuldades reais. O professor adapta o ritmo, o estilo e os materiais às necessidades específicas de cada aluno — sem seguir fórmulas genéricas.\n\nO objectivo não é apenas passar um exame. É construir compreensão real e duradoura.",
    image: "/menina.png",
    reverse: false,
  },
  {
    tag: "Equipa",
    title: "Professores dedicados, resultados comprovados.",
    desc: "A nossa equipa é formada por especialistas com formação académica superior, familiarizados com todos os currículos presentes em Luanda — EPL, CCB, LIS e CAT.\n\nComunicamos regularmente com os encarregados de educação para garantir evolução contínua e transparente.",
    image: "/equipe.png",
    reverse: true,
  },
];

export default function EduMethodology() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto space-y-28 lg:space-y-36">
        {sections.map(({ tag, title, desc, image, reverse }) => (
          <div
            key={tag}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.80 }}
              className="lg:[direction:ltr]"
            >
              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(image)}
                  alt={title}
                  className="w-full object-cover object-top"
                  style={{ height: "440px", filter: "brightness(0.80) contrast(1.08)" }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: 0.10 }}
              className="lg:[direction:ltr]"
            >
              <span className="label-gold block mb-5">{tag}</span>
              <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.06] mb-7`}
                style={{ color: "#FFFFFF" }}>
                {title}
              </h2>
              {desc.split("\n\n").map((p, i) => (
                <p key={i} className={`text-base leading-[1.80] ${i > 0 ? "mt-4" : ""}`}
                  style={{ color: "rgba(244,244,242,0.60)" }}>
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
