import {
  Apple,
  Baby,
  Beef,
  Candy,
  Coffee,
  Cookie,
  CupSoda,
  Egg,
  Fish,
  Flame,
  Milk,
  Carrot,
  Package,
  PenTool,
  Sandwich,
  ShoppingBasket,
  Soup,
  Sparkles,
  SprayCan,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export interface CategoryStyle {
  icon: LucideIcon;
  /** Tailwind classes for the icon tile. */
  tile: string;
}

// Maps real GrocerOS category names (by keyword) to an icon + tint.
// Unknown categories fall back to a basket.
const RULES: Array<[RegExp, CategoryStyle]> = [
  [/veg/i, { icon: Carrot, tile: "bg-lime-100 text-lime-800" }],
  [/fruit|produce|fresh/i, { icon: Apple, tile: "bg-red-100 text-red-800" }],
  [/dairy|milk|curd|paneer|cheese|butter/i, { icon: Milk, tile: "bg-sky-100 text-sky-800" }],
  [/egg/i, { icon: Egg, tile: "bg-amber-100 text-amber-800" }],
  [/meat|chicken|mutton/i, { icon: Beef, tile: "bg-rose-100 text-rose-800" }],
  [/fish|sea/i, { icon: Fish, tile: "bg-cyan-100 text-cyan-800" }],
  [/rice|grain|atta|flour|dal|pulse|staple|grocer/i, { icon: Wheat, tile: "bg-yellow-100 text-yellow-800" }],
  [/spice|masala/i, { icon: Flame, tile: "bg-orange-100 text-orange-800" }],
  [/oil|ghee/i, { icon: Soup, tile: "bg-amber-100 text-amber-800" }],
  [/snack|chips|namkeen/i, { icon: Cookie, tile: "bg-orange-100 text-orange-800" }],
  [/biscuit|bakery|bread/i, { icon: Sandwich, tile: "bg-yellow-100 text-yellow-800" }],
  [/sweet|chocolate|candy/i, { icon: Candy, tile: "bg-pink-100 text-pink-800" }],
  [/beverage|drink|juice|soda/i, { icon: CupSoda, tile: "bg-teal-100 text-teal-800" }],
  [/tea|coffee/i, { icon: Coffee, tile: "bg-stone-200 text-stone-800" }],
  [/clean|household|detergent|laundry|home/i, { icon: SprayCan, tile: "bg-indigo-100 text-indigo-800" }],
  [/personal|care|beauty|soap|shampoo|bath|body/i, { icon: Sparkles, tile: "bg-fuchsia-100 text-fuchsia-800" }],
  [/baby/i, { icon: Baby, tile: "bg-violet-100 text-violet-800" }],
  [/pack|instant|ready/i, { icon: Package, tile: "bg-emerald-100 text-emerald-800" }],
  [/station|pen|paper|book/i, { icon: PenTool, tile: "bg-slate-200 text-slate-700" }],
];

const FALLBACK: CategoryStyle = { icon: ShoppingBasket, tile: "bg-brand-100 text-brand-800" };

export function categoryStyle(name: string): CategoryStyle {
  return RULES.find(([re]) => re.test(name))?.[1] ?? FALLBACK;
}
