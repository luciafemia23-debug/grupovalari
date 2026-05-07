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
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center max-w-6xl mx-auto">
          {/* Text */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-left">
              Más que baile,
              <br />
              <span className="italic">una forma de vivir</span>
            </h2>
            <div className="brand-separator mb-8 !mx-0" />
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                La Asociación Artística y Cultural Ari Val Sar, conocida como <strong>Grupo Valari</strong>, fue fundada en 2009 en Valdefierro (Zaragoza) con el objetivo de acercar el arte del flamenco a todas las personas. El grupo convierte el baile en una herramienta de expresión, comunidad y crecimiento personal, creando un espacio donde la pasión por la música y el movimiento se vive y se comparte cada día.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                A lo largo de los años, Grupo Valari ha construido mucho más que un proyecto artístico: ha formado una auténtica familia donde personas de cualquier edad y nivel encuentran un lugar para aprender, disfrutar y evolucionar. Sus clases no solo enseñan técnica, sino que también transmiten valores como la constancia, la confianza y el amor por el flamenco.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Además de su actividad formativa, el grupo participa activamente en la vida cultural y social mediante actuaciones en barrios, pueblos, bodas y eventos especiales. Como asociación sin ánimo de lucro, Valari mantiene un ambiente abierto, cercano e inclusivo, donde lo más importante son las ganas de sentir y vivir la magia del flamenco.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="h-full py-4">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                src="/images/nuestra-historia.jpg" 
                alt="Historia de Grupo Valari" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
