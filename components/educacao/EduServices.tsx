"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "900"], style: ["normal", "italic"] });

const WA = `https://wa.me/244946038986?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Virtus Educação.")}`;

const services = [
  {
    n: "01",
    title: "Explicações para Alunos de Currículos Internacionais",
    tagline: "EPL · CCB · American School · São Francisco · IB",
    desc: "Aulas particulares ou em pequeno grupo, específicas para estudantes que frequentam escolas com currículos estrangeiros. O objetivo é esclarecer conteúdos programáticos, ajudar na resolução de tarefas, reforçar idiomas de ensino — sobretudo inglês — e garantir que o aluno acompanha os níveis exigidos pelos programas internacionais.",
    tags: ["Inglês como língua de ensino", "Currículos nacionais e internacionais", "Aulas individuais ou em grupo", "Adaptação ao ritmo de cada escola"],
  },
  {
    n: "02",
    title: "Acompanhamento Escolar",
    tagline: "Suporte contínuo ao longo do ano lectivo",
    desc: "Apoio orientado ao estudo diário, à organização de tarefas e ao desenvolvimento de hábitos de trabalho sólidos. O professor acompanha a execução de fichas, trabalhos de casa e projectos, ajuda a preparar testes e provas, e incentiva a autonomia, a responsabilidade e a gestão do tempo do aluno.",
    tags: ["Organização do estudo", "Trabalhos de casa e projectos", "Preparação para testes", "Gestão do tempo e autonomia"],
  },
  {
    n: "03",
    title: "Cursos de Apoio ao Currículo",
    tagline: "Reforço estruturado em disciplinas-chave",
    desc: "Cursos estruturados — em grupo ou individuais — que seguem o programa oficial ou internacional da escola, reforçando disciplinas-chave como Matemática, Línguas e Ciências. O objetivo é consolidar conteúdos, corrigir lacunas de anos anteriores, preparar para conteúdos futuros e melhorar as competências fundamentais exigidas pelo currículo escolar.",
    tags: ["Matemática · Línguas · Ciências", "Programa oficial ou internacional", "Consolidação de lacunas", "Progressão curricular estruturada"],
  },
  {
    n: "04",
    title: "Preparação para Exames e Concursos",
    tagline: "Exames finais · Olimpíadas · Cambridge · IB",
    desc: "Sessões focadas especificamente na prática de provas, exames finais e concursos académicos — com resolução de exercícios anteriores, simulações e correcção guiada. Preparamos o aluno para exames de ingresso, olimpíadas, concursos escolares e interescolares, avaliações internacionais e certificações como Cambridge e IB.",
    tags: ["Técnica de resposta e gestão do tempo", "Resolução de provas anteriores", "Simulações com correcção detalhada", "Controlo da ansiedade em prova"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.70, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function EduServices() {
  return (
    <section id="servicos" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#070D1B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <span className="label-gold block mb-4">Áreas de Apoio Académico</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className={`${playfair.className} font-bold max-w-2xl`}
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1.04 }}
            >
              O que a Virtus{" "}
              <em style={{ fontStyle: "italic" }}>Educação</em> oferece.
            </h2>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-70 flex-shrink-0"
              style={{ color: "#C5A880" }}
            >
              Falar com um professor →
            </a>
          </div>
        </motion.div>

        {/* Services — editorial vertical list */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {services.map(({ n, title, tagline, desc, tags }, i) => (
            <motion.div
              key={n}
              variants={cardVariants}
              className="group rounded-2xl overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "#111520", border: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{ borderColor: "rgba(197,168,128,0.22)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">

                {/* Left: main content */}
                <div className="p-10 lg:p-12">
                  {/* Number + tagline */}
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="text-xs font-bold tracking-[0.24em] uppercase"
                      style={{ color: "rgba(197,168,128,0.50)" }}
                    >
                      {n}
                    </span>
                    <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: "rgba(197,168,128,0.22)" }} />
                    <span
                      className="text-[10px] font-medium tracking-wider uppercase"
                      style={{ color: "rgba(244,244,242,0.28)" }}
                    >
                      {tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`${playfair.className} font-bold leading-tight mb-5`}
                    style={{ fontSize: "clamp(1.3rem, 2.8vw, 1.85rem)", color: "#FFFFFF" }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-[1.85]"
                    style={{ color: "rgba(244,244,242,0.56)", maxWidth: "580px" }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Right: tags panel */}
                <div
                  className="p-10 lg:p-12 flex flex-col justify-between"
                  style={{
                    backgroundColor: i % 2 === 0
                      ? "rgba(197,168,128,0.04)"
                      : "rgba(255,255,255,0.02)",
                    borderLeft: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div>
                    <p
                      className="text-[10px] font-semibold tracking-[0.20em] uppercase mb-5"
                      style={{ color: "rgba(197,168,128,0.50)" }}
                    >
                      O que trabalhamos
                    </p>
                    <ul className="space-y-3">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "rgba(244,244,242,0.58)" }}
                        >
                          <span
                            className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                            style={{ backgroundColor: "#C5A880" }}
                          />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`${WA}&text=${encodeURIComponent(`Olá! Tenho interesse no serviço "${title}" da Virtus Educação.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-xs font-semibold tracking-wide uppercase transition-opacity hover:opacity-70"
                    style={{ color: "#C5A880" }}
                  >
                    Saber mais →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
