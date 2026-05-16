interface DivisionHeroProps {
  number: string;
  division: string;
  name: string;
  tagline: string;
  description: string;
  accentColor?: string;
}

export default function DivisionHero({
  number,
  division,
  name,
  tagline,
  description,
  accentColor = "#C5A880",
}: DivisionHeroProps) {
  return (
    <section
      className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#070D1B" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-12 text-xs tracking-wide" style={{ color: "rgba(244,244,242,0.35)" }}>
          <a href="/" className="hover:opacity-70 transition-opacity" style={{ color: "#C5A880" }}>
            Centro de Estudos Virtus
          </a>
          <span>/</span>
          <span style={{ color: "rgba(244,244,242,0.50)" }}>{division}</span>
        </div>

        {/* Division number + label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-bold tracking-[0.24em] uppercase"
            style={{ color: accentColor, opacity: 0.60 }}
          >
            {number}
          </span>
          <div className="w-12 h-px" style={{ backgroundColor: accentColor, opacity: 0.30 }} />
          <span
            className="text-xs font-semibold tracking-[0.20em] uppercase"
            style={{ color: accentColor }}
          >
            {division}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.94] mb-7"
          style={{ color: "#F4F4F2" }}
        >
          {name}
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl font-light mb-5 max-w-2xl"
          style={{ color: "rgba(244,244,242,0.55)", letterSpacing: "0.01em" }}
        >
          {tagline}
        </p>

        {/* Description */}
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "rgba(244,244,242,0.40)" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
