import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schedule = [
  { day: "Lunes", classes: [{ name: "Flamenco Iniciación", time: "18:00 – 19:30" }, { name: "Sevillanas", time: "19:30 – 20:30" }] },
  { day: "Martes", classes: [{ name: "Palillos", time: "17:30 – 18:30" }, { name: "Flamenco Intermedio", time: "19:00 – 20:30" }] },
  { day: "Miércoles", classes: [{ name: "Sevillanas", time: "18:00 – 19:00" }, { name: "Flamenco Avanzado", time: "19:30 – 21:00" }] },
  { day: "Jueves", classes: [{ name: "Palillos", time: "17:30 – 18:30" }, { name: "Flamenco Iniciación", time: "19:00 – 20:30" }] },
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
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Schedule */}
          <div>
            <p className="text-flamenco-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Planifica tu semana
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-6">
              Horarios
            </h2>
            <div className="gold-separator mb-10 !mx-0" />

            <div className="space-y-6">
              {schedule.map((day) => (
                <div key={day.day} className="border-b border-flamenco-ivory/10 pb-4">
                  <p className="font-serif text-lg font-semibold text-flamenco-gold mb-2">{day.day}</p>
                  {day.classes.map((c) => (
                    <div key={c.name} className="flex justify-between text-sm py-1">
                      <span className="text-flamenco-ivory/80">{c.name}</span>
                      <span className="text-flamenco-ivory/50">{c.time}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-flamenco-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Encuéntranos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-6">
              Ubicación
            </h2>
            <div className="gold-separator mb-10 !mx-0" />

            <div className="bg-flamenco-ivory/5 border border-flamenco-gold/10 rounded-sm p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-flamenco-gold text-sm uppercase tracking-wider mb-1">Dirección</p>
                  <p className="text-flamenco-ivory/80">Calle del Arte, 12</p>
                  <p className="text-flamenco-ivory/80">28012 Madrid, España</p>
                </div>
                <div>
                  <p className="text-flamenco-gold text-sm uppercase tracking-wider mb-1">Teléfono</p>
                  <p className="text-flamenco-ivory/80">+34 912 345 678</p>
                </div>
                <div>
                  <p className="text-flamenco-gold text-sm uppercase tracking-wider mb-1">Email</p>
                  <p className="text-flamenco-ivory/80">info@arteflamenco.es</p>
                </div>
                <div>
                  <p className="text-flamenco-gold text-sm uppercase tracking-wider mb-1">Horario de atención</p>
                  <p className="text-flamenco-ivory/80">Lunes a Viernes: 16:00 – 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
