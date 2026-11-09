// Posts enquiry to a Google Apps Script web app (see docs/google-apps-script.gs).
// text/plain body keeps it a "simple" request (no CORS preflight). Apps Script's
// ContentService reply is CORS-readable, so we can confirm the row was saved.
// Public web app URL (ends up in the static bundle either way); env var overrides it.
const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyV_E3aRUrIMwEgjjNBzhmUe5cdosap8XlNrqqPS1BR-cf-Pc0Ier38sX7uy3sK5riD/exec";

export async function submitEnquiry(payload) {
  const url = process.env.NEXT_PUBLIC_SHEET_URL || DEFAULT_SHEET_URL;

  // The script stores name/email/subject/message, so fold the picker fields into subject.
  const subject = [payload.services?.join(", "), payload.budget, payload.timeline].filter(Boolean).join(" | ");

  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, subject, source: "portfolio", ts: new Date().toISOString() }),
    });
  } catch {
    // Network error, or the web app isn't public (sign-in redirect has no CORS headers).
    throw new Error("Enquiry service unreachable. Please email instead.");
  }

  const data = await res.json().catch(() => null);
  // Accept both reply shapes: { ok } (docs/google-apps-script.gs) and { success, message }.
  if (!res.ok || !(data?.ok || data?.success)) {
    throw new Error(data?.error || data?.message || `Enquiry service error (${res.status}).`);
  }
}
