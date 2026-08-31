import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const landingPath = new URL(
  "../dist/revision-contratos-mar-del-plata/index.html",
  import.meta.url,
);
const contractsHubPath = new URL("../dist/areas/contratos/index.html", import.meta.url);

function readLanding() {
  assert.ok(
    existsSync(landingPath),
    "la build debe generar /revision-contratos-mar-del-plata/",
  );
  return readFileSync(landingPath, "utf8");
}

test("mantiene la continuidad entre búsqueda, anuncio y hero", () => {
  const html = readLanding();

  assert.match(html, /REVISIÓN DE CONTRATOS · MAR DEL PLATA/);
  assert.match(html, /¿Te mandaron un contrato y ya están esperando que firmes\?/);
  assert.match(html, /El precio puede estar acordado\./);
  assert.match(html, /Las condiciones todavía no\./);
  assert.match(html, /qué puntos conviene negociar antes de firmar/);
  assert.doesNotMatch(html, /merece la pena discutir/);
});

test("publica metadatos propios para la intención pre-firma", () => {
  const html = readLanding();

  assert.match(
    html,
    /<title>Revisión de Contratos en Mar del Plata \| Giovanardi Barili<\/title>/,
  );
  assert.match(
    html,
    /<meta name="description" content="¿Tenés un contrato para firmar\? Revisamos qué estás aceptando y qué conviene aclarar antes de quedar obligado\. Atención en Mar del Plata y online\.">/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/www\.estudiogiovanardibarili\.com\/revision-contratos-mar-del-plata\/?">/,
  );
});

test("mantiene WhatsApp como único camino principal de conversión", () => {
  const html = readLanding();
  const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";

  assert.ok((html.match(/href="https:\/\/wa\.me\//g) ?? []).length >= 4);
  assert.doesNotMatch(html, /WhatsApp ahora/);
  assert.doesNotMatch(header, /Publicaciones|Nosotros|Consultoría/);
  assert.match(html, /data-landing-id="revision_contratos"/);
  assert.match(html, /data-intent="revision_contrato_pre_firma"/);
  assert.match(html, /data-message-variant="contrato_pre_firma"/);
  for (const position of [
    "header",
    "hero",
    "mechanism",
    "final",
    "mobile_sticky",
    "floating_desktop",
  ]) {
    assert.match(html, new RegExp(`data-ubicacion="${position}"`));
  }
});

test("mantiene un CTA flotante exclusivo de desktop fuera del hero", () => {
  const html = readLanding();
  const floating = html.match(/<div id="desktop-whatsapp-float"[\s\S]*?<\/div>/)?.[0] ?? "";

  assert.match(floating, /class="[^"]*hidden[^"]*md:block/);
  assert.match(floating, /WhatsApp · Enviar contrato/);
  assert.match(floating, /data-ubicacion="floating_desktop"/);
  assert.match(floating, /data-message-variant="contrato_pre_firma"/);
});

test("cada situación abre una conversación propia y medible", () => {
  const html = readLanding();
  const ids = [
    "contrato_recibido_para_firmar",
    "operacion_sin_contrato",
    "contrato_no_refleja_acuerdo",
    "negociar_antes_de_firmar",
  ];
  const variants = [
    "situacion_contrato_recibido",
    "situacion_operacion_sin_contrato",
    "situacion_no_refleja_acuerdo",
    "situacion_negociar_antes_de_firmar",
  ];

  for (const id of ids) assert.match(html, new RegExp(`data-situation-id="${id}"`));
  for (const variant of variants) {
    assert.match(html, new RegExp(`data-message-variant="${variant}"`));
  }

  assert.match(html, /me%20mandaron%20un%20contrato%20para%20firmar/);
  assert.match(html, /acord%C3%A9%20una%20operaci%C3%B3n/);
  assert.match(html, /no%20refleja%20lo%20que%20hablamos/);
  assert.match(html, /qu%C3%A9%20puntos%20conviene%20negociar/);
});

test("el hub general deriva la intención pre-firma a la landing específica", () => {
  assert.ok(existsSync(contractsHubPath), "la build debe conservar /areas/contratos/");
  const hubHtml = readFileSync(contractsHubPath, "utf8");

  assert.match(hubHtml, /href="\/revision-contratos-mar-del-plata\/?"/);
  assert.match(hubHtml, /Revisar un contrato antes de firmar/);
});

test("el header muestra una sola variante de CTA en cada breakpoint", () => {
  const html = readLanding();
  const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";

  assert.match(header, /class="hidden sm:block"[\s\S]*Mandanos el contrato/);
  assert.match(header, /class="sm:hidden"[\s\S]*Enviar contrato/);
});
