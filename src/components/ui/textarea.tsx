import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-carbon placeholder:text-stone/70 transition-colors hover:border-carbon/25 focus-visible:border-orange focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
