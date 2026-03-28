import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";

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
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Más que baile,
              <br />
              <span className="italic">una forma de vivir</span>
            </h2>
            <div className="brand-separator mb-8 !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              La Asociación Artística y Cultural Ari Val Sar, constituida en el año 2009, cuenta con el grupo de baile <strong>Valari</strong>, que imparte clases a sus socios y simpatizantes durante todo el año.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Participamos en diversas actividades: actuaciones en barrios, pueblos, bodas, eventos, despedidas... Nos encontramos en el barrio de <strong>Valdefierro</strong>, en Zaragoza (España).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Como asociación sin ánimo de lucro, nuestras puertas están abiertas a cualquier persona que quiera descubrir la magia del baile flamenco, independientemente de su edad o experiencia.
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

          {/* Visual — logo showcase */}
          <div className="relative flex items-center justify-center">
            <div className="aspect-square w-full max-w-sm rounded-sm overflow-hidden relative flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, hsl(0 80% 45% / 0.05) 0%, hsl(40 30% 90% / 0.5) 100%)`,
              }}
            >
              <img src={logo} alt="Logo Valari" className="w-3/4 opacity-90" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 polka-pattern opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
