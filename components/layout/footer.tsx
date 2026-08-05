import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo } from "@/constants/business";
import { navigation } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛒</span>
              <span className="text-xl font-bold text-white">
                Green Land
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {businessInfo.tagline}. Fresh products, affordable prices, and friendly service for your family.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-sm text-neutral-400">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Business Hours
            </h3>
            <ul className="space-y-2">
              {businessInfo.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                  <div>
                    <p className="text-sm text-neutral-300">{h.day}</p>
                    <p className="text-sm text-neutral-500">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {businessInfo.social.facebook && (
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
            )}
            {businessInfo.social.instagram && (
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
