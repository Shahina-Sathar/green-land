import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { ShopLink } from "@/components/ui/shop-link";
import { formatHoursRange } from "@/lib/hours";
import type { Product, StorefrontStore } from "@/lib/store-api";

export function About({
  store,
  categoryCount,
  productCount,
  collage,
}: {
  store: StorefrontStore | null;
  categoryCount: number;
  productCount: number;
  /** Four real product photos, used in place of a store photograph. */
  collage: Product[];
}) {
  // Only figures we can actually stand behind, read from the live store.
  const facts = [
    categoryCount > 0 && { value: String(categoryCount), label: "Aisles to browse" },
    productCount > 0 && { value: `${productCount}`, label: "Products online" },
    store && { value: formatHoursRange(store.open_hour, store.close_hour), label: "Open daily" },
    { value: "UPI", label: "Pay on your phone" },
  ].filter(Boolean) as Array<{ value: string; label: string }>;

  return (
    <section id="about" aria-labelledby="about-title" className="page section-padding">
      <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-brand-900 p-6 text-white sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        <Reveal className={collage.length >= 4 ? "" : "hidden lg:block"}>
          {collage.length >= 4 ? (
            <div className="grid grid-cols-2 gap-3">
              {collage.slice(0, 4).map((p, i) => (
                <div
                  key={p.id}
                  className={`aspect-square overflow-hidden rounded-2xl bg-brand-800 ring-1 ring-white/10 ${
                    i % 3 === 0 ? "rounded-tl-[2.5rem]" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image_url!}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 ring-1 ring-white/10" />
          )}
        </Reveal>

        <Reveal>
          <p className="eyebrow text-brand-300">
            <span className="h-px w-6 bg-brand-300" aria-hidden /> About us
          </p>
          <h2 id="about-title" className="section-title mt-2 text-white">
            The shop around the corner, on your phone
          </h2>

          <p className="mt-4 text-base leading-relaxed text-brand-50/85">
            Greenland Supermarket is a neighbourhood shop in Padanilam, near the Valappil petrol pump.
            We stock the everyday list — fruit and vegetables, dairy, meat and fish, rice and staples,
            snacks, and the cleaning and personal-care things that run out without warning.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-50/85">
            The same shelves are online. Browse the aisles, add what you need and pay with UPI, and we
            will bring it to your door. Not sure whether we carry something? Send us a WhatsApp message
            and we will check for you.
          </p>

          {facts.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-3">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <p className="font-display text-xl font-semibold text-accent-300">{fact.value}</p>
                    <p className="mt-1 text-sm text-brand-100/80">{fact.label}</p>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <ShopLink className="btn-accent mt-8">
            Start shopping <ArrowRight className="h-4 w-4" aria-hidden />
          </ShopLink>
        </Reveal>
      </div>
    </section>
  );
}
