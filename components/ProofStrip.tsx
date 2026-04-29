const proofs = [
  { icon: "✔", text: "Resultados reais"         },
  { icon: "✔", text: "Professores qualificados" },
  { icon: "✔", text: "Ensino personalizado"     },
];

export default function ProofStrip() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="font-bold text-lg lg:text-xl text-center lg:text-left" style={{ color: "#0f172a" }}>
            Mais de{" "}
            <span style={{ color: "#16a34a" }}>200 alunos</span>{" "}
            já confiam no Centro de Estudo Galileu
          </p>

          <div className="hidden lg:block w-px h-10 bg-slate-200 flex-shrink-0" />

          <div className="flex flex-wrap items-center justify-center gap-6">
            {proofs.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "#16a34a" }}
                >
                  {icon}
                </div>
                <span className="text-sm font-medium" style={{ color: "#334155" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
