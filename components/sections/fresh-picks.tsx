import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/sections/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ShopLink } from "@/components/ui/shop-link";
import { formatINR } from "@/lib/format";
import type { Product } from "@/lib/store-api";

/**
 * Real products, photographed in the shop. Prices come from the same record
 * the till uses, so nothing here is invented — but the page is built once per
 * deploy, so the shopping app stays the place to check today's exact price.
 */
export function FreshPicks({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section id="picks" aria-labelledby="picks-title" className="relative isolate section-padding">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-brand-50 via-brand-50/50 to-transparent"
      />
      <div className="page">
        <SectionHeader
          id="picks-title"
          eyebrow="From our aisles"
          title="What's on our shelves"
          sub="A small sample of what we stock. The online store has the full list, with live prices and stock."
          action={
            <ShopLink className="btn-secondary self-start sm:self-auto">
              See all products <ArrowRight className="h-4 w-4" aria-hidden />
            </ShopLink>
          }
        />

        {/* scroll-px keeps snapping from pulling the first card past the page
            gutter, which it otherwise does on the padding box. */}
        <ul className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {products.map((p, i) => (
            <li key={p.id} className="w-[46%] shrink-0 snap-start sm:w-[31%] lg:w-auto">
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <ShopLink
                  path={`/products/${p.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-brand-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="aspect-square overflow-hidden bg-brand-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image_url!}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {p.category_name}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-ink sm:text-base">
                      {p.name}
                    </h3>
                    <p className="mt-auto pt-3 text-lg font-extrabold text-brand-800">
                      {formatINR(
                        p.is_clearance && p.clearance_price != null ? p.clearance_price : p.selling_price
                      )}
                      <span className="ml-1 text-xs font-semibold text-slate-500">/{p.unit_symbol}</span>
                    </p>
                  </div>
                </ShopLink>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
