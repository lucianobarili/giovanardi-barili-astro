import { site } from "./site";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  tone: "primary" | "accent";
  extra?: string;
}

export const team: TeamMember[] = [
  {
    name: "Luciano Barili",
    role: "Abogado",
    bio: "Master en Derecho Empresario (Universidad Austral) · 13 años de ejercicio · especialista en derecho privado.",
    tone: "primary",
    extra: site.matricula,
  },
  {
    name: "Alcira Giovanardi",
    role: "Arquitecta",
    bio: "Especialista en derecho urbanístico y patrimonio arquitectónico · trámites y gestión ante la Municipalidad de General Pueyrredón (MGP).",
    tone: "accent",
    // TODO: completar matrícula (CAAPBA) cuando esté disponible, para paridad
    // con la línea de matrícula que ya tiene Luciano.
  },
];
