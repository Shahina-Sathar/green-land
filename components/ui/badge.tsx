import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-brand-100 text-brand-800",
        variant === "secondary" &&
          "bg-accent/20 text-amber-800",
        variant === "outline" &&
          "border border-neutral-200 text-neutral-600",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
