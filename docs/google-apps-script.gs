/**
 * Portfolio enquiry -> Google Sheet
 *
 * 1. Create a Google Sheet, then Extensions > Apps Script, paste this file.
 * 2. Deploy > New deployment > type "Web app"
 *      Execute as: Me   |   Who has access: Anyone
 * 3. Copy the Web App URL (ends with /exec) into:
 *      - .env.local            NEXT_PUBLIC_SHEET_URL=...
 *      - GitHub repo secret    NEXT_PUBLIC_SHEET_URL
 */
const SHEET_NAME = "Enquiries";
const HEADERS = ["Timestamp", "Name", "Email", "Services", "Budget", "Timeline", "Message", "Source"];

// Stop spreadsheet formula injection from user input (=, +, -, @)
function safe(v, max) {
  const s = String(v || "").slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    const d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      safe(d.name, 120),
      safe(d.email, 160),
      safe((d.services || []).join(", "), 200),
      safe(d.budget, 40),
      safe(d.timeline, 40),
      safe(d.message, 300),
      safe(d.source, 40),
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(
      ContentService.MimeType.JSON
    );
  } finally {
    lock.releaseLock();
  }
}
