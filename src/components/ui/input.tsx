import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-13 w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-carbon placeholder:text-stone/70 transition-colors hover:border-carbon/25 focus-visible:border-orange focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
