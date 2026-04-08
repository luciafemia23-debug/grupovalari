

## Plan: Optimización SEO completa

### Resumen
Añadir todos los metadatos necesarios para posicionar la web en buscadores: Open Graph completo, keywords, datos estructurados (JSON-LD), canonical URL, sitemap.xml y mejorar robots.txt.

### Cambios

**1. `index.html` — Metadatos completos**
- Añadir `<meta name="keywords">` con palabras clave: flamenco, sevillanas, palillos, Zaragoza, clases baile, asociación, Valari, Ari Val Sar
- Añadir `<meta name="robots" content="index, follow">`
- Añadir `<link rel="canonical" href="https://grupovalari.com/">`
- Añadir `<meta property="og:url" content="https://grupovalari.com/">`
- Añadir `<meta property="og:locale" content="es_ES">`
- Añadir `<meta property="og:site_name" content="Grupo Valari">`
- Añadir `<meta name="theme-color">` para móviles
- Añadir `<meta name="geo.region" content="ES-AR">` y `<meta name="geo.placename" content="Zaragoza">`
- Mejorar la descripción para incluir más palabras clave relevantes y ubicación (Zaragoza)
- Añadir JSON-LD (Schema.org) con datos estructurados de tipo `Organization` + `LocalBusiness` incluyendo nombre, dirección, teléfono, email, redes sociales y horarios de clases

**2. `public/sitemap.xml` — Nuevo archivo**
- Crear sitemap con la URL principal `https://grupovalari.com/`

**3. `public/robots.txt` — Actualizar**
- Añadir referencia al sitemap: `Sitemap: https://grupovalari.com/sitemap.xml`

