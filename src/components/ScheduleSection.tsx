import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schedule = [
  {
    day: "Martes",
    classes: [
      { name: "Flamenco nivel medio", time: "10:30 – 12:00", place: "Centro Cívico Valdefierro", prof: "Sylvia Valle y Silvia Arilla" },
      { name: "Palillos flamencos", time: "17:00 – 18:30", place: "Sala parroquial Ntra. Sra. de Lourdes", prof: "Ana Zambrano" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { name: "Iniciación de flamenco", time: "18:00 – 19:30", place: "Sala parroquial Ntra. Sra. de Lourdes", prof: "Silvia Femia" },
      { name: "Iniciación de sevillanas", time: "19:30 – 21:00", place: "Sala parroquial Ntra. Sra. de Lourdes", prof: "Silvia Femia" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { name: "Perfeccionamiento de sevillanas", time: "10:30 – 12:00", place: "Centro Cívico Valdefierro", prof: "Sylvia Valle y Silvia Arilla" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { name: "Grupo estable", time: "10:00 – 12:00", place: "Centro Cívico Valdefierro", prof: "Sylvia Valle y Verónica Hidalgo" },
      { name: "Palillos flamencos", time: "12:00 – 13:30", place: "Sala parroquial Ntra. Sra. de Lourdes", prof: "Ana Zambrano" },
      { name: "Grupo infantil", time: "12:00 – 13:00", place: "Centro Cívico Valdefierro", prof: "Sylvia Valle y Verónica Hidalgo" },
    ],
  },
];

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="horarios" className="section-dark py-24 md:py-32 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Horarios de Clases
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-4">
            Horarios y Clases
          </h2>
          <div className="brand-separator mb-6" />
          <p className="text-flamenco-ivory/60">
            Tres disciplinas, una misma pasión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {schedule.map((day) => (
            <div key={day.day} className="bg-flamenco-ivory/5 border border-primary/10 rounded-sm p-6 md:p-8">
              <p className="font-serif text-2xl font-bold text-primary mb-5">{day.day}</p>
              <div className="space-y-5">
                {day.classes.map((c) => (
                  <div key={c.name} className="border-b border-flamenco-ivory/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-flamenco-ivory font-medium">{c.name}</span>
                      <span className="text-primary text-sm font-semibold whitespace-nowrap ml-4">{c.time}</span>
                    </div>
                    <p className="text-flamenco-ivory/50 text-sm">{c.place}</p>
                    <p className="text-flamenco-ivory/40 text-xs mt-1">Prof. {c.prof}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location */}
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
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
