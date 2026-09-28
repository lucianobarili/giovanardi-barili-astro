export interface ServiceLanding {
  slug: string;
  landingId: string;
  intent: string;
  messageVariant: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  tensionLead: string;
  tensionStrong: string;
  solution: string;
  primaryCta: string;
  shortCta: string;
  whatsappMessage: string;
  microcopy: string;
  situations: { id: string; title: string; description: string; message: string }[];
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismBody: string[];
  checklistTitle: string;
  checklist: string[];
  steps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  finalTitle: string;
  finalBody: string;
}

export const serviceLandings = {
  divorcios: {
    slug: "divorcios-mar-del-plata",
    landingId: "divorcios",
    intent: "consulta_divorcio",
    messageVariant: "divorcio_inicial",
    seoTitle: "Abogado de Divorcios en Mar del Plata | Giovanardi Barili",
    seoDescription: "Asesoramiento en divorcios, división de bienes y compensación económica en Mar del Plata. Contanos tu situación y conocé los próximos pasos.",
    eyebrow: "DIVORCIOS · MAR DEL PLATA",
    h1: "¿Querés divorciarte y necesitás saber cómo empezar?",
    tensionLead: "El divorcio puede ser simple.",
    tensionStrong: "Las decisiones patrimoniales requieren cuidado.",
    solution: "Analizamos tu situación, los bienes involucrados y si existe posibilidad de acuerdo para explicarte qué camino corresponde y qué documentación necesitás.",
    primaryCta: "Consultar por mi divorcio",
    shortCta: "Consultar por WhatsApp",
    whatsappMessage: "Hola, quisiera consultar por un divorcio en Mar del Plata.",
    microcopy: "La primera orientación es confidencial. Respondemos en el día hábil.",
    situations: [
      { id: "divorcio_unilateral", title: "Quiero divorciarme, pero la otra persona no está de acuerdo", description: "El divorcio puede solicitarse de manera unilateral, sin expresar una causa.", message: "Hola, quiero iniciar un divorcio y la otra persona no está de acuerdo." },
      { id: "divorcio_acuerdo", title: "Estamos de acuerdo y queremos resolverlo ordenadamente", description: "Un convenio claro permite definir bienes, vivienda y otras consecuencias de la ruptura.", message: "Hola, queremos iniciar un divorcio de común acuerdo." },
      { id: "division_bienes", title: "Hay bienes, una empresa o participaciones para dividir", description: "Primero hay que identificar qué integra el patrimonio y cómo puede valuarse y distribuirse.", message: "Hola, necesito consultar por un divorcio con bienes o una empresa para dividir." },
      { id: "compensacion_economica", title: "La separación me dejó en una situación económica desigual", description: "Evaluamos si existen los requisitos y los plazos para reclamar una compensación económica.", message: "Hola, quisiera saber si corresponde una compensación económica después del divorcio." },
    ],
    mechanismEyebrow: "Qué analizamos",
    mechanismTitle: "Primero ordenamos la situación. Después definimos la estrategia.",
    mechanismBody: ["No todos los divorcios requieren el mismo trabajo. El punto de partida es saber si hay acuerdo y qué cuestiones económicas deben resolverse.", "Cuando existen sociedades o negocios familiares, incorporamos una mirada de derecho empresario para evitar que la división patrimonial perjudique innecesariamente la actividad."],
    checklistTitle: "Revisamos con vos",
    checklist: ["Si el pedido será unilateral o conjunto", "Qué bienes son propios y cuáles podrían ser gananciales", "Si corresponde evaluar una compensación económica", "Qué debería incluir el convenio regulador", "Cómo documentar y ejecutar lo acordado"],
    steps: [
      { title: "Contanos tu situación", description: "Indicá si hay acuerdo, si existen bienes y qué es lo que más te preocupa." },
      { title: "Revisamos la información", description: "Identificamos la documentación necesaria y las cuestiones que deben resolverse." },
      { title: "Definimos el próximo paso", description: "Te explicamos el alcance, la alternativa disponible y los honorarios antes de comenzar." },
    ],
    faq: [
      { question: "¿Necesito que mi cónyuge esté de acuerdo?", answer: "No. El divorcio puede solicitarse unilateralmente y no hace falta expresar una causa." },
      { question: "¿El divorcio divide automáticamente los bienes?", answer: "No necesariamente. El divorcio disuelve el vínculo, pero la liquidación y división del patrimonio puede requerir un acuerdo o un trámite posterior." },
      { question: "¿Qué es la compensación económica?", answer: "Es una figura diferente de los alimentos. Puede corresponder cuando la ruptura produce un desequilibrio económico manifiesto vinculado con el matrimonio y tiene plazos específicos para reclamarla." },
      { question: "¿Puedo consultar si vivo fuera de Mar del Plata?", answer: "Sí. La atención puede realizarse online para asuntos dentro de la Provincia de Buenos Aires." },
    ],
    finalTitle: "Podés empezar con una conversación clara y confidencial.",
    finalBody: "Contanos si hay acuerdo, qué bienes existen y qué necesitás resolver. Te indicaremos qué información hace falta para evaluar el caso.",
  },
  sucesiones: {
    slug: "sucesiones-mar-del-plata", landingId: "sucesiones", intent: "consulta_sucesion", messageVariant: "sucesion_inicial",
    seoTitle: "Abogado de Sucesiones en Mar del Plata | Giovanardi Barili",
    seoDescription: "Tramitación de sucesiones y conflictos entre herederos en Mar del Plata. Recibí orientación sobre documentación, bienes y próximos pasos.",
    eyebrow: "SUCESIONES · MAR DEL PLATA", h1: "¿Necesitás iniciar una sucesión y no sabés por dónde empezar?",
    tensionLead: "Hay documentos, bienes y plazos que ordenar.", tensionStrong: "No tenés que resolverlo sin orientación.",
    solution: "Revisamos quiénes son los herederos, qué bienes existen y si hay acuerdo para indicarte la documentación y el camino adecuado.",
    primaryCta: "Consultar por una sucesión", shortCta: "Consultar por WhatsApp", whatsappMessage: "Hola, quisiera consultar por una sucesión en Mar del Plata.", microcopy: "Podés escribirnos aunque todavía no tengas toda la documentación.",
    situations: [
      { id: "iniciar_sucesion", title: "Necesito iniciar la sucesión", description: "Te ayudamos a identificar herederos, bienes y documentación para comenzar.", message: "Hola, necesito iniciar una sucesión y quisiera saber qué documentación hace falta." },
      { id: "vender_inmueble", title: "Queremos vender un inmueble heredado", description: "La sucesión permite inscribir o transferir los bienes del causante.", message: "Hola, necesitamos hacer una sucesión para poder vender un inmueble." },
      { id: "conflicto_herederos", title: "No hay acuerdo entre los herederos", description: "Evaluamos el conflicto y las alternativas de negociación o intervención judicial.", message: "Hola, tengo un conflicto con otros herederos en una sucesión." },
      { id: "heredero_ocupa", title: "Un heredero usa un bien y los demás no reciben nada", description: "Puede ser necesario ordenar la administración, el uso o la partición del patrimonio.", message: "Hola, un heredero usa en exclusiva un bien de la sucesión y necesito asesoramiento." },
    ],
    mechanismEyebrow: "Cómo lo abordamos", mechanismTitle: "Una sucesión ordenada empieza por reconstruir el patrimonio.", mechanismBody: ["Reunimos la información sobre la persona fallecida, sus vínculos familiares y los bienes registrables o derechos involucrados.", "Si existe un conflicto, definimos desde el inicio qué puede negociarse y qué requiere una presentación judicial."],
    checklistTitle: "Para evaluar el caso", checklist: ["Partidas que acreditan los vínculos", "Datos del último domicilio del causante", "Títulos y datos de inmuebles o vehículos", "Información sobre testamentos o cesiones", "Situación y acuerdo entre los herederos"],
    steps: [{ title: "Contanos quién falleció", description: "Indicá el vínculo, el último domicilio y quiénes serían los herederos." }, { title: "Identificamos bienes y documentos", description: "Te damos una lista concreta según la composición del patrimonio." }, { title: "Te explicamos el trámite", description: "Definimos jurisdicción, alcance y honorarios antes de iniciar." }],
    faq: [{ question: "¿Puede iniciar la sucesión un solo heredero?", answer: "Sí. No hace falta que todos estén de acuerdo para iniciar el proceso, aunque deberán ser citados." }, { question: "¿Cuánto tarda una sucesión?", answer: "Depende de la documentación, los bienes, el juzgado y si existe conflicto. Después de revisar el caso podemos brindar una estimación razonable, no una fecha garantizada." }, { question: "¿Se puede vender un inmueble sin sucesión?", answer: "Para transferir un inmueble del causante normalmente es necesario tramitar la sucesión y obtener la documentación judicial correspondiente." }, { question: "¿Puedo hacerla si vivo en otra ciudad?", answer: "Sí. Muchas gestiones pueden realizarse a distancia y, según el caso, mediante poder." }],
    finalTitle: "Empecemos por saber quiénes heredan y qué bienes existen.", finalBody: "No hace falta que tengas todo resuelto. Con los datos iniciales podemos indicarte qué documentación reunir y cuál sería el próximo paso.",
  },
  desalojos: {
    slug: "desalojos-mar-del-plata", landingId: "desalojos", intent: "consulta_desalojo", messageVariant: "desalojo_inicial",
    seoTitle: "Abogado de Desalojos en Mar del Plata | Giovanardi Barili", seoDescription: "Asesoramiento en desalojos por falta de pago, vencimiento de contrato u ocupación en Mar del Plata. Evaluamos documentación y próximos pasos.",
    eyebrow: "DESALOJOS · MAR DEL PLATA", h1: "¿Necesitás recuperar un inmueble ocupado?", tensionLead: "Cada mes que pasa tiene un costo.", tensionStrong: "La estrategia depende de la prueba disponible.",
    solution: "Analizamos el contrato, las comunicaciones y el motivo de la ocupación para definir intimaciones, mediación y, si corresponde, la vía judicial.", primaryCta: "Consultar por un desalojo", shortCta: "Consultar por WhatsApp", whatsappMessage: "Hola, necesito consultar por un desalojo en Mar del Plata.", microcopy: "Podés enviarnos el contrato y una síntesis de lo ocurrido por WhatsApp.",
    situations: [{ id: "falta_pago", title: "El inquilino dejó de pagar", description: "Revisamos deuda, contrato, garantías e intimaciones realizadas.", message: "Hola, necesito asesoramiento porque el inquilino dejó de pagar." }, { id: "contrato_vencido", title: "El contrato terminó y no entrega el inmueble", description: "Evaluamos la documentación y los pasos previos para reclamar la restitución.", message: "Hola, el contrato de alquiler venció y no me entregan el inmueble." }, { id: "sin_contrato", title: "La ocupación no tiene contrato escrito", description: "La falta de contrato cambia la prueba necesaria, pero no impide analizar una acción.", message: "Hola, necesito recuperar un inmueble ocupado sin contrato escrito." }, { id: "comodato_intrusion", title: "Presté el inmueble o fue ocupado sin permiso", description: "Determinamos el origen de la ocupación y la vía adecuada para recuperar la tenencia.", message: "Hola, presté un inmueble o fue ocupado sin autorización y necesito recuperarlo." }],
    mechanismEyebrow: "Qué define el camino", mechanismTitle: "El desalojo se prepara con documentos, hechos y una intimación correcta.", mechanismBody: ["Antes de iniciar, reconstruimos cómo comenzó la ocupación, qué se pactó y qué incumplimiento permite reclamar la restitución.", "No prometemos plazos judiciales. Sí trabajamos para presentar el caso con la documentación y la secuencia de actuaciones necesarias."], checklistTitle: "Revisamos", checklist: ["Contrato de locación, comodato u otro título", "Pagos, deuda y comprobantes", "Mensajes e intimaciones previas", "Garantías y datos de ocupantes", "Estado del inmueble y urgencias concretas"],
    steps: [{ title: "Enviá la documentación", description: "Contrato, mensajes, intimaciones y comprobantes disponibles." }, { title: "Reconstruimos la ocupación", description: "Identificamos su origen, el incumplimiento y la prueba necesaria." }, { title: "Definimos cómo avanzar", description: "Te explicamos instancias previas, vía posible, alcance y honorarios." }],
    faq: [{ question: "¿Se puede desalojar sin contrato escrito?", answer: "Puede ser posible, pero requiere acreditar por otros medios cómo comenzó y en qué condiciones continúa la ocupación." }, { question: "¿Puedo cambiar la cerradura o retirar pertenencias?", answer: "Tomar medidas por cuenta propia puede agravar el conflicto y generar responsabilidades. Conviene evaluar la vía legal antes de actuar." }, { question: "¿Cuánto demora un desalojo?", answer: "Es un proceso judicial y su duración depende del caso, las defensas y el juzgado. Nadie puede garantizar un plazo exacto." }, { question: "¿La mediación es obligatoria?", answer: "Depende de la acción y de las circunstancias. En muchos casos integra la instancia previa y también puede abrir una solución más rápida." }],
    finalTitle: "Cuanto antes revisemos la documentación, antes sabrás qué camino existe.", finalBody: "Mandanos el contrato —si lo hay— y contanos desde cuándo está ocupado el inmueble y qué ocurrió.",
  },
  socios: {
    slug: "conflictos-entre-socios-mar-del-plata", landingId: "conflictos_socios", intent: "consulta_conflicto_societario", messageVariant: "conflicto_socios_inicial",
    seoTitle: "Abogado para Conflictos entre Socios en Mar del Plata", seoDescription: "Asesoramiento ante conflictos entre socios, bloqueo de decisiones y salida societaria en Mar del Plata. Evaluamos documentación y estrategia.",
    eyebrow: "CONFLICTOS ENTRE SOCIOS · MAR DEL PLATA", h1: "¿El conflicto entre socios está frenando la empresa?", tensionLead: "La discusión no queda entre dos personas.", tensionStrong: "También puede dañar el negocio que construyeron.",
    solution: "Revisamos estatuto, participaciones, decisiones y documentación para definir si conviene recuperar control, negociar una salida o proteger la continuidad de la empresa.", primaryCta: "Consultar por un conflicto societario", shortCta: "Consultar por WhatsApp", whatsappMessage: "Hola, necesito consultar por un conflicto entre socios.", microcopy: "La consulta es confidencial. No contactamos a la otra parte sin tu autorización.",
    situations: [{ id: "bloqueo_50_50", title: "Somos socios al 50% y no podemos decidir", description: "Analizamos estatuto, órganos sociales y alternativas frente al bloqueo.", message: "Hola, somos socios al 50% y el conflicto está bloqueando las decisiones." }, { id: "exclusion_informacion", title: "Me excluyen de decisiones o información", description: "Revisamos derechos del socio, libros, convocatorias y decisiones adoptadas.", message: "Hola, soy socio y me están excluyendo de decisiones o información de la empresa." }, { id: "salida_sociedad", title: "Quiero salir o comprar la participación del otro socio", description: "La salida exige definir mecanismo, valuación, pago y garantías.", message: "Hola, necesito evaluar una salida o compra de participación en una sociedad." }, { id: "administracion_irregular", title: "Sospecho una administración irregular", description: "Ordenamos los hechos y la documentación antes de decidir medidas societarias o judiciales.", message: "Hola, necesito asesoramiento por posibles irregularidades en la administración de una sociedad." }],
    mechanismEyebrow: "Estrategia societaria", mechanismTitle: "Antes de litigar, definimos qué resultado necesita la empresa y qué necesitás vos.", mechanismBody: ["Recuperar el control, vender una participación o preservar el negocio son objetivos diferentes. Cada uno requiere herramientas y tiempos distintos.", "La estrategia parte del estatuto, los pactos, las actas, la información contable y la conducta concreta de socios y administradores."], checklistTitle: "Documentación útil", checklist: ["Estatuto o contrato social y reformas", "Pactos de socios", "Actas y convocatorias", "Balances e información contable disponible", "Mensajes, intimaciones y propuestas previas"],
    steps: [{ title: "Contanos qué cambió", description: "Explicá el conflicto, la participación de cada socio y el impacto en el negocio." }, { title: "Revisamos la estructura", description: "Analizamos documentos, decisiones y derechos involucrados." }, { title: "Trazamos alternativas", description: "Comparamos negociación, medidas societarias y vías judiciales según el objetivo." }],
    faq: [{ question: "¿Qué pasa si somos socios al 50%?", answer: "El estatuto y los acuerdos pueden prever mecanismos de desempate o salida. Si no existen, hay alternativas societarias y judiciales que deben evaluarse según el caso." }, { question: "¿Puedo obligar al otro socio a comprar mi parte?", answer: "No hay una respuesta general. Depende del tipo societario, el estatuto, los acuerdos y los hechos que originaron el conflicto." }, { question: "¿Cómo se determina el valor de una participación?", answer: "La valuación puede requerir información contable y criterios financieros, además de revisar derechos, deudas y contingencias. Conviene acordar también el procedimiento de valuación." }, { question: "¿El estudio trabaja con el contador de la empresa?", answer: "Sí. El análisis jurídico y el contable suelen ser complementarios, especialmente ante valuaciones o cuestionamientos a la administración." }],
    finalTitle: "El primer paso es definir qué querés proteger.", finalBody: "Contanos cómo está distribuida la sociedad, qué ocurrió y cuál sería para vos una salida razonable.",
  },
} satisfies Record<string, ServiceLanding>;
