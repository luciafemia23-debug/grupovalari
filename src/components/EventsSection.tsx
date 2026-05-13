import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const events = [
  {
    id: 1,
    title: "Feria de Abril 2026",
    date: "Sábado 16 de Mayo, 12:00h",
    location: "Lago Azul",
    description: "¡Actuación del Grupo Valari!",
    image: "/images/feria-abril-2026.jpg",
  },
  {
    id: 2,
    title: "IV Jornada Valari",
    date: "Domingo 31 de Mayo",
    location: "Salón del Centro Cívico, Valdefierro",
    description: "Masterclass (11:00) y Festival (17:30)",
    image: "/images/jornada valari.jpg",
  },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="eventos" className="py-16 md:py-20 overflow-hidden bg-background">
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

        <div className="max-w-4xl mx-auto overflow-visible">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {events.map((event, i) => (
                <CarouselItem key={event.id} className="pl-4 basis-full md:basis-[80%]">
                  <div 
                    className={`transition-all duration-700 cursor-pointer ${
                      current === i ? "opacity-100 scale-100" : "opacity-40 scale-90"
                    }`}
                    onClick={() => api?.scrollTo(i)}
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-primary/10">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="aspect-[3/4] w-full flex items-center justify-center bg-muted/20">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-contain p-1"
                          onClick={(e) => {
                            if (current === i) {
                              e.stopPropagation();
                              setSelectedImage(i);
                            }
                          }}
                        />
                      </div>
                      <div className={`absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/30 transition-colors duration-500 ${current === i ? "opacity-100" : "opacity-0"}`} />
                    </div>
                    
                    <div className={`mt-6 text-center transition-all duration-500 ${current === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">{event.title}</h3>
                      <p className="text-foreground/70 text-sm mb-1">{event.date}</p>
                      <p className="text-foreground/50 text-xs mb-2">{event.location}</p>
                      <p className="text-primary font-semibold uppercase tracking-wider text-[10px] md:text-xs">{event.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <p className="text-center text-primary/60 mt-6 mb-6 font-medium uppercase tracking-widest text-[10px] md:text-xs">
            Haz clic en el cartel para ampliar
          </p>

          <div className="flex justify-center gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === i ? "w-8 bg-primary" : "w-2 bg-primary/20"
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={events[selectedImage].image}
            alt={events[selectedImage].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default EventsSection;
