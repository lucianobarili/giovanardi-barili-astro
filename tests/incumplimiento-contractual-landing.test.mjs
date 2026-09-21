import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const landingPath = new URL(
  "../dist/incumplimiento-contractual-mar-del-plata/index.html",
  import.meta.url,
);
const contractsHubPath = new URL("../dist/areas/contratos/index.html", import.meta.url);

function readLanding() {
  assert.ok(
    existsSync(landingPath),
    "la build debe generar /incumplimiento-contractual-mar-del-plata/",
  );
  return readFileSync(landingPath, "utf8");
}

test("mantiene la continuidad entre búsqueda, anuncio y hero de incumplimiento", () => {
  const html = readLanding();

  assert.match(html, /INCUMPLIMIENTO CONTRACTUAL · MAR DEL PLATA/);
  assert.match(html, /¿Ya firmaste y la otra parte no está cumpliendo\?/);
  assert.match(
    html,
    /Esperar a que se acomode solo puede hacerte perder plata y tiempo\./,
  );
  assert.match(
    html,
    /Revisamos qué firmaste, qué no se está cumpliendo y qué alternativas tenés para hacer valer tus derechos/,
  );
  assert.doesNotMatch(html, /Las condiciones todavía no/);
  assert.doesNotMatch(html, /¿Te mandaron un contrato y ya están esperando que firmes\?/);
});

test("publica metadatos propios para la intención de contrato incumplido", () => {
  const html = readLanding();

  assert.match(
    html,
    /<title>Incumplimiento Contractual en Mar del Plata \| Giovanardi Barili<\/title>/,
  );
  assert.match(
    html,
    /<meta name="description" content="¿Firmaste un contrato y la otra parte no cumple\? Revisamos qué se acordó, qué ocurrió y qué alternativas tenés para avanzar\. Mar del Plata y online\.">/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/www\.estudiogiovanardibarili\.com\/incumplimiento-contractual-mar-del-plata\/?">/,
  );
  assert.match(html, /"name":"Asesoramiento ante incumplimientos contractuales"/);
});

test("hace de WhatsApp el camino principal y conserva atribución propia", () => {
  const html = readLanding();
  const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";

  assert.ok((html.match(/href="https:\/\/wa\.me\//g) ?? []).length >= 8);
  assert.doesNotMatch(header, /Publicaciones|Nosotros|Consultoría/);
  assert.match(html, /data-landing-id="incumplimiento_contractual"/);
  assert.match(html, /data-intent="incumplimiento_contrato_firmado"/);
  assert.match(html, /data-message-variant="incumplimiento_contractual"/);

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

test("cada situación abre una conversación contextual y medible", () => {
  const html = readLanding();
  const ids = [
    "plazo_vencido",
    "cumplimiento_distinto",
    "promesas_sin_resolver",
    "reclamar_con_claridad",
  ];
  const variants = [
    "incumplimiento_plazo_vencido",
    "incumplimiento_cumplimiento_distinto",
    "incumplimiento_promesas",
    "incumplimiento_antes_de_reclamar",
  ];

  for (const id of ids) assert.match(html, new RegExp(`data-situation-id="${id}"`));
  for (const variant of variants) {
    assert.match(html, new RegExp(`data-message-variant="${variant}"`));
  }

  assert.match(html, /un%20plazo%20vencido/);
  assert.match(html, /forma%20distinta%20a%20la%20acordada/);
  assert.match(html, /nuevas%20fechas%20sin%20resolverlo/);
  assert.match(html, /qu%C3%A9%20alternativas%20tengo%20antes%20de%20avanzar/);
});

test("explica el mecanismo como reconstrucción del incumplimiento", () => {
  const html = readLanding();

  assert.match(
    html,
    /No empezamos por reclamar\. Empezamos por entender qué se firmó y qué pasó después\./,
  );
  assert.match(html, /Lo acordado/);
  assert.match(html, /Lo que ocurrió/);
  assert.match(html, /Qué alternativas hay/);
  assert.match(html, /Frente a un incumplimiento, revisamos/);
  assert.match(html, /Para que puedas/);
});

test("presenta los CTA persistentes específicos en desktop y mobile", () => {
  const html = readLanding();
  const floating = html.match(/<div id="desktop-whatsapp-float"[\s\S]*?<\/div>/)?.[0] ?? "";
  const sticky = html.match(/<div id="mobile-whatsapp-bar"[\s\S]*?<\/div>/)?.[0] ?? "";

  assert.match(floating, /WhatsApp · Contar incumplimiento/);
  assert.match(floating, /data-ubicacion="floating_desktop"/);
  assert.match(sticky, /Contanos qué no se cumple/);
  assert.match(sticky, /data-ubicacion="mobile_sticky"/);
});

test("el hub de contratos deriva también la intención de incumplimiento", () => {
  assert.ok(existsSync(contractsHubPath), "la build debe conservar /areas/contratos/");
  const hubHtml = readFileSync(contractsHubPath, "utf8");

  assert.match(hubHtml, /href="\/incumplimiento-contractual-mar-del-plata\/?"/);
  assert.match(hubHtml, /Entender qué hacer ante un incumplimiento/);
  assert.match(hubHtml, /href="\/revision-contratos-mar-del-plata\/?"/);
});
