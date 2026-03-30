import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-flamenco-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary uppercase tracking-[0.3em] text-base md:text-lg mb-6 animate-fade-in">
          Asociación Ari Val Sar
        </p>
        <p className="text-flamenco-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Descubre nuestra pasión
        </p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => scrollTo("#contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Contactar
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
