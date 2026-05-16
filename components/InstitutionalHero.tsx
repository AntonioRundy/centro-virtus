export default function InstitutionalHero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6"
      style={{ backgroundColor: "#070D1B" }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle green glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(22,163,74,0.05)" }}
      />

      <div className="relative text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-12">
          <div className="w-10 h-px" style={{ backgroundColor: "#C5A880" }} />
          <span
            className="text-xs font-semibold tracking-[0.28em] uppercase"
            style={{ color: "#C5A880" }}
          >
            Virtus Group · Luanda, Angola
          </span>
          <div className="w-10 h-px" style={{ backgroundColor: "#C5A880" }} />
        </div>

        {/* Main title */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight leading-[0.92] mb-7"
          style={{ color: "#F4F4F2" }}
        >
          Centro de<br />Estudos Virtus
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl font-light mb-4 max-w-2xl mx-auto"
          style={{ color: "rgba(244,244,242,0.60)", letterSpacing: "0.01em" }}
        >
          Conhecimento, Pesquisa e Desenvolvimento Aplicado.
        </p>

        {/* Sub */}
        <p
          className="text-sm sm:text-base mb-20 max-w-lg mx-auto"
          style={{ color: "rgba(244,244,242,0.32)" }}
        >
          Três divisões especializadas. Uma abordagem académica completa.
        </p>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-3" style={{ opacity: 0.45 }}>
          <span
            className="text-[10px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "#C5A880" }}
          >
            Descobrir
          </span>
          <div className="w-px h-10" style={{ backgroundColor: "#C5A880" }} />
        </div>
      </div>
    </section>
  );
}
