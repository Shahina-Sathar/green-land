import type { StorefrontStore } from "./store-api";
import { businessInfo } from "@/constants/business";

/** Digits-only phone with an Indian country code, or "" when unknown. */
export function storePhoneDigits(store?: StorefrontStore | null): string {
  const raw = (store?.phone || businessInfo.phone || "").replace(/[^\d]/g, "");
  if (!raw) return "";
  return raw.length === 10 ? `91${raw}` : raw;
}

/** "+91 99478 85883" for display. */
export function formatPhone(digits: string): string {
  if (digits.length === 12) return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} ${digits.slice(7)}`;
  if (digits.length === 10) return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  return digits;
}

export function telHref(store?: StorefrontStore | null): string | null {
  const digits = storePhoneDigits(store);
  return digits ? `tel:+${digits}` : null;
}

export function whatsappHref(store?: StorefrontStore | null, text?: string): string | null {
  const digits = storePhoneDigits(store);
  if (!digits) return null;
  const msg = text ?? `Hi ${businessInfo.name}, I have a question.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}

/**
 * The stored address is typed by hand in GrocerOS and can arrive with commas
 * run together ("Padanilam,near ..."). Tidy the spacing for display only.
 */
export function tidyAddress(address?: string | null): string {
  return (address || "").replace(/\s*,\s*/g, ", ").replace(/\s+/g, " ").trim();
}

export function mapsQuery(store?: StorefrontStore | null): string | null {
  if (store?.latitude != null && store?.longitude != null) {
    return `${store.latitude},${store.longitude}`;
  }
  const address = store?.address || businessInfo.address;
  return address ? `${businessInfo.name}, ${address}` : null;
}

export function mapsDirectionsHref(store?: StorefrontStore | null): string | null {
  const q = mapsQuery(store);
  return q ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}` : null;
}

export function mapsEmbedSrc(store?: StorefrontStore | null): string | null {
  const q = mapsQuery(store);
  return q ? `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed` : null;
}

/**
 * Link into the shopping app, forwarding the ?phone= a WhatsApp deep link may
 * have carried so the shopper's cart is restored. `search` is the current
 * query string (client-side) — omit it on the server.
 */
export function shopHref(path = "/", search?: string): string {
  const base = `${businessInfo.storefrontUrl}${path}`;
  if (!search) return base;
  const phone = new URLSearchParams(search).get("phone");
  if (!phone) return base;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}phone=${encodeURIComponent(phone)}`;
}
