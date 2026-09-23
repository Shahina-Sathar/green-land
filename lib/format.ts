export function formatINR(value: number | string): string {
  const n = Number(value);
  if (Number.isNaN(n)) return "₹0";
  if (n % 1 === 0) return `₹${n}`;
  return `₹${n.toFixed(2)}`;
}

/**
 * True only for photographs taken in the shop, which live under /products/ in
 * the store's bucket. Generic stock imagery is served from /stock/ and hot-linked
 * Wikimedia files are elsewhere again — neither may be presented on this site as
 * a picture of these shelves, so both are excluded here.
 */
export function hasOwnPhoto(imageUrl: string | null | undefined): boolean {
  return !!imageUrl && imageUrl.includes("/greenland-logo/products/");
}
