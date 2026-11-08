// Posts enquiry to a Google Apps Script web app (see docs/google-apps-script.gs).
// Apps Script does not send CORS headers, so the request is fire-and-forget (no-cors)
// with a text/plain body to avoid a preflight.
export async function submitEnquiry(payload) {
  const url = process.env.NEXT_PUBLIC_SHEET_URL;
  if (!url) throw new Error("Enquiry endpoint not configured (NEXT_PUBLIC_SHEET_URL).");

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...payload, source: "portfolio", ts: new Date().toISOString() }),
  });
}
