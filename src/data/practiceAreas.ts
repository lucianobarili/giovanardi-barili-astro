export interface PracticeArea {
  title: string;
  description: string;
  icon: "building-2" | "signature" | "users" | "gavel" | "landmark";
  href: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Derecho Empresarial y Societario",
    description:
      "Constitución de sociedades (SA, SRL, SAS), reformas estatutarias, asesoramiento empresario continuo y órganos societarios.",
    icon: "building-2",
    href: "#contacto",
  },
  {
    title: "Contratos",
    description:
      "Fideicomisos, franquicias, locaciones y compraventa de bienes muebles e inmuebles, contratos internacionales.",
    icon: "signature",
    href: "#contacto",
  },
  {
    title: "Sucesiones y Familia Patrimonial",
    description:
      "Tramitación sucesoria, convenios hereditarios, divisiones de condominio y acciones de nulidad de testamento.",
    icon: "users",
    href: "#contacto",
  },
  {
    title: "Litigios Civiles y Comerciales",
    description:
      "Cobros ejecutivos, desalojos, incumplimientos contractuales, daños y perjuicios, medidas cautelares.",
    icon: "gavel",
    href: "#contacto",
  },
  {
    title: "Urbanismo, Patrimonio y Gestión Municipal",
    description:
      "Derecho urbanístico y administrativo, patrimonio arquitectónico, habilitaciones y trámites ante la Municipalidad de General Pueyrredón (MGP). A cargo de Alcira Giovanardi.",
    icon: "landmark",
    href: "#contacto",
  },
];
