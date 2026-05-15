import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria João Ferreira",
    role: "Mãe de aluno — EPL, 10º Ano",
    text: "O meu filho melhorou a nota de Matemática de 10 para 16 em apenas dois meses. Os professores são incríveis, pacientes e muito competentes. Recomendo vivamente.",
    stars: 5,
    initial: "M",
    color: "#16a34a",
  },
  {
    name: "Carlos Teixeira",
    role: "Encarregado — LIS, 8º Ano",
    text: "Finalmente encontrámos um apoio que entende o currículo do LIS. A professora de inglês é excelente e a nossa filha já se sente muito mais confiante nas aulas.",
    stars: 5,
    initial: "C",
    color: "#1e3a8a",
  },
  {
    name: "Ana Luísa Domingos",
    role: "Aluna — CCB, 12º Ano",
    text: "A preparação para os exames nacionais foi fundamental. As simulações e o feedback detalhado ajudaram-me a melhorar muito. Entrei na universidade!",
    stars: 5,
    initial: "A",
    color: "#d4af37",
  },
  {
    name: "Paulo Nkosi",
    role: "Pai de aluno — CAT, 6º Ano",
    text: "Excelente serviço. O meu filho está muito mais motivado para estudar. A professora adapta as aulas de forma muito criativa e os resultados são visíveis.",
    stars: 5,
    initial: "P",
    color: "#6d28d9",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#16a34a" }}>
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "#ffffff" }}>
            Resultados que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            Histórias reais de alunos e encarregados que confiaram no Centro de Estudos Virtus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ name, role, text, stars, initial, color }) => (
            <div
              key={name}
              className="card-lift rounded-2xl p-7 flex flex-col"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Stars count={stars} />
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#e2e8f0" }}>
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initial}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>{name}</p>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
