import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

const trackingModuleUrl = new URL("../src/utils/whatsappTracking.js", import.meta.url);

test("construye un evento de WhatsApp apto para GA4 sin datos personales", async () => {
  assert.ok(existsSync(trackingModuleUrl), "debe existir el normalizador de tracking");
  const { buildWhatsappEventPayload } = await import(trackingModuleUrl);

  const payload = buildWhatsappEventPayload({
    pathname: "/revision-contratos-mar-del-plata/",
    ctaText: "Mandanos el contrato por WhatsApp",
    landingId: "revision_contratos",
    intent: "revision_contrato_pre_firma",
    ubicacion: "hero",
    messageVariant: "contrato_pre_firma",
  });

  assert.deepEqual(payload, {
    area: "revision_contratos",
    landing_id: "revision_contratos",
    intent: "revision_contrato_pre_firma",
    ubicacion: "hero",
    cta_position: "hero",
    cta_text: "Mandanos el contrato por WhatsApp",
    destination: "whatsapp",
    message_variant: "contrato_pre_firma",
    situation_id: undefined,
    page_path: "/revision-contratos-mar-del-plata/",
  });
  assert.equal("phone" in payload, false);
  assert.equal("message" in payload, false);
});

test("conserva la atribución existente en enlaces sin datos explícitos", async () => {
  assert.ok(existsSync(trackingModuleUrl), "debe existir el normalizador de tracking");
  const { buildWhatsappEventPayload } = await import(trackingModuleUrl);

  assert.deepEqual(
    buildWhatsappEventPayload({
      pathname: "/areas/sucesiones/",
      ctaText: "WhatsApp ahora",
      ubicacion: "cierre",
    }),
    {
      area: "sucesiones",
      landing_id: undefined,
      intent: undefined,
      ubicacion: "cierre",
      cta_position: "cierre",
      cta_text: "WhatsApp ahora",
      destination: "whatsapp",
      message_variant: undefined,
      situation_id: undefined,
      page_path: "/areas/sucesiones/",
    },
  );
});

test("atribuye una consulta a la situación elegida sin enviar el mensaje", async () => {
  const { buildWhatsappEventPayload } = await import(trackingModuleUrl);

  const payload = buildWhatsappEventPayload({
    pathname: "/revision-contratos-mar-del-plata/",
    ctaText: "El contrato no refleja lo que hablaron",
    landingId: "revision_contratos",
    intent: "revision_contrato_pre_firma",
    ubicacion: "situation",
    messageVariant: "situacion_no_refleja_acuerdo",
    situationId: "contrato_no_refleja_acuerdo",
  });

  assert.equal(payload.situation_id, "contrato_no_refleja_acuerdo");
  assert.equal(payload.message_variant, "situacion_no_refleja_acuerdo");
  assert.equal("message" in payload, false);
});
