import type { LandingFaq, LandingSituation, LandingStep } from "./revisionContratos";

export interface IncumplimientoContractualLanding {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  tension: string;
  solution: string;
  cta: {
    primary: string;
    middle: string;
    final: string;
    short: string;
    floating: string;
    message: string;
  };
  microcopy: string;
  situations: LandingSituation[];
  reviewItems: string[];
  outcomes: string[];
  steps: LandingStep[];
  faq: LandingFaq[];
}

export const incumplimientoContractual: IncumplimientoContractualLanding = {
  slug: "incumplimiento-contractual-mar-del-plata",
  seoTitle: "Incumplimiento Contractual en Mar del Plata | Giovanardi Barili",
  seoDescription:
    "¿Firmaste un contrato y la otra parte no cumple? Revisamos qué se acordó, qué ocurrió y qué alternativas tenés para avanzar. Mar del Plata y online.",
  eyebrow: "INCUMPLIMIENTO CONTRACTUAL · MAR DEL PLATA",
  h1: "¿Ya firmaste y la otra parte no está cumpliendo?",
  tension:
    "Esperar a que se acomode solo puede hacerte perder plata y tiempo.",
  solution:
    "Revisamos qué firmaste, qué no se está cumpliendo y qué alternativas tenés para hacer valer tus derechos",
  cta: {
    primary: "Contanos qué no se está cumpliendo por WhatsApp",
    middle: "Contanos qué no se está cumpliendo",
    final: "Contanos qué pasó por WhatsApp",
    short: "Contanos qué no se cumple",
    floating: "WhatsApp · Contar incumplimiento",
    message:
      "Hola, tengo un contrato firmado y la otra parte no está cumpliendo. Quisiera contarles qué pasó y saber cómo avanzar.",
  },
  microcopy:
    "Te respondemos en el día hábil para entender tu situación, decirte qué documentación necesitamos y cómo podemos avanzar.",
  situations: [
    {
      id: "plazo_vencido",
      title: "El plazo venció y todavía no cumplieron",
      description:
        "Había una fecha acordada, pero pasó y la obligación sigue pendiente.",
      messageVariant: "incumplimiento_plazo_vencido",
      whatsappMessage:
        "Hola, tengo un contrato con un plazo vencido y la otra parte todavía no cumplió. Quisiera saber cómo avanzar.",
    },
    {
      id: "cumplimiento_distinto",
      title: "Cumplieron, pero no como habían acordado",
      description:
        "Recibiste algo distinto, incompleto o en condiciones diferentes de las previstas.",
      messageVariant: "incumplimiento_cumplimiento_distinto",
      whatsappMessage:
        "Hola, tengo un contrato y la otra parte cumplió de una forma distinta a la acordada. Quisiera revisar la situación.",
    },
    {
      id: "promesas_sin_resolver",
      title: "Te siguen prometiendo que lo van a resolver",
      description:
        "Las fechas cambian, las respuestas se repiten y el problema sigue abierto.",
      messageVariant: "incumplimiento_promesas",
      whatsappMessage:
        "Hola, tengo un incumplimiento contractual y me siguen dando nuevas fechas sin resolverlo. Quisiera saber cómo avanzar.",
    },
    {
      id: "reclamar_con_claridad",
      title: "Querés reclamar sin actuar a ciegas",
      description:
        "Antes de intimar, negociar o terminar la relación, querés entender qué dice realmente el contrato.",
      messageVariant: "incumplimiento_antes_de_reclamar",
      whatsappMessage:
        "Hola, tengo un problema con un contrato firmado y quisiera saber qué alternativas tengo antes de avanzar.",
    },
  ],
  reviewItems: [
    "qué obligación asumió cada parte",
    "qué plazos quedaron establecidos",
    "qué parte del acuerdo no se cumplió",
    "si hubo cumplimiento parcial",
    "qué comunicaciones existen",
    "qué documentación permite reconstruir lo ocurrido",
    "qué prevé el contrato si algo falla",
    "qué alternativas existen para continuar, reclamar o cerrar la relación",
  ],
  outcomes: [
    "Entender qué se incumplió.",
    "Saber qué documentación importa.",
    "Identificar qué podés plantear.",
    "Decidir el próximo paso con más claridad.",
  ],
  steps: [
    {
      title: "Mandanos el contrato",
      description:
        "Sumá mensajes, comprobantes, intimaciones u otros documentos relacionados con lo ocurrido.",
    },
    {
      title: "Contanos qué pasó",
      description:
        "Explicanos brevemente qué debía pasar, qué ocurrió realmente y desde cuándo está pendiente.",
    },
    {
      title: "Te indicamos el próximo paso",
      description:
        "Te respondemos en el día hábil para decirte qué necesitamos revisar y cómo podemos avanzar.",
    },
  ],
  faq: [
    {
      question: "¿Qué tengo que enviar para empezar?",
      answer:
        "El contrato y una explicación breve de lo ocurrido. También pueden ser relevantes los comprobantes, mensajes, correos, intimaciones u otros documentos vinculados con el incumplimiento.",
    },
    {
      question: "¿Conviene consultar antes de intimar?",
      answer:
        "Sí. Revisar primero qué se acordó, qué prueba existe y qué objetivo buscás ayuda a definir mejor el contenido y el momento del reclamo.",
    },
    {
      question: "¿Qué pasa si el incumplimiento es parcial?",
      answer:
        "Analizamos qué se debía cumplir, qué se hizo efectivamente y qué parte de la obligación sigue pendiente.",
    },
    {
      question: "¿Pueden revisar un contrato que preparó la otra parte?",
      answer:
        "Sí. Lo importante es relacionar lo que dice el documento con la operación y con lo que ocurrió después de firmarlo.",
    },
    {
      question: "¿Y si el contrato no dice qué hacer ante el incumplimiento?",
      answer:
        "Aun así se puede analizar el contrato, la operación, las obligaciones asumidas y la documentación disponible para identificar alternativas.",
    },
    {
      question: "¿Cómo se definen los honorarios?",
      answer:
        "La orientación inicial sirve para identificar la información necesaria y el posible próximo paso. Si el estudio puede intervenir, antes de comenzar informamos el alcance del trabajo y sus honorarios.",
    },
    {
      question: "¿Trabajan solamente en Mar del Plata?",
      answer:
        "La atención puede ser presencial en Mar del Plata con cita previa u online para asuntos dentro de la Provincia de Buenos Aires.",
    },
  ],
};
