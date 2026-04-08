import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import trianaImg from "@/assets/triana-zgz.jpg";

const CollaborationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="colaboraciones" className="section-dark py-16 md:py-20 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Partners
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-6">
            Pub Triana Zaragoza
          </h2>
          <div className="brand-separator mb-6" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-[40%] md:w-[18%] rounded-xl overflow-hidden shadow-lg">
            <img
              src={trianaImg}
              alt="Pub Triana ZGZ - Sevillanas, rumbas y flamenco"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="max-w-md text-center md:text-left">
            <p className="text-flamenco-ivory/80 mb-2">
              Ubicación: C. de Contamina, 9, Casco Antiguo, 50003 Zaragoza
            </p>
            <p className="text-flamenco-ivory/80 mb-2">
              Sevillanas y flamenco los jueves de 19:30 a 21:30
            </p>
            <p className="text-flamenco-ivory/80 mb-6">
              Clases gratuitas con tu consumición
            </p>

            <a
              href="https://www.instagram.com/triana.oficial.zgz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <Instagram size={18} />
              <span>triana.oficial.zgz</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
