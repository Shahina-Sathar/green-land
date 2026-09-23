/**
 * Live data from the Greenland store (GrocerOS).
 *
 * The same public API the shopping app uses. Everything is fetched once when
 * the site is built and baked into the page, so visitors are served from the
 * edge and the store's server takes no traffic from the website.
 *
 * Every call fails soft: if the API is slow or down at build time we return
 * nothing and the sections that need data hide themselves, rather than
 * breaking the build.
 */

const API_BASE = "https://api.millx.in/api/v1";
const STORE_SLUG = "greenland";

export interface StorefrontStore {
  slug: string | null;
  name: string;
  logo_url: string | null;
  tagline: string | null;
  open_hour: number;
  close_hour: number;
  timezone: string;
  delivery_radius_km: number | string | null;
  storefront_url: string | null;
  upi_name: string | null;
  phone: string | null;
  address: string | null;
  latitude: number | string | null;
  longitude: number | string | null;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  unit_name: string;
  unit_symbol: string;
  allows_decimal: boolean;
  selling_price: number | string;
  image_url: string | null;
  current_stock: number | string;
  is_clearance: boolean;
  clearance_price: number | string | null;
  clearance_discount_percent: number | string | null;
  clearance_description: string | null;
}

async function get<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/storefront/${STORE_SLUG}${path}`, {
      cache: "force-cache",
    });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export const getStore = () => get<StorefrontStore | null>("", null);
export const getCategories = () => get<Category[]>("/categories", []);
export const getProducts = () => get<Product[]>("/products", []);
