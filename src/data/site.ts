export const site = {
  name: "Giovanardi Barili",
  fullName: "Estudio Jurídico y Consultora Giovanardi Barili",
  tagline: "Derecho privado + arquitectura",
  whatsapp: {
    number: "5492236236159",
    display: "+54 9 223 623-6159",
    url: "https://wa.me/5492236236159",
  },
  // TODO: reemplazar por email @estudiogiovanardibarili.com cuando exista.
  email: "luciano.barili@gmail.com",
  location: {
    city: "Mar del Plata",
    serviceArea: "Toda la Provincia de Buenos Aires",
  },
  matricula: "T° XVI F° 99 — Colegio de Abogados de Mar del Plata (CAMDP)",
  social: [] as { label: string; href: string }[],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Áreas", href: "/#areas" },
  { label: "Nosotros", href: "/#equipo" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "Contacto", href: "/#contacto" },
];
