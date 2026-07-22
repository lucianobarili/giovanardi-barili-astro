export interface SpecialistArea {
  title: string;
  description: string;
  note: string;
  icon: "briefcase" | "piggy-bank";
}

export const specialistNetwork: SpecialistArea[] = [
  {
    title: "Laboral",
    description: "Despidos, indemnizaciones, accidentes de trabajo y negociaciones colectivas.",
    note: "A cargo de socia especialista",
    icon: "briefcase",
  },
  {
    title: "Previsional",
    description: "Reajustes de haberes, jubilaciones y pensiones.",
    note: "Derivado a especialista",
    icon: "piggy-bank",
  },
];
