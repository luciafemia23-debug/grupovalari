import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";


const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto web de ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`);
    window.location.href = `mailto:byfemmia@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "¡Mensaje enviado!",
      description: "Se abrirá tu aplicación de correo para enviar el mensaje.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-16 md:py-20 bg-flamenco-cream/30">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Da el primer paso
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Quieres tu espectáculo en vivo?
            </h2>
            <div className="brand-separator mb-6" />
            <p className="text-foreground/80 text-lg font-semibold mb-3">
              Tipos de eventos
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Realizamos eventos privados, eventos en barrios y pueblos, ambientamos ferias… ¡y lo daremos todo! Déjanos tu nombre, tu email y descríbenos tu evento con día, tiempo de actuación que quieres y nosotras haremos magia en tu evento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <Input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-foreground/5 border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/40 rounded-sm h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-foreground/5 border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/40 rounded-sm h-12"
              />
            </div>
            <div className="md:col-span-2">
              <Textarea
                placeholder="Descríbenos tu evento..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="bg-foreground/5 border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary/40 rounded-sm resize-none"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
