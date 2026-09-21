/**
 * @typedef {Object} WhatsappTrackingInput
 * @property {string} pathname
 * @property {string | undefined} ctaText
 * @property {string | undefined} landingId
 * @property {string | undefined} intent
 * @property {string} ubicacion
 * @property {string | undefined} messageVariant
 * @property {string | undefined} situationId
 */

function inferArea(pathname) {
  const slug = pathname.replace(/^\/|\/$/g, "");
  if (!slug) return "home";
  const areaMatch = slug.match(/^areas\/(.+)$/);
  return areaMatch ? areaMatch[1] : slug;
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-18419410199";
const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = "IBdACNbqrYAdEJfKh89E";

export function buildGoogleAdsWhatsappConversion() {
  return {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL}`,
    value: 1,
    currency: "USD",
  };
}

/**
 * Normaliza sólo datos de atribución. Nunca recibe ni devuelve el teléfono,
 * el texto precargado o contenido escrito por la persona.
 *
 * @param {WhatsappTrackingInput} input
 */
export function buildWhatsappEventPayload(input) {
  return {
    area: input.landingId ?? inferArea(input.pathname),
    landing_id: input.landingId,
    intent: input.intent,
    ubicacion: input.ubicacion,
    cta_position: input.ubicacion,
    cta_text: input.ctaText,
    destination: "whatsapp",
    message_variant: input.messageVariant,
    situation_id: input.situationId,
    page_path: input.pathname,
  };
}
