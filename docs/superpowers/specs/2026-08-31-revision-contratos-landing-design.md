# Landing de revisión de contratos antes de firmar

Fecha: 31 de agosto de 2026
Marca: Giovanardi Barili
Estado: implementado y verificado

## 1. Alcance

Crear una landing específica para personas que buscan revisar un contrato antes de firmarlo. No reemplaza la página general de contratos ni intenta explicar toda la práctica contractual del estudio.

- Nueva URL: `/revision-contratos-mar-del-plata/`
- Página paraguas existente: `/areas/contratos`
- Conversión principal: clic hacia WhatsApp
- Tráfico prioritario: Google Search Ads de alta intención
- Tráfico secundario: búsqueda orgánica
- Sin VSL en esta etapa
- Sin formulario en esta landing

El recorrido prioritario es:

`keyword -> anuncio Search -> landing -> WhatsApp -> conversación -> consulta calificada -> cliente`

## 2. Prioridades

1. Conversión a WhatsApp.
2. Continuidad entre búsqueda, anuncio y hero.
3. Claridad de la oferta.
4. Experiencia mobile.
5. Velocidad.
6. Confianza verificable.
7. SEO.

La landing no debe convertirse en una página institucional o informativa extensa. Cada sección debe ayudar a que la persona se reconozca, entienda qué puede hacer el estudio o reduzca la fricción para escribir.

La implementación debe ser escaneable y compacta. La exhaustividad de este documento define decisiones y límites; no obliga a convertir cada apartado en una sección extensa ni a mostrar todo el contenido con el mismo peso visual.

## 3. Diagnóstico de la página actual

### Elementos que se conservan

- Identidad visual sobria y editorial.
- Paleta verde, ocre y marfil.
- Tipografías y sistema de componentes Astro existente.
- WhatsApp como canal principal.
- Credenciales reales de Luciano Barili.
- Modalidad presencial con cita previa en Mar del Plata y online en la Provincia de Buenos Aires.
- Arquitectura estática, rápida y sin framework de cliente.
- Consentimiento previo a la carga de analítica.

### Problemas que resuelve la nueva landing

- `/areas/contratos` reúne intenciones contractuales diferentes.
- El hero actual explica el área antes de reflejar la situación del visitante.
- Los CTA usan el texto genérico `WhatsApp ahora`.
- La navegación institucional ofrece demasiadas salidas para tráfico pago.
- No existe un recorrido explícito de tres pasos para empezar.
- La atribución actual identifica el área y la ubicación de forma parcial, pero no la intención, el texto del CTA ni la variante del mensaje.

## 4. Google Ads

### Campaña y grupo de anuncios

- Campaña: `Search | Contratos | Mar del Plata`
- Grupo: `Revisión pre-firma`
- Intención: persona con contrato o borrador concreto que necesita entenderlo antes de firmar.

### Cluster inicial

Comenzar con concordancia exacta y de frase:

- `revisión de contratos mar del plata`
- `revisar contrato antes de firmar`
- `revisión contrato comercial`
- `abogado para revisar contrato`

Dejar `abogado contratos Mar del Plata` bajo observación como término más amplio, sin asignarle presupuesto prioritario durante el lanzamiento inicial.

No usar concordancia amplia hasta contar con volumen suficiente, conversiones y un informe de términos de búsqueda que permita controlar desvíos.

Para el lanzamiento inicial con USD 5 por día, concentrar la inversión en búsquedas específicas de revisión y pre-firma. Mantener `abogado contratos Mar del Plata` bajo observación por ser una consulta más amplia y no asignarle presupuesto prioritario hasta comprobar calidad.

### Promesa del anuncio

**Idea principal**

> Revisá tu contrato antes de firmar.

**Resultado**

> Entendé qué estás aceptando y qué conviene aclarar.

La redacción final de los RSA se trabajará como pieza separada. El anuncio debe mantener esta promesa y no derivar hacia redacción general, incumplimientos, locaciones o deudas.

### Continuidad

| Capa | Mensaje |
| --- | --- |
| Keyword | revisión de contrato antes de firmar |
| Anuncio | Revisá tu contrato antes de firmar |
| H1 | ¿Te mandaron un contrato y ya están esperando que firmes? |
| Tensión | El precio puede estar acordado. Las condiciones todavía no. |
| Resultado | Saber qué aceptás y qué conviene aclarar antes de firmar |
| CTA | Mandanos el contrato por WhatsApp |
| WhatsApp | Hola, tengo un contrato que quisiera revisar antes de firmar y quiero saber cómo avanzar. |

## 5. Oferta

### Situación

La persona recibió un contrato o borrador, esperan que firme y no sabe si el texto refleja lo acordado ni qué consecuencias tienen sus condiciones.

### Tensión

> El precio puede estar acordado. Las condiciones todavía no.

### Solución

> Revisamos qué estás aceptando, qué conviene aclarar y qué puntos conviene negociar antes de firmar.

### Resultado deseado

Saber qué acepta y qué conviene aclarar antes de firmar.

### Acción

Enviar el contrato o borrador por WhatsApp.

### Beneficio inmediato

> Te respondemos en el día hábil para entender tu situación, decirte qué necesitamos revisar y cómo podemos avanzar.

La orientación inicial no se presentará como consulta ni como servicio gratuito. Si el estudio puede intervenir, el alcance y los honorarios se informarán antes de comenzar el trabajo jurídico.

## 6. Navegación

Usar un encabezado específico para landings:

- Logo de Giovanardi Barili enlazado a la home.
- CTA de WhatsApp visible en desktop.
- Sin navegación principal a Publicaciones, Nosotros, Consultoría o las demás áreas.
- Navegación institucional completa sólo en el footer.
- En mobile, logo y CTA corto `Enviar contrato`.

Agregar un CTA persistente en mobile una vez que el usuario abandona el hero. Debe ocultarse mientras el banner de cookies esté abierto y no cubrir contenido ni controles. En desktop, usar un CTA flotante con el texto `WhatsApp · Enviar contrato` que aparezca en el mismo momento y permanezca disponible durante la navegación.

## 7. Estructura y copy

### 7.1 Hero

**Eyebrow**

> REVISIÓN DE CONTRATOS · MAR DEL PLATA

**H1**

> ¿Te mandaron un contrato y ya están esperando que firmes?

**Tensión**

> El precio puede estar acordado.
> **Las condiciones todavía no.**

La segunda línea debe tener mayor peso visual. La tensión no debe competir con el H1 ni convertirse en otro H1.

**Solución y resultado**

> Revisamos qué estás aceptando, qué conviene aclarar y qué puntos conviene negociar antes de firmar.

**CTA**

> MANDANOS EL CONTRATO POR WHATSAPP

**Microcopy**

> Te respondemos en el día hábil para entender tu situación, decirte qué necesitamos revisar y cómo podemos avanzar.

**Confianza inmediata**

> Luciano Barili · Abogado · Máster en Derecho Empresario · 13 años de ejercicio
> T° XVI F° 99 · Colegio de Abogados de Mar del Plata

El hero no llevará imagen de stock. La autoridad se construirá con jerarquía tipográfica, la credencial y el contexto local. La arquitectura permitirá incorporar más adelante un módulo de VSL debajo del hero sin modificar las secciones siguientes.

No agregar texto institucional por encima del eyebrow. La jerarquía visible del hero debe ser exactamente: situación, tensión, solución, CTA y microcopy.

### 7.2 Identificación

**H2**

> ¿En cuál de estas situaciones estás?

**Te mandaron un contrato para firmar**

> La otra parte ya preparó el documento y querés entender qué estás aceptando antes de responder.

**Acordaste una operación, pero todavía falta dejarla por escrito**

> El precio puede estar claro, pero quedan pendientes los plazos, las obligaciones y qué pasa si algo falla.

**El contrato no refleja lo que hablaron**

> Hay condiciones, responsabilidades o consecuencias que no aparecen como las habían conversado.

**Querés negociar antes de quedar obligado**

> Necesitás identificar qué puntos conviene pedir que se modifiquen, aclaren o incorporen.

Todas las situaciones permanecen en el momento previo a la firma. Los incumplimientos posteriores pertenecen a otra landing.

### 7.3 Qué revisamos

**H2**

> Qué conviene revisar antes de firmar

**Introducción**

> Un contrato no se analiza solamente por cómo está redactado. También importa si representa correctamente la operación que estás por hacer.

**Lista**

- qué entrega o aporta cada parte;
- cuánto, cómo y cuándo se paga;
- qué plazos deben cumplirse;
- qué garantías se ofrecen;
- qué responsabilidades asume cada parte;
- qué pasa si alguien no cumple;
- cómo puede modificarse o terminarse el contrato;
- qué puntos están poco claros o no quedaron escritos.

**Cierre**

> Podemos intervenir en contratos comerciales y civiles, acuerdos de prestación de servicios, compraventas, distribución, franquicia, mutuos y otras operaciones entre particulares o empresas.

La enumeración de tipos contractuales es secundaria. No debe transformarse en un catálogo ni desplazar el mecanismo de revisión.

### 7.4 Cómo lo abordamos

**H2**

> No empezamos por un modelo. Empezamos por lo que estás por hacer.

**Copy**

> El mismo texto puede ser adecuado para una operación e inconveniente para otra. Por eso, antes de proponer cambios, necesitamos entender qué se está acordando en la práctica.

> Primero relacionamos el documento con la operación: qué querés hacer, qué prometió cada parte, qué obligaciones quedarían asumidas y qué puede ocurrir si la relación no funciona como esperaban.

> Después podemos indicarte qué está claro, qué conviene negociar y qué debería redactarse de otra manera antes de firmar.

**CTA intermedio**

> MANDANOS EL CONTRATO PARA EMPEZAR

**Microcopy**

> También podés enviar el borrador y contarnos brevemente qué operación estás por realizar.

### 7.5 Resultado

**H2**

> Antes de firmar, que no te queden dudas importantes

**Introducción**

> La revisión busca que puedas:

- entender qué obligaciones estás asumiendo;
- detectar condiciones que conviene aclarar;
- saber qué puntos podrías negociar;
- comprobar si el documento representa lo acordado;
- decidir con más información antes de quedar obligado.

**Aclaración**

> Ningún contrato puede garantizar el comportamiento de la otra parte ni eliminar todos los riesgos. El objetivo es que sepas qué estás aceptando antes de decidir.

### 7.6 Empezar es simple

**H2**

> Empezar es simple

**Paso 1: Mandanos el contrato o borrador**

> Podés enviarlo por WhatsApp en PDF, imagen o el formato en que lo hayas recibido.

**Paso 2: Contanos qué estás por hacer**

> Alcanza con explicar brevemente la operación, qué te preocupa y si tenés una fecha prevista para firmar.

**Paso 3: Te indicamos el próximo paso**

> Te respondemos en el día hábil para entender tu situación, decirte qué necesitamos revisar y cómo podemos avanzar.

### 7.7 Confianza

**H2**

> Quién revisa tu contrato

**Copy**

> La revisión está a cargo de Luciano Barili, abogado y Máster en Derecho Empresario por la Universidad Austral, con 13 años de ejercicio profesional y práctica enfocada en derecho privado.

> Su experiencia combina la redacción de contratos y operaciones con la intervención en conflictos contractuales. Esa doble perspectiva permite revisar no sólo qué dice un documento, sino también dónde suelen aparecer los problemas cuando lo acordado no funciona como se esperaba.

**Matrícula**

> T° XVI F° 99 · Colegio de Abogados de Mar del Plata

**Modalidad**

> Atención presencial en Mar del Plata con cita previa y online en toda la Provincia de Buenos Aires.

No usar fotografía jurídica de stock. Hasta contar con una fotografía profesional real, el bloque será editorial y estará centrado en credenciales verificables.

### 7.8 Preguntas frecuentes

**H2**

> Preguntas frecuentes

**¿Qué tengo que enviar para empezar?**

> El contrato o borrador y una explicación breve de la operación. Si existen presupuestos, mensajes o documentos que ayuden a entender qué se acordó, también pueden ser relevantes.

**¿Pueden revisar un contrato que preparó la otra parte?**

> Sí. Podemos analizar qué obligaciones establece, qué puntos están poco claros y qué convendría discutir antes de firmar.

**¿La revisión incluye modificar o redactar el contrato?**

> Depende de lo que necesite la operación. Después de conocer el documento podemos definir si alcanza con una revisión, si conviene proponer modificaciones o si es necesario redactar una versión diferente.

**¿Cómo se definen los honorarios?**

> La orientación inicial sirve para identificar la información necesaria y el posible próximo paso. Si el estudio puede intervenir, antes de comenzar se informa el alcance del trabajo y sus honorarios.

**¿Puedo consultar si ya firmé?**

> Sí. Si el contrato ya está firmado y algo no se está cumpliendo, el análisis parte de lo acordado, de los hechos y de la documentación disponible. Esa situación corresponde al servicio de incumplimientos contractuales.

No enlazar la última respuesta hasta que exista la landing de incumplimientos. Evitar enlaces rotos durante la implementación por etapas.

**¿Trabajan solamente en Mar del Plata?**

> La atención puede ser presencial en Mar del Plata con cita previa o completamente online para asuntos dentro de la Provincia de Buenos Aires.

**¿Sirve un modelo de contrato descargado de internet?**

> Puede servir como punto de partida, pero no necesariamente contempla la operación, las condiciones negociadas ni los riesgos concretos de las partes.

Usar `details` y `summary` accesibles. Todas las preguntas comienzan cerradas para reducir la longitud inicial y mantener el mismo comportamiento en desktop y mobile.

### 7.9 CTA final

**H2**

> Si ya tenés el contrato, podemos empezar por ahí.

**Copy**

> Mandanos el documento y contanos brevemente qué estás por hacer o qué punto te preocupa.

**CTA**

> MANDANOS EL CONTRATO POR WHATSAPP

**Microcopy**

> Te respondemos en el día hábil para entender tu situación, decirte qué necesitamos revisar y cómo podemos avanzar.

## 8. WhatsApp

### Mensaje precargado

> Hola, tengo un contrato que quisiera revisar antes de firmar y quiero saber cómo avanzar.

Usar el mismo mensaje en hero, CTA intermedio, CTA final y CTA mobile para mantener una clasificación consistente de la intención.

## 9. CTA

| Ubicación | Texto | Identificador |
| --- | --- | --- |
| Header desktop | Mandanos el contrato | `header` |
| Hero | Mandanos el contrato por WhatsApp | `hero` |
| Situación elegida | Tarjeta completa | `situation` |
| Después del mecanismo | Mandanos el contrato para empezar | `mechanism` |
| Cierre | Mandanos el contrato por WhatsApp | `final` |
| Persistente mobile | Enviar el contrato | `mobile_sticky` |
| Flotante desktop | WhatsApp · Enviar contrato | `floating_desktop` |

Los CTA del header y el persistente mobile son accesos permanentes. Los tres CTA de contenido responden a los momentos pedidos: hero, después de la solución/mecanismo y cierre.

## 10. Tracking

### Evento principal

Nombre: `whatsapp_click`

Parámetros:

```text
landing_id: revision_contratos
intent: revision_contrato_pre_firma
cta_position: header | hero | situation | mechanism | final | mobile_sticky | floating_desktop
cta_text: texto visible
destination: whatsapp
message_variant: contrato_pre_firma
situation_id: identificador de situación cuando corresponda
page_path: /revision-contratos-mar-del-plata/
```

No enviar a GA4 el contenido del contrato, el mensaje escrito por el usuario, su teléfono ni ningún otro dato personal.

### Implementación técnica

- Declarar atributos `data-*` explícitos en cada CTA.
- Usar un listener centralizado para todos los enlaces de WhatsApp.
- Emitir un evento normalizado a `dataLayer`.
- Mantener un adaptador para la implementación actual con `gtag`.
- Evitar eventos duplicados si en el futuro GTM reemplaza el envío directo.
- Respetar el consentimiento vigente: sin aceptación no se cargan ni envían eventos de analítica.

### Configuración externa

1. Marcar `whatsapp_click` como key event en GA4.
2. Vincular GA4 y Google Ads.
3. Activar auto-tagging en Google Ads y preservar `gclid`, `gbraid` y `wbraid` en la URL.
4. Importar el key event como conversión de Google Ads.
5. Configurar inicialmente conteo `Una`.
6. Usarlo como conversión principal mientras no exista medición fiable de consultas calificadas.

### Embudo posterior

```text
whatsapp_click
-> conversation_started
-> qualified_lead
-> proposal_sent
-> client_closed
```

El sitio sólo puede confirmar el clic. Los estados posteriores se registrarán en WhatsApp Business, una planilla o un CRM. Cuando exista volumen y una integración capaz de conservar el identificador de clic, importar `qualified_lead` y `client_closed` como conversiones offline y evaluar pasar `whatsapp_click` a señal secundaria.

## 11. SEO

### Intención principal

`revisión de contrato antes de firmar`

### URL

`/revision-contratos-mar-del-plata/`

### Title

`Revisión de Contratos en Mar del Plata | Giovanardi Barili`

### Meta description

`¿Tenés un contrato para firmar? Revisamos qué estás aceptando y qué conviene aclarar antes de quedar obligado. Atención en Mar del Plata y online.`

### H1

`¿Te mandaron un contrato y ya están esperando que firmes?`

### Términos relacionados

- abogado para revisar contrato;
- revisión de contrato comercial;
- contrato antes de firmar;
- obligaciones contractuales;
- borrador de contrato;
- condiciones contractuales.

### Diferenciación respecto de `/areas/contratos`

| Página | Función | Intención |
| --- | --- | --- |
| `/areas/contratos` | hub general del servicio | abogado de contratos, contratos civiles y comerciales |
| `/revision-contratos-mar-del-plata/` | landing de Search pre-firma | revisar contrato antes de firmar |

No redirigir ni canonicalizar una página hacia la otra. Ambas deben tener copy, H1, title y propósito diferentes.

Para evitar canibalización:

- el hub no duplicará el hero ni el argumento de la landing;
- el hub enlazará la nueva landing con el anchor `revisión de contrato antes de firmar`;
- la landing no listará toda la práctica contractual;
- Search Console se usará, cuando esté disponible, para observar qué URL recibe impresiones por cada consulta;
- no cambiar la URL del hub ni borrar su contenido posicionado sin datos.

Durante la implementación de esta primera landing se permite un ajuste mínimo al hub: añadir un enlace contextual a la nueva página. Su rediseño completo queda fuera de alcance.

### Enlaces internos futuros

Agregar sólo cuando existan las rutas:

- `contrato de alquiler comercial` -> landing de locaciones;
- `si algo ya no se está cumpliendo` -> landing de incumplimientos;
- `compra de un negocio en marcha` -> landing de fondo de comercio.

### Datos estructurados

- Mantener el `LegalService` global con datos reales.
- Añadir un `Service` específico para revisión de contratos, vinculado al `LegalService` mediante `provider`.
- Usar canonical autorreferencial.
- Mantener las FAQ visibles por utilidad y CRO.
- No depender de `FAQPage` para rich results: Google normalmente los reserva para sitios gubernamentales y de salud.
- Validar el JSON-LD antes de publicar.

## 12. Diseño visual

- Mantener la paleta, espaciado y tono editorial actuales.
- Dar al H1 el mayor peso del hero.
- Mostrar la tensión como una intervención editorial propia, con énfasis en `Las condiciones todavía no.`
- Mantener el texto de solución en sans, más pequeño que H1 y tensión.
- Usar un único color dominante para CTA.
- No añadir tarjetas decorativas sin función.
- Usar alternancia de fondos sólo para separar etapas del argumento.
- No usar stock jurídico.
- Reservar un módulo opcional después del hero para VSL futura; no renderizar espacio vacío.

## 13. Mobile y rendimiento

- CTA principal visible sin scroll excesivo en 360 y 390 px.
- H1 de dos a cuatro líneas según el ancho.
- Botón principal de ancho completo en mobile.
- Tap target mínimo de 44 px.
- Header más bajo que el institucional.
- Párrafos cortos y listas escaneables.
- CTA persistente sin tapar CookieBanner.
- Sin slider, popup, video o imagen pesada sobre el pliegue.
- Sin framework de cliente.
- Reutilizar fuentes autohospedadas y componentes existentes.
- Objetivo Lighthouse mobile: 95 o más en rendimiento, accesibilidad, buenas prácticas y SEO.

## 14. Arquitectura técnica

La implementación debe separar contenido y presentación:

- datos de landing tipados en `src/data/`;
- componente o layout específico de landing de adquisición;
- encabezado reducido reutilizable;
- secciones reutilizables sólo cuando representen la misma función, no para forzar copy idéntico en las demás landings;
- helper central de tracking de CTA;
- slot opcional para VSL futura;
- página estática Astro para la URL nueva.

La plantilla compartida debe permitir que cada landing tenga situación, tensión, mecanismo, resultado y copy propios. No debe convertir las cinco páginas en variantes de una misma fórmula textual.

## 15. Verificación

### Funcional

- La URL se genera en el build.
- Todos los CTA abren WhatsApp con el mensaje correcto.
- El CTA persistente aparece y se oculta correctamente.
- El banner de cookies no cubre CTA ni contenido.
- No hay enlaces internos rotos.
- La landing conserva `gclid` y parámetros UTM en la carga inicial.

### Tracking

- Cada CTA emite una sola vez `whatsapp_click`.
- `cta_position` distingue las cinco ubicaciones.
- Sin consentimiento no se envían eventos.
- No se envían datos personales.

### SEO

- Title, description, canonical y robots correctos.
- Un único H1.
- Jerarquía H2/H3 válida.
- JSON-LD válido y representativo del contenido visible.
- La landing aparece en sitemap cuando el sitio sea indexable.
- `/areas/contratos` permanece disponible y enlaza la nueva landing.

### Calidad

- `astro check` sin errores.
- `astro build` exitoso.
- Verificación visual en 360, 390, 768 y 1440 px.
- Navegación completa por teclado.
- Contraste WCAG AA.
- Lighthouse mobile y desktop.

## 16. Fuera de alcance

- Implementar las otras cuatro landings.
- Rediseñar completamente `/areas/contratos`.
- Crear RSA definitivos o configurar campañas dentro de Google Ads.
- Conectar Google Search Console.
- Implementar CRM u offline conversion import.
- Agregar VSL.
- Inventar testimonios, reseñas, casos, cifras o resultados.
