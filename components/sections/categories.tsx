import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/sections/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ShopLink } from "@/components/ui/shop-link";
import { categoryStyle } from "@/lib/category-style";
import type { Category } from "@/lib/store-api";

/** The store's real categories, each opening that aisle in the shopping app. */
export function Categories({ categories }: { categories: Category[] }) {
  if (categories.length === 0) return null;

  return (
    <section id="categories" aria-labelledby="cat-title" className="page section-padding">
      <SectionHeader
        id="cat-title"
        eyebrow="Browse the aisles"
        title="Shop by category"
        sub="Tap any aisle to see what is on the shelves right now."
        action={
          <ShopLink className="btn-secondary self-start sm:self-auto">
            All products <ArrowRight className="h-4 w-4" aria-hidden />
          </ShopLink>
        }
      />

      <ul className="mt-8 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
        {categories.map((cat, i) => {
          const { icon: Icon, tile } = categoryStyle(cat.name);
          return (
            <li key={cat.id}>
              <Reveal delay={(i % 6) * 0.06}>
                <ShopLink
                  path={`/?category=${cat.id}`}
                  className="group flex h-full min-h-[7.5rem] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-2.5 text-center shadow-card ring-1 ring-brand-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-300 sm:min-h-[9rem] sm:gap-3 sm:rounded-card sm:p-4"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-110 sm:h-16 sm:w-16 ${tile}`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-xs font-bold leading-tight text-ink sm:text-sm">{cat.name}</span>
                </ShopLink>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
