import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "2009", label: "Año de fundación" },
  { value: "16", label: "Años de historia" },
  { value: "6", label: "Clases semanales" },
  { value: "100%", label: "Sin ánimo de lucro" },
];

const CommunitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comunidad" className="section-warm py-24 md:py-32 relative">
      <div className="absolute inset-0 polka-pattern opacity-30" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Impacto social
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comunidad con alma
          </h2>
          <div className="brand-separator mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            Somos una asociación sin ánimo de lucro comprometida con la difusión de la cultura flamenca en Valdefierro y Zaragoza. 
            Participamos en actuaciones en barrios, pueblos, bodas y todo tipo de eventos. 
            Cada paso, cada compás, cada palma es un acto de inclusión y celebración cultural.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
