import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/grupo_valari/" },
  { name: "Facebook", url: "https://www.facebook.com/valari.arivalsar/" },
  { name: "YouTube", url: "https://www.youtube.com/@arivalsar-grupovalari-2607" },
  { name: "TikTok", url: "https://www.tiktok.com/@grupo_valari" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible. ¡Gracias por tu interés!",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section-dark py-24 md:py-32 relative">
      <div className="absolute inset-0 polka-pattern-light opacity-10" />
      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Da el primer paso
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-flamenco-ivory mb-6">
              ¿Quieres tu espectáculo en vivo?
            </h2>
            <div className="brand-separator mb-6" />
            <p className="text-flamenco-ivory/80 text-lg font-semibold mb-3">
              Tipos de eventos que realizamos
            </p>
            <p className="text-flamenco-ivory/60 max-w-xl mx-auto">
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
                className="bg-flamenco-ivory/5 border-primary/20 text-flamenco-ivory placeholder:text-flamenco-ivory/30 focus-visible:ring-primary/40 rounded-sm h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-flamenco-ivory/5 border-primary/20 text-flamenco-ivory placeholder:text-flamenco-ivory/30 focus-visible:ring-primary/40 rounded-sm h-12"
              />
            </div>
            <div className="md:col-span-2">
              <Textarea
                placeholder="Descríbenos tu evento..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="bg-flamenco-ivory/5 border-primary/20 text-flamenco-ivory placeholder:text-flamenco-ivory/30 focus-visible:ring-primary/40 rounded-sm resize-none"
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

          {/* Social links */}
          <div className="flex justify-center gap-8 mt-16">
            {socialLinks.map((social) => (
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

      {/* Footer */}
      <div className="border-t border-flamenco-ivory/10 mt-24 pt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-lg text-flamenco-ivory/60">
            <span className="text-primary italic">Valari</span> — Asociación Ari Val Sar
          </p>
          <p className="text-flamenco-ivory/30 text-sm">
            © 2025 Asociación Ari Val Sar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
