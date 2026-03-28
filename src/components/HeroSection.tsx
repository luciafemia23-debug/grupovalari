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
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(0 70% 20%) 0%, hsl(0 0% 5%) 50%, hsl(0 50% 18%) 100%)`,
        }}
      />
      {/* Polka dot pattern overlay */}
      <div className="absolute inset-0 polka-pattern-light opacity-40" />
      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-flamenco-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img src={logo} alt="Asociación Ari Val Sar — Valari" className="w-28 md:w-36 mx-auto mb-8 rounded-full animate-fade-in" />
        <p className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-in">
          Asociación Ari Val Sar
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-flamenco-ivory leading-tight mb-6 animate-fade-in-up">
          Donde el arte
          <br />
          <span className="italic text-primary">se hace movimiento</span>
        </h1>
        <p className="text-flamenco-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Descubre la pasión del flamenco, las sevillanas y los palillos en el corazón de Valdefierro, Zaragoza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => scrollTo("#contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Únete
          </button>
          <button
            onClick={() => scrollTo("#clases")}
            className="border border-primary/40 text-primary hover:bg-primary/10 px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300"
          >
            Descubre más
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
