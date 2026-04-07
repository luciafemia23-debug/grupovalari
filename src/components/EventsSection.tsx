import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import eventoFeria from "@/assets/evento-feria-abril.jpg";

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

        <div className="flex justify-center">
          <div className="w-[60%] md:w-[40%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
            <img
              src={eventoFeria}
              alt="Feria de Abril - Verbena Gastrobar - Actuación Grupo Valari"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
