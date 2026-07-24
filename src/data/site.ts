export const site = {
  name: "Giovanardi Barili",
  fullName: "Estudio Jurídico y Consultora Giovanardi Barili",
  tagline: "Derecho privado + arquitectura",
  whatsapp: {
    number: "5492236236159",
    display: "+54 9 223 623-6159",
    defaultMessage: "Hola, quisiera hacer una consulta legal.",
  },
  // TODO: reemplazar por email @estudiogiovanardibarili.com cuando exista.
  email: "luciano.barili@gmail.com",
  // Sin dirección de calle a propósito: el estudio no tiene oficina física
  // con atención al público, opera como negocio de área de servicio.
  location: {
    city: "Mar del Plata",
    serviceArea: "toda la Provincia de Buenos Aires",
  },
  matricula: "T° XVI F° 99 — Colegio de Abogados de Mar del Plata (CAMDP)",
  social: [] as { label: string; href: string }[],
};

/**
 * Link de WhatsApp con mensaje precargado. Cada página/sección puede pasar
 * su propio mensaje (ej. una landing de área: "Hola, quisiera consultar por
 * una sucesión.") para tener atribución de qué área generó cada consulta.
 */
export function getWhatsAppUrl(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Áreas", href: "/#areas" },
  { label: "Consultoría", href: "/consultoria" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "Contacto", href: "/contacto" },
];
