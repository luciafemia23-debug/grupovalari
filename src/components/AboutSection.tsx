import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-image.jpg";

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
              La Asociación Artística y Cultural Ari Val Sar, fundada en 2009 en el barrio de Valdefierro (Zaragoza), es conocida como <strong>Grupo Valari</strong>, nombre con el que se identifica su esencia artística y su actividad diaria. Ambos conceptos representan una misma realidad: un espacio dedicado a acercar el arte del flamenco a todas las personas y a convertir el baile en una herramienta de expresión, comunidad y crecimiento personal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grupo Valari es el corazón del proyecto. Un punto de encuentro para quienes sienten la pasión por el movimiento y la música, donde el flamenco se vive desde dentro y se comparte en cada clase, ensayo y actuación.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A lo largo de los años, Valari ha construido mucho más que un grupo artístico: ha formado una auténtica familia. Un espacio donde cada persona, independientemente de su edad o nivel, encuentra su lugar para aprender, disfrutar y evolucionar. Las clases no son solo formación técnica, sino una experiencia compartida donde se transmiten valores como la constancia, la confianza y el amor por el flamenco.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El grupo Valari lleva su arte más allá del aula, participando activamente en la vida cultural y social. Sus actuaciones llenan de energía escenarios de barrios y pueblos, así como celebraciones especiales como bodas, eventos y despedidas, donde el flamenco se convierte en protagonista y crea momentos únicos e inolvidables.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Como asociación sin ánimo de lucro, Grupo Valari mantiene un espíritu abierto, cercano e inclusivo, apostando por acercar el flamenco a todo aquel que quiera descubrirlo. Aquí no importa la experiencia previa, sino las ganas de sentir, aprender y dejarse llevar por la magia del baile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Más que un grupo, Valari es un lugar donde el arte conecta personas, donde cada paso cuenta una historia y donde el flamenco se vive desde dentro.
            </p>
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
