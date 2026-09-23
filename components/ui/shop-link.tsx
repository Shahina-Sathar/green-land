"use client";

import { useEffect, useState } from "react";

import { businessInfo } from "@/constants/business";

/**
 * Link into the shopping app. If this page was opened from a WhatsApp deep
 * link carrying ?phone=, that is forwarded so the shopper's cart is waiting
 * for them. The href is correct before hydration too — the phone is only
 * appended once we can read the URL.
 */
export function ShopLink({
  path = "/",
  className,
  children,
  "aria-label": ariaLabel,
}: {
  path?: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  const base = `${businessInfo.storefrontUrl}${path}`;
  const [href, setHref] = useState(base);

  useEffect(() => {
    const phone = new URLSearchParams(window.location.search).get("phone");
    if (!phone) return;
    setHref(`${base}${base.includes("?") ? "&" : "?"}phone=${encodeURIComponent(phone)}`);
  }, [base]);

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
