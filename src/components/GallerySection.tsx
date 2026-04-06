import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryItems = [
  { label: "Abanicos flamencos", src: gallery1, span: "col-span-1 row-span-1" },
  { label: "Romería", src: gallery2, span: "col-span-1 row-span-2" },
  { label: "Grupo Valari", src: gallery3, span: "col-span-1 row-span-1" },
  { label: "Actuación en vivo", src: gallery4, span: "col-span-2 row-span-1" },
  { label: "En el escenario", src: gallery5, span: "col-span-1 row-span-1" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 ${item.span}`}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-flamenco-black/30 group-hover:bg-flamenco-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-flamenco-ivory text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </p>
              </div>
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
            alt={galleryItems[selectedImage].label}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-flamenco-ivory text-lg font-medium tracking-wide">
            {galleryItems[selectedImage].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
