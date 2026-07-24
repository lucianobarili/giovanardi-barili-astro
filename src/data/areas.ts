export type AreaIcon = "signature" | "scroll" | "key-round" | "users" | "building-2";

export interface AreaListSection {
  heading: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
  ordered?: boolean;
}

export interface AreaFaqItem {
  question: string;
  answer: string;
}

export interface Area {
  slug: string;
  navLabel: string;
  homeDescription: string;
  icon: AreaIcon;
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  solves: {
    heading: string;
    items: string[];
  };
  sections: AreaListSection[];
  faq: AreaFaqItem[];
  ctaLabel: string;
}

// Orden por demanda real de consulta, no por afinidad profesional. Urbanismo
// va último en esta grilla, pero tiene su propio lugar destacado en la
// sección "Enfoque Integral" del Home.
export const areas: Area[] = [
  {
    slug: "contratos",
    navLabel: "Contratos",
    homeDescription:
      "Redacción y revisión de contratos comerciales, civiles y societarios. Locaciones, fideicomisos, franquicias, transferencias de fondo de comercio y más.",
    icon: "signature",
    whatsappMessage: "Hola, quisiera consultar por un contrato.",
    seoTitle: "Abogado de contratos en Mar del Plata | Giovanardi Barili",
    seoDescription:
      "Redacción y revisión de contratos comerciales y civiles. Locaciones, fideicomisos, franquicias, fondo de comercio. Asesoramiento en toda la Provincia de Buenos Aires.",
    h1: "Contratos que sostienen tu negocio",
    intro: [
      "Un contrato mal redactado no se nota hasta que hay un conflicto. Y cuando el conflicto llega, lo que define el resultado es lo que quedó escrito — no lo que las partes creyeron acordar.",
      "Trabajamos sobre la instrumentación jurídica de operaciones reales: que el negocio que tenés en la cabeza tenga el andamiaje legal que lo sostenga, con los riesgos identificados y repartidos antes de firmar.",
    ],
    solves: {
      heading: "Qué redactamos y revisamos",
      items: [
        "**Locaciones** habitacionales y comerciales",
        "**Fideicomisos** (de administración, de garantía, inmobiliarios)",
        "**Transferencias de fondo de comercio**, con el procedimiento de oposición de acreedores que exige la ley",
        "**Franquicia, agencia y concesión** — los contratos de distribución que definen cómo llega tu producto al mercado",
        "**Prestación de servicios profesionales**",
        "**Negocios en participación** y acuerdos de colaboración empresaria",
        "**Reconocimiento de deuda** y acuerdos de pago",
        "**Compraventas** de bienes muebles, inmuebles y participaciones societarias",
      ],
    },
    sections: [
      {
        heading: "Cómo trabajamos",
        paragraphs: [
          "No entregamos plantillas. Cada contrato parte de entender el negocio que hay detrás: qué se está intercambiando realmente, dónde está el riesgo, qué pasa si una parte incumple, y cómo se sale del contrato si hay que salir.",
        ],
        listIntro: "Tres momentos donde conviene consultar:",
        ordered: true,
        list: [
          "**Antes de firmar** — es el momento más barato y donde más se puede hacer.",
          "**Antes de renovar** — la renovación es la oportunidad de corregir lo que no funcionó.",
          "**Cuando aparece el conflicto** — más caro, pero todavía hay margen si el contrato está bien hecho.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Sirve un modelo descargado de internet?",
        answer:
          "Sirve para entender la estructura general. No sirve para tu operación concreta: los modelos genéricos no contemplan tu situación impositiva, ni las particularidades de tu actividad, ni el marco normativo local.",
      },
      {
        question: "¿Puedo consultar si ya firmé?",
        answer:
          "Sí. Revisar un contrato firmado permite anticipar problemas, identificar cláusulas inválidas y preparar la estrategia si el conflicto ya empezó.",
      },
      {
        question: "¿Trabajan fuera de Mar del Plata?",
        answer:
          "Sí, en toda la Provincia de Buenos Aires. El asesoramiento contractual se hace íntegramente por videollamada y documentos digitales.",
      },
      // Decisión (Luciano): los honorarios se consultan personalmente, no se
      // publican en el sitio. Por eso no hay una pregunta de "¿Cuánto cuesta?" acá.
    ],
    ctaLabel: "Contanos qué operación tenés en mente",
  },
  {
    slug: "sucesiones",
    navLabel: "Sucesiones",
    homeDescription:
      "Tramitación completa de sucesiones y conflictos entre herederos. Testamentarias, ab intestato, partición de herencia y nulidad de testamento.",
    icon: "scroll",
    whatsappMessage: "Hola, quisiera consultar por una sucesión.",
    seoTitle: "Abogado de sucesiones en Mar del Plata | Giovanardi Barili",
    seoDescription:
      "Sucesiones ab intestato y testamentarias, partición de herencia, nulidad de testamento y conflictos entre herederos. Mar del Plata y toda la Provincia de Buenos Aires.",
    h1: "Sucesiones, sin que el trámite se vuelva otro problema",
    intro: [
      "La sucesión llega en el peor momento posible: cuando la familia está atravesando una pérdida. A eso se suma un trámite judicial que la mayoría de la gente nunca hizo, con plazos y decisiones que hay que tomar sin saber bien cómo.",
      "Tramitamos sucesiones de principio a fin y también intervenimos cuando el problema no es el trámite sino el conflicto entre herederos.",
    ],
    solves: {
      heading: "Qué resolvemos",
      items: [
        "**Sucesiones ab intestato** — cuando no hay testamento, que es la enorme mayoría",
        "**Sucesiones testamentarias** — cuando sí lo hay",
        "**Acciones de nulidad de testamento**, y también la defensa frente a quien la promueve",
        "**Incidentes de partición de herencia** — cuando los herederos no logran acordar cómo se divide",
        "**Incidentes de fijación de canon locativo** — cuando un heredero usa en exclusiva un inmueble del acervo y los demás no perciben nada por eso",
        "**Colación y reducción** — cuando hubo donaciones en vida que afectan las legítimas",
        "**Cesión de derechos hereditarios**",
      ],
    },
    sections: [
      {
        heading: "Cuando la sucesión se convierte en conflicto",
        paragraphs: [
          "Buena parte de las sucesiones no se traban por cuestiones legales sino por cuestiones familiares que encuentran en la sucesión su lugar de expresión. Un hermano vive en la casa y no quiere irse. Otro administró todo durante años sin rendir cuentas. Aparece una donación que nadie sabía.",
          "Esos casos requieren una estrategia distinta a la del trámite ordinario, y también una lectura de cuándo conviene litigar y cuándo conviene negociar. Ambas cosas se evalúan al principio, no sobre la marcha.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuánto tarda una sucesión?",
        answer:
          "Depende de si hay acuerdo entre los herederos, de la cantidad y tipo de bienes, y del juzgado que intervenga. Una sucesión sin conflicto y con documentación completa es sustancialmente más rápida que una con herederos enfrentados. En la primera consulta se puede estimar con bastante precisión según tu caso concreto.",
      },
      {
        question: "¿Hay que hacer la sucesión aunque no haya conflicto?",
        answer:
          "Sí, si hay bienes registrables. Sin sucesión no se puede vender, hipotecar ni transferir un inmueble o un vehículo del causante, ni disponer de fondos bancarios.",
      },
      {
        question: "¿Se puede hacer si vivo en otra ciudad o en el exterior?",
        answer: "Sí. Se tramita con poder y la mayoría de las gestiones son remotas.",
      },
      {
        question: "¿Y si los otros herederos no colaboran?",
        answer:
          "La sucesión se puede promover con la sola voluntad de un heredero. No hace falta el acuerdo de todos para iniciarla.",
      },
    ],
    ctaLabel: "Contanos tu situación",
  },
  {
    slug: "inmuebles",
    navLabel: "Recuperación de inmuebles",
    homeDescription:
      "Desalojos, acciones reivindicatorias y usucapión. Cuando necesitás recuperar tu propiedad o regularizar un título.",
    icon: "key-round",
    whatsappMessage: "Hola, quisiera consultar por un desalojo o un tema de inmuebles.",
    seoTitle: "Desalojos y usucapión en Mar del Plata | Giovanardi Barili",
    seoDescription:
      "Juicios de desalojo, acciones reivindicatorias y usucapión. Recuperá tu inmueble o regularizá tu título. Mar del Plata y toda la Provincia de Buenos Aires.",
    h1: "Recuperar tu inmueble, o regularizar el que ya es tuyo",
    intro: [
      "Un inmueble ocupado por alguien que no paga, o que se niega a irse cuando terminó el contrato, deja de ser un activo y pasa a ser un problema que además cuesta plata todos los meses.",
      "Del otro lado está la situación inversa: quien ocupó y mejoró un inmueble durante años, lo trata como propio, pero no tiene título que lo respalde.",
    ],
    solves: {
      heading: "Qué resolvemos",
      items: [
        "**Juicios de desalojo** — por falta de pago, por vencimiento de contrato, por intrusión, por comodato precario",
        "**Acciones reivindicatorias** — para recuperar la posesión de un inmueble frente a quien lo detenta sin derecho",
        "**Usucapión (prescripción adquisitiva)** — para obtener título sobre un inmueble poseído de forma pública, pacífica y continua durante el plazo legal",
        "**Acciones posesorias e interdictos**",
        "**Defensa** en todas las anteriores, cuando estás del otro lado",
      ],
    },
    sections: [
      {
        heading: "Sobre el desalojo, con franqueza",
        paragraphs: [
          "El desalojo es un juicio, no un trámite administrativo, y tiene tiempos judiciales. Nadie serio te puede prometer un plazo. Lo que sí determina mucho el resultado es la calidad del contrato y de la prueba documental: un contrato bien redactado, con la instrumentación correcta, acorta el camino de manera significativa.",
          "Por eso, si sos propietario y alquilás, la conversación importante es antes de firmar, no después de que el inquilino dejó de pagar.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Puedo desalojar sin contrato escrito?",
        answer:
          "Sí, aunque es más complejo: hay que acreditar la relación y sus términos por otros medios. Es de los casos donde más incide la calidad de la prueba.",
      },
      {
        question: "¿Cuánto tiempo de posesión hace falta para usucapir?",
        answer:
          "El plazo general es de veinte años para la prescripción larga, con supuestos más breves para casos específicos. Lo determinante, además del tiempo, es poder acreditarlo: la posesión hay que probarla con documentación concreta a lo largo de todo el período.",
      },
      {
        question: "¿Sirve la mediación previa?",
        answer:
          "En muchos casos sí, y es obligatoria antes de iniciar buena parte de estos juicios. Bien usada, puede resolver el conflicto en semanas en lugar de años.",
      },
    ],
    ctaLabel: "Contanos qué está pasando con el inmueble",
  },
  {
    slug: "familia-patrimonio",
    navLabel: "Familia y patrimonio",
    homeDescription:
      "Divorcios, compensación económica y liquidación de la sociedad conyugal. Especial atención cuando hay empresas o participaciones societarias en juego.",
    icon: "users",
    whatsappMessage: "Hola, quisiera consultar por un tema de familia.",
    seoTitle: "Divorcios y liquidación de bienes en Mar del Plata | Giovanardi Barili",
    seoDescription:
      "Divorcios, compensación económica y liquidación de la sociedad conyugal. Casos con empresas y participaciones societarias. Mar del Plata y toda la Provincia de Buenos Aires.",
    h1: "Cuando se termina el matrimonio, empieza la discusión patrimonial",
    intro: [
      "El divorcio en sí, desde la reforma del Código Civil y Comercial, es un trámite relativamente sencillo: no hace falta invocar causa ni probar culpas. Lo complejo, lo que efectivamente se discute y lo que define el futuro económico de cada uno, es el patrimonio.",
      "Ahí es donde ponemos el foco.",
    ],
    solves: {
      heading: "Qué resolvemos",
      items: [
        "**Divorcios**, unilaterales y de común acuerdo",
        "**Compensación económica** — el reclamo de quien quedó en desequilibrio económico manifiesto por causa del matrimonio y su ruptura",
        "**Liquidación de la sociedad conyugal** — determinar qué es ganancial, qué es propio, y cómo se divide",
        "**Convenios reguladores** y acuerdos de partición",
        "**Atribución de la vivienda familiar**",
      ],
    },
    sections: [
      {
        heading: "Cuando hay una empresa en el medio",
        paragraphs: [
          "Este es nuestro terreno más específico, y donde muchos casos se complican.",
          "Cuando en el patrimonio conyugal hay una sociedad, una participación accionaria o un negocio familiar, la discusión deja de ser exclusivamente de derecho de familia y pasa a cruzarse con derecho societario: cómo se valúa la participación, si hubo maniobras para licuarla, qué pasa con los otros socios que no son parte del conflicto matrimonial, y cómo se instrumenta la salida sin destruir la empresa.",
          "Hemos intervenido en casos donde esas dos materias se entrecruzan. Es una combinación poco frecuente y es exactamente donde la formación en derecho empresario cambia el resultado.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Necesito el acuerdo de mi cónyuge para divorciarme?",
        answer: "No. El divorcio puede pedirse unilateralmente y no requiere expresar causa.",
      },
      {
        question: "¿La compensación económica es lo mismo que los alimentos?",
        answer:
          "No. Son figuras distintas, con requisitos y finalidades diferentes. La compensación económica busca corregir un desequilibrio patrimonial producido por el matrimonio; no es una prestación asistencial.",
      },
      {
        question: "¿Se puede acordar todo sin juicio?",
        answer:
          "En buena medida sí, y suele ser preferible: un convenio bien redactado es más rápido, más barato y más previsible que litigar. Pero para acordar bien hay que saber primero qué te corresponde.",
      },
    ],
    // TODO (Luciano): esta página hoy promete solo divorcio + patrimonio. Si el
    // estudio también toma alimentos, cuidado personal y régimen de comunicación,
    // hay que sumarlo. Si no, así está bien tal como está.
    ctaLabel: "Contanos tu situación",
  },
  {
    slug: "sociedades",
    navLabel: "Sociedades y empresas",
    homeDescription:
      "Elección de estructura societaria, conflictos entre socios, transformaciones, escisiones y compraventa de acciones.",
    icon: "building-2",
    whatsappMessage: "Hola, quisiera consultar por un tema societario.",
    seoTitle: "Abogado societario en Mar del Plata | Giovanardi Barili",
    seoDescription:
      "Estructura societaria, conflictos entre socios, transformación, escisión y disolución de sociedades. Compraventa de acciones y participaciones.",
    h1: "La estructura correcta, antes y después del conflicto",
    intro: [
      "Dos momentos concentran casi todas las consultas societarias. El primero es al principio: qué tipo de sociedad conviene para el negocio que se quiere armar, cómo se reparte, qué pasa si uno quiere salir. El segundo es cuando algo se rompió entre los socios.",
      "El primero es mucho más barato que el segundo. Y buena parte de los conflictos del segundo momento se originan en decisiones no tomadas en el primero.",
    ],
    solves: {
      heading: "Qué resolvemos",
      items: [
        "**Elección de estructura societaria** — evaluar qué tipo social se adecua al negocio real, su escala y sus riesgos",
        "**Constitución de sociedades** y redacción de estatutos",
        "**Pactos de socios** — lo que el estatuto no dice y termina definiendo todo",
        "**Conflictos societarios** — abuso de mayoría, exclusión de socios, impugnación de asambleas y decisiones, rendición de cuentas",
        "**Responsabilidad de administradores y directores**",
        "**Transformación, fusión, escisión y disolución**",
        "**Compraventa de acciones y participaciones sociales**, incluida la valuación y la instrumentación de la operación",
      ],
    },
    sections: [
      {
        heading: "El conflicto entre socios",
        paragraphs: [
          "Es de los conflictos más destructivos que existen, porque mientras se discute, la empresa —que es la fuente de ingresos de todos— sigue funcionando mal o deja de funcionar.",
          "La primera pregunta en estos casos no es jurídica sino estratégica: si el objetivo es recuperar el control, salir en las mejores condiciones posibles, o preservar el negocio por encima de la disputa. Cada objetivo lleva a un camino distinto, y elegirlo temprano evita gastar recursos en la dirección equivocada.",
        ],
      },
    ],
    faq: [
      {
        question: "Somos dos socios al 50% y no nos ponemos de acuerdo. ¿Qué se puede hacer?",
        answer:
          "El empate societario tiene salidas previstas, y también las tiene el estatuto si fue bien redactado. Cuando no lo fue, hay vías judiciales. Es una de las situaciones donde más incide haber previsto el escenario al momento de constituir.",
      },
      {
        question: "¿Puedo obligar a un socio a que me compre mi parte?",
        answer:
          "Depende del tipo societario, del estatuto y de las circunstancias. Existen mecanismos de receso y de exclusión con requisitos específicos. Es una consulta que amerita ver la documentación concreta.",
      },
      {
        question: "Ya tengo contador. ¿Para qué necesito abogado?",
        answer:
          "Son funciones distintas y complementarias. El contador se ocupa de lo impositivo y lo contable; el abogado, de la estructura jurídica, de los derechos y obligaciones entre socios, y de la defensa cuando eso se discute. Los mejores resultados se dan cuando ambos trabajan coordinados.",
      },
    ],
    ctaLabel: "Contanos qué necesita tu empresa",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
