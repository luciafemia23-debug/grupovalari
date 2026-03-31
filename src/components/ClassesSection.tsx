import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const classes = [
  {
    title: "Flamenco",
    description:
      "Desde iniciación hasta nivel medio con profesoras especializadas. Aprende la técnica, la expresión y la pasión del baile flamenco.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
  },
  {
    title: "Sevillanas",
    description:
      "Iniciación y perfeccionamiento. Domina las cuatro sevillanas con gracia y alegría, ideales para ferias, bodas y celebraciones.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Palillos Flamencos",
    description:
      "Descubre el arte de las castañuelas. Aprende ritmo, técnica y coordinación con este instrumento único de la cultura española.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    title: "Grupo Infantil",
    description:
      "¿Te imaginas a tu peque moviendo los pies al ritmo del flamenco? Los sábados son mágicos para los más pequeños: risas, ritmo, y movimientos que despiertan la creatividad y la confianza mientras se inician en el mundo del flamenco.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const ClassesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clases" className="section-dark py-24 md:py-32 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-20" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Nuestras clases
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-6">
            Tres disciplinas,
            <br />
            una misma pasión
          </h2>
          <div className="brand-separator mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {classes.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-flamenco-ivory/5 border border-primary/10 rounded-sm p-8 text-center transition-all duration-500 hover:border-primary/40 hover:bg-flamenco-ivory/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-flamenco-ivory mb-4">
                {item.title}
              </h3>
              <p className="text-flamenco-ivory/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
