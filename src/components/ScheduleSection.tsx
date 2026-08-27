import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schedule = [
  {
    day: "Martes",
    classes: [
      { name: "Flamenco nivel medio", time: "10:30 - 12:00", place: "Centro cívico Valdefierro" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { name: "De septiembre a Octubre: preparación de la ofrenda de flores", time: "17:00 - 19:00", place: "Sala parroquial Valdefierro" },
      { name: "Perfeccionamiento sevillanas", time: "19:00 - 20:30", place: "Sala parroquial Valdefierro" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { name: "Palillos flamencos aplicados al folclore andaluz", time: "10:30 - 12:00", place: "Centro cívico Valdefierro" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { name: "Ensayo grupo estable", time: "10:00 - 12:00", place: "Centro cívico Valdefierro" },
      { name: "Folclore y flamenco infantil", time: "12:00 - 13:00", place: "Centro cívico Valdefierro" },
    ],
  },
];

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="horarios" className="section-dark py-16 md:py-20 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Horario
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-4">
            Curso 26/27
          </h2>
          <div className="brand-separator mb-6" />
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
