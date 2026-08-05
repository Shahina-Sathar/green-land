"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: "white" | "surface" | "brand";
}

export function SectionWrapper({
  id,
  className,
  children,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        bg === "surface" && "bg-surface",
        bg === "brand" && "bg-brand-800 text-white",
        bg === "white" && "bg-white",
        className
      )}
    >
      <div className="container-max">{children}</div>
    </section>
  );
}
