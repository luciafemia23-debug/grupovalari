import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ubicacion" className="section-dark py-24 md:py-32 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Encuéntranos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-flamenco-ivory mb-4">
              Ubicación
            </h2>
            <div className="brand-separator mb-6" />
          </div>
          <div className="border border-primary/10 rounded-sm p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-primary text-sm uppercase tracking-wider mb-1">Barrio</p>
                <p className="text-flamenco-ivory/80">Valdefierro, Zaragoza</p>
                <p className="text-flamenco-ivory/80">España</p>
              </div>
              <div>
                <p className="text-primary text-sm uppercase tracking-wider mb-1">Espacios</p>
                <p className="text-flamenco-ivory/80">Centro Cívico Valdefierro</p>
                <p className="text-flamenco-ivory/80">Sala parroquial Ntra. Sra. de Lourdes</p>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { name: "Instagram", url: "https://instagram.com/grupo_valari" },
              { name: "Facebook", url: "https://www.facebook.com/valari.arivalsar/" },
              { name: "YouTube", url: "https://www.youtube.com/@arivalsar-grupovalari-2607" },
              { name: "TikTok", url: "https://www.tiktok.com/@grupo_valari" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flamenco-ivory/40 hover:text-primary text-sm uppercase tracking-wider transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
