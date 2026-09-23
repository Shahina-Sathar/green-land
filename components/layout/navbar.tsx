"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, PhoneCall, ShoppingCart, X } from "lucide-react";

import { ShopLink } from "@/components/ui/shop-link";
import { businessInfo } from "@/constants/business";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
    `Hi ${businessInfo.name}, I have a question.`
  )}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-brand-900/10 bg-cream/95 shadow-card backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="page flex h-[var(--header-h)] items-center justify-between gap-3">
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center rounded-lg"
          aria-label={`${businessInfo.name} – home`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled || mobileOpen ? "/brand/logo.webp" : "/brand/logo-white.png"}
            alt={businessInfo.name}
            width={160}
            height={44}
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-pill px-3 py-2 text-sm font-semibold transition-colors",
                scrolled
                  ? "text-slate-600 hover:bg-brand-50 hover:text-brand-800"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
            aria-label="Call the store"
            className={cn(
              "hidden h-11 w-11 items-center justify-center rounded-full transition sm:inline-flex",
              scrolled
                ? "text-brand-800 ring-1 ring-brand-900/10 hover:bg-brand-50"
                : "text-white ring-1 ring-white/30 hover:bg-white/10"
            )}
          >
            <PhoneCall className="h-5 w-5" aria-hidden />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#0F7A3F] text-white transition hover:bg-[#0B6433] sm:inline-flex"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
          </a>

          <ShopLink className="btn-accent px-4 sm:px-6">
            <ShoppingCart className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Start shopping</span>
            <span className="sm:hidden">Shop</span>
          </ShopLink>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden",
              scrolled || mobileOpen
                ? "text-brand-800 ring-1 ring-brand-900/10 hover:bg-brand-50"
                : "text-white ring-1 ring-white/30 hover:bg-white/10"
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-brand-900/10 bg-cream lg:hidden">
          <div className="page space-y-1 py-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-2xl px-4 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </a>
            ))}
            <div className="grid gap-2 border-t border-brand-900/10 pt-3 sm:grid-cols-2">
              <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="btn-secondary">
                <PhoneCall className="h-4 w-4" aria-hidden /> Call the store
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
