import type { BusinessInfo } from "@/types";

/**
 * Details that do not live in GrocerOS. Anything the store record already
 * knows — hours, address, phone, coordinates — is read live from the API
 * (lib/store-api.ts) and baked in at build time; the values below are
 * fallbacks used only if that fetch fails.
 */
export const businessInfo: BusinessInfo = {
  name: "Greenland Supermarket",
  tagline: "Your trusted neighbourhood supermarket",
  description:
    "Greenland Supermarket in Padanilam stocks fresh fruit and vegetables, dairy, everyday staples and household essentials. Shop the aisles in store, or order online and pay with UPI.",
  phone: "+91 99478 85883",
  whatsapp: "919947885883",
  address: "Greenland Supermarket, Padanilam, near Valappil Petrol Pump",

  // TODO – awaiting the real values from the owner. Empty strings are hidden
  // by the UI, so nothing invented is shown in the meantime.
  email: "",
  social: {
    facebook: "",
    instagram: "",
  },

  // The customer-facing shopping app (browse → cart → UPI checkout).
  storefrontUrl: "https://cart.greenland.millx.in",
};
