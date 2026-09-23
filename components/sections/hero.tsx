import { ArrowRight, Leaf, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";

import { ShopLink } from "@/components/ui/shop-link";
import { businessInfo } from "@/constants/business";
import { mapsDirectionsHref, telHref } from "@/lib/contact";
import { formatINR } from "@/lib/format";
import { formatHour, isOpenNow } from "@/lib/hours";
import type { Product, StorefrontStore } from "@/lib/store-api";

/** Positions for the floating product cards on large screens. */
const FLOAT_POS = [
  "left-0 top-0 z-10 [--r:-4deg]",
  "right-0 top-16 z-20 [--r:5deg] [animation-delay:-2s]",
  "left-[calc(50%-6rem)] bottom-0 z-30 [--r:2deg] [animation-delay:-4s]",
];

export function Hero({
  store,
  showcase,
}: {
  store: StorefrontStore | null;
  /** Real products with the shop's own photos. */
  showcase: Product[];
}) {
  const open = store ? isOpenNow(store.open_hour, store.close_hour) : null;
  const tel = telHref(store);
  const directions = mapsDirectionsHref(store);
  const radius = store?.delivery_radius_km ? Number(store.delivery_radius_km) : null;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 text-white"
    >
      {/* Decorative background */}
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-10 right-[-60px] -z-10 h-80 w-80 text-brand-400/10 lg:right-[38%]"
      >
        <path
          fill="currentColor"
          d="M100 10c50 20 80 60 80 110-40 10-90 0-120-30C40 70 50 30 100 10Zm-10 50c-5 30 0 70 30 110"
        />
      </svg>

      <div className="page grid items-center gap-10 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
        <div className="min-w-0 animate-fade-in">
          <p className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-100 ring-1 ring-white/15 backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-brand-300" aria-hidden /> Padanilam · Kozhikode
          </p>

          <h1
            id="hero-title"
            className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.05] tracking-tight text-white min-[400px]:text-[2.4rem] sm:text-5xl lg:text-6xl"
          >
            Greenland Supermarket
            <span className="mt-1 block text-gradient">in Padanilam</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-accent-300 sm:text-xl">
            {store?.tagline || businessInfo.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-50/85">
            {businessInfo.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ShopLink className="btn-accent px-7 text-base">
              Start shopping <ArrowRight className="h-4 w-4" aria-hidden />
            </ShopLink>
            {tel && (
              <a href={tel} className="btn-ghost-light px-6 text-base">
                <Phone className="h-4 w-4" aria-hidden /> Call us
              </a>
            )}
            {directions && (
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light px-6 text-base"
              >
                <MapPin className="h-4 w-4" aria-hidden /> Directions
              </a>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-brand-50/90">
            {open !== null && store && (
              <li className="inline-flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    open ? "bg-brand-300 shadow-[0_0_0_4px_rgb(157_203_116/0.3)]" : "bg-accent-400"
                  }`}
                  aria-hidden
                />
                {open
                  ? `Open now · until ${formatHour(store.close_hour)}`
                  : `Closed · opens ${formatHour(store.open_hour)}`}
              </li>
            )}
            {radius && (
              <li className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-brand-300" aria-hidden /> Delivery within {radius} km
              </li>
            )}
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-300" aria-hidden /> Pay with UPI
            </li>
          </ul>
        </div>

        {/* Showcase: real products from the shop's own shelves */}
        {showcase.length >= 3 && (
          <div aria-hidden className="relative hidden h-[460px] lg:block">
            <div className="absolute inset-8 rounded-[3rem] bg-white/5 ring-1 ring-white/10 backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-300/40 to-accent-300/30 blur-2xl" />
            {showcase.slice(0, 3).map((p, i) => (
              <div
                key={p.id}
                className={`absolute w-48 animate-float rounded-3xl bg-white p-3 text-ink shadow-lift ${FLOAT_POS[i]}`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image_url!}
                    alt=""
                    width={192}
                    height={144}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 truncate text-sm font-semibold">{p.name}</p>
                <p className="text-base font-extrabold text-brand-700">
                  {formatINR(
                    p.is_clearance && p.clearance_price != null ? p.clearance_price : p.selling_price
                  )}
                  <span className="ml-1 text-xs font-semibold text-slate-500">/{p.unit_symbol}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* soft wave into the page */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-8 w-full text-cream sm:h-12"
      >
        <path fill="currentColor" d="M0 60V30c240 30 480 30 720 0s480-30 720 0v30Z" />
      </svg>
    </section>
  );
}
