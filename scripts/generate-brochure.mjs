// Generates public/brochure.pdf from src/data/site.ts, so the brochure
// can never drift out of sync with the live site.
//
// This is a placeholder brochure. When the client supplies a real,
// print-ready PDF: replace public/brochure.pdf with that file directly.
// Do NOT wire this script into the build — that would silently overwrite
// the client's real file the next time `npm run build` runs.
//
// Run manually: npm run brochure

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, services } from "../src/data/site.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../public/brochure.pdf");
const logoPath = path.join(__dirname, "../public/logo.jpeg");

const BRAND = "#C0392B";
const INK = "#1C1917";
const MUTED = "#57534E";

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
});
doc.pipe(fs.createWriteStream(outPath));

const pageWidth = doc.page.width;
const contentWidth = pageWidth - doc.page.margins.left - doc.page.margins.right;

// --- Header: logo, name, tagline ---
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, pageWidth / 2 - 45, doc.y, { width: 90 });
  doc.y += 80;
}

doc
  .font("Helvetica-Bold")
  .fontSize(26)
  .fillColor(BRAND)
  .text(site.name, { align: "center" });

doc
  .font("Helvetica")
  .fontSize(12)
  .fillColor(MUTED)
  .text(site.tagline, { align: "center" });

doc.moveDown(1);
doc
  .strokeColor("#E7E1D6")
  .lineWidth(1)
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(pageWidth - doc.page.margins.right, doc.y)
  .stroke();
doc.moveDown(1);

// --- Services, two columns ---
doc.font("Helvetica-Bold").fontSize(15).fillColor(BRAND).text("Our Services");
doc.moveDown(0.6);

const gap = 24;
const colWidth = (contentWidth - gap) / 2;
const leftX = doc.page.margins.left;
const rightX = leftX + colWidth + gap;
const listTop = doc.y;

let leftY = listTop;
let rightY = listTop;

services.forEach((s, i) => {
  const x = i % 2 === 0 ? leftX : rightX;
  const nameHeight = doc.font("Helvetica-Bold").fontSize(10.5).heightOfString(s.name, { width: colWidth });
  const blurbHeight = doc.font("Helvetica").fontSize(9).heightOfString(s.blurb, { width: colWidth });
  const itemHeight = nameHeight + blurbHeight + 4;

  const y = i % 2 === 0 ? leftY : rightY;

  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(INK).text(s.name, x, y, { width: colWidth });
  doc.font("Helvetica").fontSize(9).fillColor(MUTED).text(s.blurb, x, y + nameHeight + 1, { width: colWidth });

  if (i % 2 === 0) {
    leftY = y + itemHeight + 12;
  } else {
    rightY = y + itemHeight + 12;
  }
});

doc.y = Math.max(leftY, rightY) + 10;

doc
  .strokeColor("#E7E1D6")
  .lineWidth(1)
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(pageWidth - doc.page.margins.right, doc.y)
  .stroke();
doc.moveDown(1);

// --- Contact block ---
doc.font("Helvetica-Bold").fontSize(15).fillColor(BRAND).text("Get in Touch");
doc.moveDown(0.5);

doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(`Phone / WhatsApp: ${site.phones.join("  ·  ")}`);
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(10.5).fillColor(MUTED).text(`Email: ${site.email}`);
doc.moveDown(0.3);
doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(MUTED)
  .text(`${site.address.line}, ${site.address.city}, ${site.address.state} ${site.address.pin}`);
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(10.5).fillColor(MUTED).text(site.hours.short);

doc.moveDown(1.5);
doc
  .font("Helvetica-Bold")
  .fontSize(11)
  .fillColor(BRAND)
  .text(`Call or WhatsApp ${site.phones[0]} to place an order.`, { align: "center" });

doc.end();

console.log(`Brochure written to ${outPath}`);
