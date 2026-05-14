import * as React from "react";
import { cn } from "@/lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
        variant === "default" && "bg-[#2c3a2e]/10 text-[#2c3a2e]",
        variant === "outline" && "border border-[#e6e2da] text-[#8a8a85]",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
