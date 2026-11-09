// Posts enquiry to a Google Apps Script web app (see docs/google-apps-script.gs).
// text/plain body keeps it a "simple" request (no CORS preflight). Apps Script's
// ContentService reply is CORS-readable, so we can confirm the row was saved.
// Public web app URL (ends up in the static bundle either way); env var overrides it.
const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyV_E3aRUrIMwEgjjNBzhmUe5cdosap8XlNrqqPS1BR-cf-Pc0Ier38sX7uy3sK5riD/exec";

export async function submitEnquiry(payload) {
  const url = process.env.NEXT_PUBLIC_SHEET_URL || DEFAULT_SHEET_URL;

  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, source: "portfolio", ts: new Date().toISOString() }),
    });
  } catch {
    // Network error, or the web app isn't public (sign-in redirect has no CORS headers).
    throw new Error("Enquiry service unreachable. Please email instead.");
  }

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || `Enquiry service error (${res.status}).`);
  }
}
