// Shared client-side helpers for the enquiry form and per-service
// query cards, so validation/encoding logic exists in exactly one place.

export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidName(value: string): boolean {
  return value.trim().length >= 2;
}

export function isValidPhone(value: string): boolean {
  return normalizePhone(value).length === 10;
}

export function buildWaUrl(whatsappNumber: string, lines: string[]): string {
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

export function openWa(url: string): void {
  window.open(url, "_blank", "noopener");
}
