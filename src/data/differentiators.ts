export interface Differentiator {
  title: string;
  description: string;
  icon: "zap" | "handshake" | "puzzle";
}

export const coreDifferentiators: Differentiator[] = [
  {
    title: "Agilidad",
    description: "Respuesta inmediata, sin esperas eternas.",
    icon: "zap",
  },
  {
    title: "Confianza",
    description: "13+ años de trayectoria y trato directo.",
    icon: "handshake",
  },
  {
    title: "Estudio Integral",
    description: "Jurídico, patrimonial y urbanístico bajo un mismo techo.",
    icon: "puzzle",
  },
];

export const modalityNote = {
  title: "Asesoría 100% online",
  description: "Modalidad remota en toda la Provincia de Buenos Aires.",
};
