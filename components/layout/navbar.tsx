"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navigation } from "@/constants/navigation";
import { businessInfo } from "@/constants/business";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Green%20Land%20Super%20Market`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "bg-transparent"
      )}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-xl font-bold text-brand-800 flex items-center gap-2 shrink-0"
          onClick={handleNavClick}
        >
          <span className="text-2xl">🛒</span>
          <span className="hidden sm:inline">Green Land</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={`tel:${businessInfo.phone}`} className="hidden sm:inline-flex">
            <Button variant="outline" size="default" className="gap-2">
              <PhoneCall className="w-4 h-4" />
              <span className="hidden lg:inline">Call Us</span>
            </Button>
          </a>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="default" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a href={`tel:${businessInfo.phone}`} className="block w-full">
                <Button variant="outline" size="default" className="w-full justify-center gap-2 mb-2">
                  <PhoneCall className="w-4 h-4" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
