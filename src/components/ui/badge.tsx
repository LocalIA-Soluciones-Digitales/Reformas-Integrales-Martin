import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        dark: "bg-carbon text-white",
        light: "bg-mist text-carbon",
        orange: "bg-orange/10 text-orange-dark",
        outline: "border border-current/20 text-current",
      },
    },
    defaultVariants: { variant: "orange" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
