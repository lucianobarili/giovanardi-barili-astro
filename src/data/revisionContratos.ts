export interface LandingSituation {
  id: string;
  title: string;
  description: string;
  messageVariant: string;
  whatsappMessage: string;
}

export interface LandingStep {
  title: string;
  description: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface RevisionContratosLanding {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  tensionLead: string;
  tensionStrong: string;
  solution: string;
  cta: {
    primary: string;
    middle: string;
    short: string;
    message: string;
  };
  microcopy: string;
  situations: LandingSituation[];
  reviewItems: string[];
  outcomes: string[];
  steps: LandingStep[];
  faq: LandingFaq[];
}

export const revisionContratos: RevisionContratosLanding = {
  slug: "revision-contratos-mar-del-plata",
  seoTitle: "Revisión de Contratos en Mar del Plata | Giovanardi Barili",
  seoDescription:
    "¿Tenés un contrato para firmar? Revisamos qué estás aceptando y qué conviene aclarar antes de quedar obligado. Atención en Mar del Plata y online.",
  eyebrow: "REVISIÓN DE CONTRATOS · MAR DEL PLATA",
  h1: "¿Te mandaron un contrato y ya están esperando que firmes?",
  tensionLead: "El precio puede estar acordado.",
  tensionStrong: "Las condiciones todavía no.",
  solution:
    "Revisamos qué estás aceptando, qué conviene aclarar y qué puntos conviene negociar antes de firmar.",
  cta: {
    primary: "Mandanos el contrato por WhatsApp",
    middle: "Mandanos el contrato para empezar",
    short: "Enviar contrato",
    message:
      "Hola, tengo un contrato que quisiera revisar antes de firmar y quiero saber cómo avanzar.",
  },
  microcopy:
    "Te respondemos en el día hábil para entender tu situación, decirte qué necesitamos revisar y cómo podemos avanzar.",
  situations: [
    {
      id: "contrato_recibido_para_firmar",
      title: "Te mandaron un contrato para firmar",
      description:
        "La otra parte preparó el documento y querés entender qué estás aceptando antes de responder.",
      messageVariant: "situacion_contrato_recibido",
      whatsappMessage:
        "Hola, me mandaron un contrato para firmar y quiero entender qué estoy aceptando antes de responder.",
    },
    {
      id: "operacion_sin_contrato",
      title: "Acordaste una operación, pero falta dejarla por escrito",
      description:
        "El precio puede estar claro, pero quedan pendientes los plazos, las obligaciones y qué pasa si algo falla.",
      messageVariant: "situacion_operacion_sin_contrato",
      whatsappMessage:
        "Hola, acordé una operación pero todavía falta dejarla por escrito y quiero saber cómo avanzar antes de firmar.",
    },
    {
      id: "contrato_no_refleja_acuerdo",
      title: "El contrato no refleja lo que hablaron",
      description:
        "Hay condiciones o responsabilidades que no aparecen como las habían conversado.",
      messageVariant: "situacion_no_refleja_acuerdo",
      whatsappMessage:
        "Hola, el contrato que me enviaron no refleja lo que hablamos y quiero revisarlo antes de firmar.",
    },
    {
      id: "negociar_antes_de_firmar",
      title: "Querés negociar antes de quedar obligado",
      description:
        "Necesitás identificar qué conviene modificar, aclarar o incorporar antes de firmar.",
      messageVariant: "situacion_negociar_antes_de_firmar",
      whatsappMessage:
        "Hola, quiero revisar qué puntos conviene negociar en un contrato antes de firmar.",
    },
  ],
  reviewItems: [
    "qué entrega o aporta cada parte",
    "cuánto, cómo y cuándo se paga",
    "qué plazos deben cumplirse",
    "qué garantías se ofrecen",
    "qué pasa si alguien no cumple",
    "cómo puede modificarse o terminarse",
  ],
  outcomes: [
    "Entender qué obligaciones asumís.",
    "Detectar qué condiciones conviene aclarar.",
    "Saber qué puntos podés negociar.",
    "Comprobar si el documento refleja lo acordado.",
  ],
  steps: [
    {
      title: "Mandanos el contrato o borrador",
      description: "Podés enviarlo por WhatsApp en el formato en que lo hayas recibido.",
    },
    {
      title: "Contanos qué estás por hacer",
      description:
        "Explicanos brevemente la operación, qué te preocupa y si tenés una fecha para firmar.",
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
        "El contrato o borrador y una explicación breve de la operación. Si hay presupuestos, mensajes u otros documentos que ayuden a entender lo acordado, también pueden ser relevantes.",
    },
    {
      question: "¿Pueden revisar un contrato que preparó la otra parte?",
      answer:
        "Sí. Podemos analizar qué obligaciones establece, qué puntos están poco claros y qué convendría negociar antes de firmar.",
    },
    {
      question: "¿La revisión incluye modificar o redactar el contrato?",
      answer:
        "Depende de la operación. Después de conocer el documento podemos definir si alcanza con revisarlo, si conviene proponer cambios o si hace falta redactar una versión diferente.",
    },
    {
      question: "¿Cómo se definen los honorarios?",
      answer:
        "La orientación inicial sirve para identificar la información necesaria y el posible próximo paso. Si el estudio puede intervenir, antes de comenzar informamos el alcance del trabajo y sus honorarios.",
    },
    {
      question: "¿Puedo consultar si ya firmé?",
      answer:
        "Sí. Si algo no se está cumpliendo, el análisis parte de lo acordado, de los hechos y de la documentación disponible. Esa situación corresponde a incumplimientos contractuales.",
    },
    {
      question: "¿Trabajan solamente en Mar del Plata?",
      answer:
        "La atención puede ser presencial en Mar del Plata con cita previa u online para asuntos dentro de la Provincia de Buenos Aires.",
    },
    {
      question: "¿Sirve un modelo de contrato descargado de internet?",
      answer:
        "Puede servir como punto de partida, pero no necesariamente contempla la operación, las condiciones negociadas ni las obligaciones concretas de las partes.",
    },
  ],
};
