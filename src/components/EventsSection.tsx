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

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-flamenco-cream/20 border border-primary/10 rounded-sm p-8">
            <p className="text-foreground/60 italic text-lg">
              No hay eventos programados en este momento. 
              <br />
              ¡Vuelve pronto para ver nuestras próximas actuaciones!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
