import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="eventos" className="py-16 md:py-20">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Agenda
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Próximos Eventos
          </h2>
          <div className="brand-separator mb-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src="/images/feria-abril-2026.jpg" 
              alt="Feria de Abril 2026 - Lago Azul"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 border-2 border-primary/20 rounded-lg pointer-events-none group-hover:border-primary/40 transition-colors duration-500" />
          </div>
          <div className="mt-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Feria de Abril 2026</h3>
            <p className="text-foreground/80 mb-4">Lago Azul - Sábado 16 de Mayo, 12:00h</p>
            <p className="text-primary font-semibold">¡Actuación del Grupo Valari!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
