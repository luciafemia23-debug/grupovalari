import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { label: "Actuación en vivo", span: "col-span-2 row-span-2" },
  { label: "Clase de sevillanas", span: "" },
  { label: "Ensayo grupal", span: "" },
  { label: "Palillos flamencos", span: "" },
  { label: "Feria de Abril", span: "col-span-2" },
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
          <p className="text-flamenco-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Momentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galería
          </h2>
          <div className="gold-separator mb-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto auto-rows-[180px] md:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-sm overflow-hidden cursor-pointer ${item.span}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, hsl(350 ${30 + i * 8}% ${20 + i * 5}%) 0%, hsl(0 0% ${10 + i * 3}%) 100%)`,
                }}
              />
              <div className="absolute inset-0 bg-flamenco-black/40 group-hover:bg-flamenco-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-flamenco-ivory text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
