import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Nuestra Historia", href: "#nosotros" },
  { label: "Clases", href: "#clases" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios 25/26", href: "#horarios" },
  { label: "Próximos Eventos", href: "#eventos" },
  { label: "Colaboraciones", href: "#colaboraciones" },
  { label: "Contacto", href: "#contacto" },
  { label: "Ubicación", href: "#ubicacion" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-flamenco-black/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Valari" className="h-10 md:h-12 w-auto rounded-full" />
          <span className="font-serif text-lg md:text-xl font-bold text-flamenco-ivory tracking-wide">
            Grupo Valari
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-flamenco-ivory/80 hover:text-primary text-[0.7rem] font-medium tracking-wide uppercase transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-flamenco-ivory"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-flamenco-black/95 backdrop-blur-md border-t border-primary/20">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-flamenco-ivory/80 hover:text-primary text-sm font-medium tracking-wide uppercase transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
