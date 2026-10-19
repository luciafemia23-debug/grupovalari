import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CartelsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="carteles" className="section-dark py-16 md:py-20 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Promoción
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-4">
            Carteles
          </h2>
          <div className="brand-separator mb-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="/images/cartel flashmob flameco ensayo.png"
                alt="Cartel del ensayo de flashmob de flamenco"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none" />
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Ensayo de Flashmob de Flamenco
              </h3>
              <p className="text-foreground/70 mb-4">
                Del 21 de octubre hasta diciembre: Preparación para nuestro flashmob navideño
              </p>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
               Horario: Miércoles 17:30 - 19:00 | Sala parroquial Valdefierro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartelsSection;