# Revisión de Contratos Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar `/revision-contratos-mar-del-plata/` como landing estática y compacta de Google Search Ads, orientada a clics calificados hacia WhatsApp.

**Architecture:** Crear contenido tipado propio para esta intención, una variante reducida del header y una página Astro específica. Reutilizar BaseLayout, Footer, Button, Container, RichText y el sistema visual actual; ampliar la analítica central para eventos explícitos y añadir un CTA mobile que respete el banner de cookies.

**Tech Stack:** Astro 7 SSG, TypeScript estricto, Tailwind CSS 4, JavaScript nativo, GA4 mediante `gtag`, Node.js test runner.

**Spec:** `docs/superpowers/specs/2026-08-31-revision-contratos-landing-design.md`

## Global Constraints

- La URL nueva es `/revision-contratos-mar-del-plata/`; `/areas/contratos` permanece como hub general.
- El hero sigue exactamente situación -> tensión -> solución -> CTA -> microcopy, sin texto institucional por encima del eyebrow.
- Usar `qué puntos conviene negociar antes de firmar`; no usar `merece la pena discutir`.
- La página debe ser escaneable y compacta; el documento estratégico no se traduce en secciones largas.
- CTA de contenido en hero, después del mecanismo y cierre; nunca usar `WhatsApp ahora` como CTA principal.
- Mensaje precargado: `Hola, tengo un contrato que quisiera revisar antes de firmar y quiero saber cómo avanzar.`
- Sin VSL, formulario, imagen de stock, testimonios inventados ni promesas de resultado.
- Sin datos personales en GA4.
- Sin envío de analítica antes del consentimiento.
- Lanzamiento de Ads con USD 5/día: priorizar keywords de revisión/pre-firma; mantener `abogado contratos Mar del Plata` bajo observación.
- No añadir dependencias de runtime ni framework de cliente.

---

## File Structure

- Create `src/data/revisionContratos.ts`: copy, SEO, CTA, WhatsApp y tipos exclusivos de la landing.
- Create `src/components/layout/LandingHeader.astro`: header reducido con logo y CTA específico.
- Create `src/components/landing/MobileWhatsAppBar.astro`: CTA persistente, oculto en hero y durante consentimiento.
- Create `src/pages/revision-contratos-mar-del-plata.astro`: composición compacta, schema `Service` y secciones.
- Create `tests/revision-contratos-landing.test.mjs`: aserciones sobre HTML generado y continuidad CRO.
- Modify `src/layouts/BaseLayout.astro`: aceptar variante de header sin cambiar páginas existentes.
- Modify `src/components/seo/Analytics.astro`: emitir parámetros explícitos de WhatsApp y evento `dataLayer`.
- Modify `src/data/areas.ts`: enlace opcional desde el hub de contratos.
- Modify `src/pages/areas/[slug].astro`: renderizar el enlace opcional sin lógica hardcodeada.
- Modify `src/styles/global.css`: regla que evita superponer CTA mobile y CookieBanner.
- Modify `package.json`: comando de prueba específico de la landing.

---

### Task 1: Contract Test for the Built Landing

