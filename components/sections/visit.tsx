import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { SectionHeader } from "@/components/sections/section-header";
import { Reveal } from "@/components/ui/reveal";
import { businessInfo } from "@/constants/business";
import {
  formatPhone,
  mapsDirectionsHref,
  mapsEmbedSrc,
  storePhoneDigits,
  telHref,
  tidyAddress,
  whatsappHref,
} from "@/lib/contact";
import { formatHoursRange, isOpenNow } from "@/lib/hours";
import type { StorefrontStore } from "@/lib/store-api";

export function Visit({ store }: { store: StorefrontStore | null }) {
  const tel = telHref(store);
  const wa = whatsappHref(store, `Hi ${businessInfo.name}, I have a question.`);
  const directions = mapsDirectionsHref(store);
  const embed = mapsEmbedSrc(store);
  const open = store ? isOpenNow(store.open_hour, store.close_hour) : null;
  const address = tidyAddress(store?.address || businessInfo.address);

  return (
    <section id="visit" aria-labelledby="visit-title" className="page section-padding">
      <SectionHeader
        id="visit-title"
        eyebrow="Come say hello"
        title="Visit our store"
        sub="We are on the Padanilam road, near the Valappil petrol pump. Call ahead if you want something set aside."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="h-full">
          <div className="card flex h-full flex-col gap-6 p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <MapPin className="h-6 w-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Address</h3>
                <p className="mt-1 text-base font-semibold text-ink">{address}</p>
              </div>
            </div>

            {store && (
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Clock className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Opening hours
                  </h3>
                  <p className="mt-1 text-base font-semibold text-ink">
                    {formatHoursRange(store.open_hour, store.close_hour)}
                  </p>
                  {open !== null && (
                    <p className={`mt-1 text-sm font-bold ${open ? "text-brand-600" : "text-accent-700"}`}>
                      {open ? "● Open now" : "● Closed right now"}
                    </p>
                  )}
                </div>
              </div>
            )}

            {tel && (
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Phone className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Phone</h3>
                  <a href={tel} className="mt-1 block text-base font-semibold text-ink hover:text-brand-700">
                    {formatPhone(storePhoneDigits(store))}
                  </a>
                </div>
              </div>
            )}

            {businessInfo.email && (
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Email</h3>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="mt-1 block break-words text-base font-semibold text-ink hover:text-brand-700"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>
            )}

            <div className="mt-auto grid gap-2 pt-2 sm:grid-cols-2">
              {tel && (
                <a href={tel} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden /> Call the store
                </a>
              )}
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
                </a>
              )}
              {directions && (
                <a
                  href={directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary sm:col-span-2"
                >
                  <Navigation className="h-4 w-4" aria-hidden /> Get directions
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal className="h-full">
          <div className="h-full overflow-hidden rounded-card bg-brand-50 shadow-card ring-1 ring-brand-900/5">
            {embed ? (
              <iframe
                title={`Map showing ${businessInfo.name}`}
                src={embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full border-0"
              />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-2 p-6 text-center text-brand-800">
                <MapPin className="h-10 w-10" aria-hidden />
                <p className="font-semibold">Map coming soon</p>
                <p className="max-w-xs text-sm text-slate-600">
                  Call or WhatsApp us and we will help you find the way.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
