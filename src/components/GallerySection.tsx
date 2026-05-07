import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery6 },
  { src: gallery4 },
  { src: gallery5 },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

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

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {galleryItems.map((item, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="p-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9]">
                      <img
                        src={item.src}
                        alt={`Galería Grupo Valari ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-flamenco-black/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
              <CarouselNext className="-right-12 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
            </div>
            <div className="flex md:hidden justify-center mt-6 gap-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
