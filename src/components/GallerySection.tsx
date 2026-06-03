import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery6 },
  { src: gallery4 },
  { src: gallery5 },
  { src: "/images/evento gastrobar.jpeg" },
  { src: "/images/final de curso 2026.jpeg" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="galeria" className="section-light py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Momentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galería
          </h2>
          <div className="brand-separator mb-6" />
        </div>

        <div className="max-w-6xl mx-auto overflow-visible">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-10">
              {galleryItems.map((item, i) => (
                <CarouselItem key={i} className="pl-4 basis-[80%] md:basis-[50%] lg:basis-[40%]">
                  <div 
                    className={`p-4 transition-all duration-700 ${
                      current === i ? "opacity-100 scale-[0.95]" : "opacity-40 scale-[0.85]"
                    }`}
                    onClick={() => {
                      if (current === i) {
                        setSelectedImage(i);
                      } else {
                        api?.scrollTo(i);
                      }
                    }}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden aspect-square cursor-pointer group border-[1mm] border-primary">
                      <img
                        src={item.src}
                        alt={`Galería Grupo Valari ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 transition-colors duration-500 ${
                        current === i ? "bg-black/0" : "bg-black/20"
                      }`} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <p className="text-center text-red-600 mt-10 mb-6 font-semibold uppercase tracking-widest text-sm">
            Para ampliar, ¡dale click a la foto!
          </p>
          <div className="flex justify-center gap-2">
            {galleryItems.map((_, i) => (
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

      {/* Lightbox / Fullscreen */}
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
            src={galleryItems[selectedImage].src}
            alt="Galería Grupo Valari"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
