import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const pages = [
  ["divorcios-mar-del-plata", "divorcios", "consulta_divorcio", "DIVORCIOS · MAR DEL PLATA", "familia-patrimonio"],
  ["sucesiones-mar-del-plata", "sucesiones", "consulta_sucesion", "SUCESIONES · MAR DEL PLATA", "sucesiones"],
  ["desalojos-mar-del-plata", "desalojos", "consulta_desalojo", "DESALOJOS · MAR DEL PLATA", "inmuebles"],
  ["conflictos-entre-socios-mar-del-plata", "conflictos_socios", "consulta_conflicto_societario", "CONFLICTOS ENTRE SOCIOS · MAR DEL PLATA", "sociedades"],
];

for (const [slug, landingId, intent, eyebrow, hub] of pages) {
  test(`${slug} genera una landing medible y conectada con su área`, () => {
    const path = new URL(`../dist/${slug}/index.html`, import.meta.url);
    assert.ok(existsSync(path), `debe existir /${slug}/`);
    const html = readFileSync(path, "utf8");
    assert.match(html, new RegExp(eyebrow));
    assert.match(html, new RegExp(`data-landing-id="${landingId}"`));
    assert.match(html, new RegExp(`data-intent="${intent}"`));
    assert.ok((html.match(/href="https:\/\/wa\.me\//g) ?? []).length >= 8);
    for (const position of ["header", "hero", "mechanism", "final", "mobile_sticky", "floating_desktop"]) {
      assert.match(html, new RegExp(`data-ubicacion="${position}"`));
    }
    assert.match(html, /application\/ld\+json/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https:\/\/www\.estudiogiovanardibarili\.com\/${slug}\/?">`));

    const hubHtml = readFileSync(new URL(`../dist/areas/${hub}/index.html`, import.meta.url), "utf8");
    assert.match(hubHtml, new RegExp(`href="\/${slug}\/?"`));
  });
}

test("las landings no prometen resultados ni plazos judiciales", () => {
  const combined = pages.map(([slug]) => readFileSync(new URL(`../dist/${slug}/index.html`, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(combined, /resultado garantizado|ganamos tu caso|desalojo en \d+ días/i);
});
