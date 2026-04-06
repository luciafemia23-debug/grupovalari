import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 aspect-[4/3]"
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={item.src}
                alt="Galería Grupo Valari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-flamenco-black/20 group-hover:bg-flamenco-black/5 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-flamenco-black/85 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={galleryItems[selectedImage].src}
            alt="Galería Grupo Valari"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
