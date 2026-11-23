// Bubble Blast Parties — quote request intake.
//
// Setup:
// 1. Create a Google Sheet to hold quote requests.
// 2. Extensions > Apps Script, paste this file in as Code.gs.
// 3. Deploy > New deployment > type "Web app". Execute as "Me", access "Anyone".
// 4. Copy the resulting /exec URL into QUOTE_FORM_URL in index.html.
function doPost(e) {
  var p = e.parameter;
  if (p.website) {
    return ContentService.createTextOutput('ok'); // honeypot field was filled in, ignore
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.email || '',
    p.eventDate || '',
    p.location || '',
    p.guests || '',
    p.message || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
