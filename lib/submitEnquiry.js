// Posts enquiry to a Google Apps Script web app (see docs/google-apps-script.gs).
// Apps Script does not send CORS headers, so the request is fire-and-forget (no-cors)
// with a text/plain body to avoid a preflight.
// Public web app URL (ends up in the static bundle either way); env var overrides it.
const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyV_E3aRUrIMwEgjjNBzhmUe5cdosap8XlNrqqPS1BR-cf-Pc0Ier38sX7uy3sK5riD/exec";

export async function submitEnquiry(payload) {
  const url = process.env.NEXT_PUBLIC_SHEET_URL || DEFAULT_SHEET_URL;
  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...payload, source: "portfolio", ts: new Date().toISOString() }),
  });
}
