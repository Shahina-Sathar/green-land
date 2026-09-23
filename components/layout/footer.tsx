import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { ShopLink } from "@/components/ui/shop-link";
import { businessInfo } from "@/constants/business";
import { navigation } from "@/constants/navigation";
import {
  formatPhone,
  mapsDirectionsHref,
  storePhoneDigits,
  telHref,
  tidyAddress,
  whatsappHref,
} from "@/lib/contact";
import { formatHoursRange } from "@/lib/hours";
import type { StorefrontStore } from "@/lib/store-api";

export function Footer({ store }: { store: StorefrontStore | null }) {
  const tel = telHref(store);
  const wa = whatsappHref(store);
  const directions = mapsDirectionsHref(store);
  const address = tidyAddress(store?.address || businessInfo.address);
  const socials = [
    businessInfo.social.facebook && { label: "Facebook", href: businessInfo.social.facebook },
    businessInfo.social.instagram && { label: "Instagram", href: businessInfo.social.instagram },
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  const item = "flex items-start gap-2.5 text-sm text-brand-100/80";
  const link = `${item} min-h-[32px] items-center transition hover:text-white`;

  return (
    <footer className="bg-brand-950 text-brand-50">
      <div className="page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-white.png"
            alt={businessInfo.name}
            width={180}
            height={48}
            className="h-11 w-auto object-contain"
          />
          <p className="mt-3 text-sm font-semibold text-accent-300">
            {store?.tagline || businessInfo.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-100/70">
            Order online and pay easily with UPI, or drop by the shop in Padanilam.
          </p>
          <ShopLink className="btn-accent mt-5">Start shopping</ShopLink>
        </div>

        <div className="grid content-start gap-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Explore</h2>
          {navigation.map((nav) => (
            <a key={nav.href} href={nav.href} className={link}>
              {nav.label}
            </a>
          ))}
        </div>

        <div className="grid content-start gap-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Store</h2>
          {store && (
            <p className={item}>
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              {formatHoursRange(store.open_hour, store.close_hour)}
            </p>
          )}
          {address && (
            <p className={item}>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              {address}
            </p>
          )}
          {directions && (
            <a href={directions} target="_blank" rel="noopener noreferrer" className={link}>
              <Navigation className="h-4 w-4 shrink-0 text-brand-300" aria-hidden /> Get directions
            </a>
          )}
        </div>

        <div className="grid content-start gap-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Get in touch</h2>
          {tel && (
            <a href={tel} className={link}>
              <Phone className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              {formatPhone(storePhoneDigits(store))}
            </a>
          )}
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className={link}>
              <MessageCircle className="h-4 w-4 shrink-0 text-brand-300" aria-hidden /> Chat on WhatsApp
            </a>
          )}
          {businessInfo.email && (
            <a href={`mailto:${businessInfo.email}`} className={link}>
              <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden /> {businessInfo.email}
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {s.label}
              </a>
            ))}
            <span>Powered by GrocerOS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
