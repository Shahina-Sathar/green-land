import { Leaf, Smartphone, Truck, Wallet, type LucideIcon } from "lucide-react";

import { SectionHeader } from "@/components/sections/section-header";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/constants/features";
import type { StorefrontStore } from "@/lib/store-api";

const ICONS: Record<string, LucideIcon> = {
  leaf: Leaf,
  smartphone: Smartphone,
  truck: Truck,
  wallet: Wallet,
};

export function WhyChooseUs({ store }: { store: StorefrontStore | null }) {
  const radius = store?.delivery_radius_km ? Number(store.delivery_radius_km) : null;

  return (
    <section aria-labelledby="why-title" className="page section-padding">
      <SectionHeader
        id="why-title"
        eyebrow="The Greenland promise"
        title="Why shop with us"
        sub="A full shop close to home, and the same shelves on your phone when you cannot make the trip."
      />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = ICONS[feature.icon] ?? Leaf;
          // The real delivery radius replaces the vague copy when we know it.
          const description =
            feature.icon === "truck" && radius
              ? `We deliver to homes within ${radius} km of the store, so a full week's shopping does not need a trip.`
              : feature.description;

          return (
            <li key={feature.icon}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="card group flex h-full gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:block sm:p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition group-hover:rotate-[-6deg] sm:h-14 sm:w-14">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:mt-2">{description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
