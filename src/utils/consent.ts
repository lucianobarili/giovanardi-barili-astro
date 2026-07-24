// Fuente única de verdad para el consentimiento de cookies analíticas.
// Ley 25.326 (Argentina): sin consentimiento explícito, no se carga nada de
// GA4 — ni el stub, ni la librería real, ni ninguna cookie.
export const CONSENT_STORAGE_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

export type ConsentValue = "accepted" | "rejected";

export function getConsent(): ConsentValue | null {
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function clearConsent(): void {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}