**Files:**
- Create: `tests/revision-contratos-landing.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: HTML estático generado en `dist/`.
- Produces: comando `npm run test:landing` y contrato verificable para copy, CTA, SEO y tracking.

- [ ] **Step 1: Install the existing project dependencies**

Run: `npm install`

Expected: instalación exitosa sin modificar las versiones declaradas en `package.json`.

- [ ] **Step 2: Add the landing test command**

Add to `package.json` scripts:

```json
"test:landing": "npm run build && node --test tests/revision-contratos-landing.test.mjs"
```

- [ ] **Step 3: Write the failing HTML contract test**

Create a Node test that reads:

```js
const landingPath = new URL(
  "../dist/revision-contratos-mar-del-plata/index.html",
  import.meta.url,
);
```

Assertions must verify:

```js
assert.match(html, /REVISIÓN DE CONTRATOS · MAR DEL PLATA/);
assert.match(html, /¿Te mandaron un contrato y ya están esperando que firmes\?/);
assert.match(html, /El precio puede estar acordado\./);
assert.match(html, /Las condiciones todavía no\./);
assert.match(html, /qué puntos conviene negociar antes de firmar/);
assert.doesNotMatch(html, /merece la pena discutir/);
assert.doesNotMatch(html, /WhatsApp ahora/);
assert.match(html, /data-landing-id="revision_contratos"/);
assert.match(html, /data-intent="revision_contrato_pre_firma"/);
assert.match(html, /<link rel="canonical" href="https:\/\/www\.estudiogiovanardibarili\.com\/revision-contratos-mar-del-plata\/?"/);
assert.ok((html.match(/href="https:\/\/wa\.me\//g) ?? []).length >= 4);
```

Also assert the title and meta description from the spec and that the institutional nav label `Publicaciones` does not appear inside the landing header.

- [ ] **Step 4: Run the test to verify it fails**

Run: `node --test tests/revision-contratos-landing.test.mjs`

Expected: FAIL because `dist/revision-contratos-mar-del-plata/index.html` does not exist.

- [ ] **Step 5: Record task completion**

Do not commit because this workspace is not a Git repository. Mark Task 1 completed in this plan after observing the expected failure.

---

### Task 2: Typed Content, Reduced Header, and Static Page

**Files:**
- Create: `src/data/revisionContratos.ts`
- Create: `src/components/layout/LandingHeader.astro`
- Create: `src/pages/revision-contratos-mar-del-plata.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: `getWhatsAppUrl(message: string): string`, `Button`, `Container`, `RichText`, `JsonLd`.
- Produces: `revisionContratos` data object and BaseLayout props `headerVariant?: "default" | "landing"` and `appendSiteName?: boolean`.

- [ ] **Step 1: Define the typed content object**

Create interfaces for:

```ts
interface LandingSituation { title: string; description: string }
interface LandingStep { title: string; description: string }
interface LandingFaq { question: string; answer: string }
interface RevisionContratosLanding {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  tensionLead: string;
  tensionStrong: string;
  solution: string;
  cta: { primary: string; middle: string; short: string; message: string };
  microcopy: string;
  situations: LandingSituation[];
  reviewItems: string[];
  outcomes: string[];
  steps: LandingStep[];
  faq: LandingFaq[];
}
```

Populate it with the exact approved copy from the spec. Keep each situation and FAQ concise; do not add new institutional claims.

- [ ] **Step 2: Add a reusable landing header variant**

`LandingHeader.astro` must render:

- logo linking to `/`;
- desktop CTA `Mandanos el contrato`;
- mobile CTA `Enviar contrato`;
- the same preloaded WhatsApp message;
- explicit tracking attributes for `header`.

Use `h-16`, preserve focus styles, and do not include `Nav` or `MobileMenu`.

- [ ] **Step 3: Extend BaseLayout without changing existing pages**

Add:

```ts
interface Props {
  title: string;
  description: string;
  headerVariant?: "default" | "landing";
  landingWhatsappMessage?: string;
  appendSiteName?: boolean;
}
```

Default `headerVariant` to `default` and `appendSiteName` to `true`. Render `LandingHeader` only for `landing`; all existing routes continue rendering `Header`. The new landing passes the complete approved SEO title and `appendSiteName={false}` so the brand is not duplicated.

- [ ] **Step 4: Build the page with compact sections**

The page must render in this order:

1. hero;
2. situations;
3. review mechanism and checklist;
4. three-step start block;
5. compact trust block;
6. FAQ accordion;
7. final CTA.

Combine the spec's `Qué revisamos`, `Cómo lo abordamos` and `Resultado` into one compact mechanism section with a supporting outcomes panel. Do not create a long standalone section for each strategic heading.

Use one H1. Use H2 for section headings and H3 for cards/steps. CTA positions must be `hero`, `mechanism`, and `final`.

- [ ] **Step 5: Add page-level Service schema**

Render JSON-LD:

```ts
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${Astro.site}revision-contratos-mar-del-plata/#service`,
  name: "Revisión de contratos antes de firmar",
  serviceType: "Revisión jurídica de contratos",
  provider: { "@id": `${Astro.site}#organization` },
  areaServed: [
    { "@type": "City", name: "Mar del Plata" },
    { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
  ],
  url: new URL("/revision-contratos-mar-del-plata/", Astro.site),
}
```

Do not add FAQ schema.

- [ ] **Step 6: Run build and the focused test**

Run: `npm run test:landing`

Expected: all assertions written in Task 1 pass.

- [ ] **Step 7: Record task completion**

Do not commit because this workspace is not a Git repository. Mark Task 2 completed after the focused assertions pass.

---

### Task 3: Explicit WhatsApp Tracking and Mobile Persistent CTA

**Files:**
- Create: `src/components/landing/MobileWhatsAppBar.astro`
- Modify: `src/components/seo/Analytics.astro`
- Modify: `src/pages/revision-contratos-mar-del-plata.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/revision-contratos-landing.test.mjs`

**Interfaces:**
- Consumes: CTA attributes `data-landing-id`, `data-intent`, `data-ubicacion`, `data-message-variant`.
- Produces: normalized `whatsapp_click` payload and mobile CTA position `mobile_sticky`.

- [ ] **Step 1: Extend the failing test for tracking fields**

Assert every content CTA exposes:

```text
data-landing-id="revision_contratos"
data-intent="revision_contrato_pre_firma"
data-message-variant="contrato_pre_firma"
```

Assert built HTML includes positions `hero`, `mechanism`, `final`, `header`, and `mobile_sticky`.

- [ ] **Step 2: Verify the new assertions fail**

Run: `npm run test:landing`

Expected: FAIL for missing `mobile_sticky` and normalized tracking output.

- [ ] **Step 3: Normalize the Analytics listener**

Build a payload from explicit attributes with fallbacks for legacy pages:

```ts
const payload = {
  area: link.dataset.landingId ?? inferArea(window.location.pathname),
  landing_id: link.dataset.landingId,
  intent: link.dataset.intent,
  ubicacion,
  cta_position: ubicacion,
  cta_text: link.textContent?.trim(),
  destination: "whatsapp",
  message_variant: link.dataset.messageVariant,
  page_path: window.location.pathname,
};
```

If `window.gtag` exists, emit `gtag("event", "whatsapp_click", payload)`. Do not create `dataLayer` before consent. The existing gtag stub already writes the normalized event to `dataLayer` after consent.

- [ ] **Step 4: Implement the mobile CTA**

Render a bottom-fixed bar only below `md`, initially translated out of view. Use `IntersectionObserver` on the hero to show it after the hero exits and hide it when the hero returns. Include reduced-motion-safe transitions and the explicit `mobile_sticky` tracking attributes.

- [ ] **Step 5: Prevent cookie-banner overlap**

Add to `global.css`:

```css
body:has(#cookie-banner:not(.hidden)) #mobile-whatsapp-bar {
  display: none;
}
```

Add bottom padding to the landing main content on mobile so the persistent CTA never covers the footer or final copy.

- [ ] **Step 6: Run focused tests**

Run: `npm run test:landing`

Expected: all landing and tracking assertions written through Task 3 pass.

- [ ] **Step 7: Record task completion**

Do not commit because this workspace is not a Git repository. Mark Task 3 completed.

---

### Task 4: Hub Link and SEO Separation

**Files:**
- Modify: `src/data/areas.ts`
- Modify: `src/pages/areas/[slug].astro`
- Modify: `tests/revision-contratos-landing.test.mjs`

**Interfaces:**
- Consumes: new landing route.
- Produces: optional `intentLanding?: { href: string; eyebrow: string; title: string; description: string; label: string }` on `Area`.

- [ ] **Step 1: Add the failing hub assertion**

Assert `/areas/contratos` contains:

```html
href="/revision-contratos-mar-del-plata/"
```

and visible anchor copy `Revisar un contrato antes de firmar`.

- [ ] **Step 2: Verify it fails**

Run: `npm run test:landing`

Expected: FAIL because the hub has no link.

- [ ] **Step 3: Add an optional intent landing to Area**

For contracts only, define:

```ts
intentLanding: {
  href: "/revision-contratos-mar-del-plata/",
  eyebrow: "Antes de firmar",
  title: "¿Te mandaron un contrato y querés saber qué estás aceptando?",
  description: "Conocé cómo funciona la revisión previa y qué podés enviar para empezar.",
  label: "Revisar un contrato antes de firmar",
}
```

- [ ] **Step 4: Render the optional link in the hub**

Place one compact editorial callout after the hub hero and before the general services list. It must be secondary to the hub's existing CTA and must not duplicate the new landing's full hero.

- [ ] **Step 5: Run the full focused test**

Run: `npm run test:landing`

Expected: PASS.

- [ ] **Step 6: Record task completion**

Do not commit because this workspace is not a Git repository. Mark Task 4 completed.

---

### Task 5: Verification and Visual QA

**Files:**
- Modify as needed: only files already listed in Tasks 1-4.

**Interfaces:**
- Consumes: completed landing and built HTML.
- Produces: verified, shippable static page.

- [ ] **Step 1: Run type and build verification**

Run:

```powershell
npx astro check
npm run test:landing
```

Expected: zero TypeScript/Astro errors and all landing tests pass.

- [ ] **Step 2: Start the dev server in required background mode**

Run: `npx astro dev --background`

Expected: Astro reports a background server URL and healthy status.

- [ ] **Step 3: Inspect desktop and mobile layouts**

Verify at 360, 390, 768, and 1440 px:

- hero order is exact;
- CTA is visible without excessive scrolling;
- no full institutional nav in the landing header;
- tension emphasis is subordinate to H1 but visually distinct;
- sections remain compact and scannable;
- FAQ controls are keyboard accessible;
- mobile CTA appears after hero and does not overlap CookieBanner;
- no horizontal scroll or clipped text.

- [ ] **Step 4: Verify WhatsApp and tracking behavior**

Click each CTA and confirm:

- correct `wa.me` destination;
- exact prefilled message;
- one event per click after accepted consent;
- distinct `cta_position` for all five positions;
- no event before consent.

- [ ] **Step 5: Run production audits**

Run Lighthouse against the landing in mobile and desktop profiles. Target at least 95 in performance, accessibility, best practices, and SEO. Validate JSON-LD and confirm the canonical uses the production domain.

- [ ] **Step 6: Stop the background server**

Run: `npx astro dev stop`

Expected: background server stops cleanly.

- [ ] **Step 7: Final scope review**

Confirm no other landing was implemented, `/areas/contratos` still exists, no testimonials or unverifiable claims were added, and `git diff` is unavailable because the workspace has no `.git` directory. Use explicit file listing and test output as the completion evidence.
