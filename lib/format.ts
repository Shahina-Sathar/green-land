export function formatINR(value: number | string): string {
  const n = Number(value);
  if (Number.isNaN(n)) return "₹0";
  if (n % 1 === 0) return `₹${n}`;
  return `₹${n.toFixed(2)}`;
}

/**
 * True when the product has its own photo rather than the generic stock images
 * (Wikimedia) seeded for the WhatsApp catalog. Used to show only real photos.
 */
export function hasOwnPhoto(imageUrl: string | null | undefined): boolean {
  return !!imageUrl && !imageUrl.includes("wikimedia.org");
}
