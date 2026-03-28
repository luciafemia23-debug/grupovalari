import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="section-warm py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text */}
          <div>
            <p className="text-flamenco-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Más que baile,
              <br />
              <span className="italic">una forma de vivir</span>
            </h2>
            <div className="gold-separator mb-8 !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nacimos con un sueño: acercar el flamenco a todas las personas que sienten la música en el corazón. Desde nuestros inicios, hemos construido una comunidad donde la tradición y la modernidad se encuentran.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Como asociación sin ánimo de lucro, creemos que el arte no tiene barreras. Nuestras puertas están abiertas a cualquier persona que quiera descubrir la magia del baile flamenco, independientemente de su edad o experiencia.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">Cultura</p>
                <p className="text-sm text-muted-foreground mt-1">Preservamos la tradición</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">Comunidad</p>
                <p className="text-sm text-muted-foreground mt-1">Unidos por la pasión</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-flamenco-dark/10 relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, hsl(350 60% 28% / 0.15) 0%, hsl(40 50% 50% / 0.1) 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-flamenco-gold/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-flamenco-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground/60 text-sm italic">El arte del flamenco</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-flamenco-gold/20 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 polka-pattern opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
