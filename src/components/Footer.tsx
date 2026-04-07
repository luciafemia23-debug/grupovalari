const Footer = () => {
  return (
    <footer className="section-dark border-t border-flamenco-ivory/10 pt-8 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-2">
            <a href="tel:+34696780353" className="flex items-center gap-2 text-flamenco-ivory/60 hover:text-primary transition-colors">
              <span>📞</span>
              <span className="text-sm">696 780 353</span>
            </a>
            <div className="flex items-start gap-2 text-flamenco-ivory/60">
              <span>✉️</span>
              <div className="flex flex-col gap-1">
                <a href="mailto:arivalsar@gmail.com" className="text-sm hover:text-primary transition-colors">arivalsar@gmail.com</a>
                <a href="mailto:acc.ari_val_sar@hotmail.com" className="text-sm hover:text-primary transition-colors">acc.ari_val_sar@hotmail.com</a>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-serif text-lg text-flamenco-ivory/60">
              <span className="text-primary italic">Grupo Valari</span> — Asociación Ari Val Sar
            </p>
            <p className="text-flamenco-ivory/30 text-sm mt-2">
              © 2025 Asociación Ari Val Sar. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
