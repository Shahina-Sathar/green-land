import type { Feature } from "@/types";

/**
 * Only claims that are actually true of the shop and the online store. The
 * delivery distance is replaced at render time with the real radius from the
 * store record.
 */
export const features: Feature[] = [
  {
    icon: "leaf",
    title: "Everything in one shop",
    description:
      "Fruit and vegetables, dairy, meat and fish, staples, snacks and household essentials — the whole week's list under one roof.",
  },
  {
    icon: "smartphone",
    title: "Order from your phone",
    description:
      "Browse the same shelves online, add what you need to the cart and place the order in a couple of minutes.",
  },
  {
    icon: "truck",
    title: "Delivered to your door",
    description: "We deliver to homes near the store, so a full week's shopping does not need a trip.",
  },
  {
    icon: "wallet",
    title: "Pay easily with UPI",
    description:
      "Scan and pay with any UPI app when you order online. No card details to type in, and no cash to count out.",
  },
];
