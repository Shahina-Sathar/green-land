import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

export function SectionHeader({
  id,
  eyebrow,
  title,
  sub,
  action,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className={`eyebrow ${dark ? "text-brand-300" : ""}`}>
          <span className={`h-px w-6 ${dark ? "bg-brand-300" : "bg-brand-400"}`} aria-hidden /> {eyebrow}
        </p>
        <h2 id={id} className={`section-title mt-2 ${dark ? "text-white" : ""}`}>
          {title}
        </h2>
        {sub && <p className={`section-sub ${dark ? "text-brand-50/85" : ""}`}>{sub}</p>}
      </div>
      {action}
    </Reveal>
  );
}
