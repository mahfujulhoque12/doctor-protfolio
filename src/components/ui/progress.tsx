"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  color?: string;

  textColor?: string;
  text?: string;
}

function Progress({
  className,
  value,
  color,
  text,
  textColor,
  ...props
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn("h-full w-full flex-1 transition-all", color)}
          style={{ transform: `translateX(-${100 - clampedValue}%)` }}
        />
      </ProgressPrimitive.Root>

      <div
        className={cn(
          "absolute top-1/2 left-16 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium",
          " px-1 rounded", // Subtle background for readability
          textColor || "text-foreground"
        )}
      >
        {text}
      </div>

      {/* Value displayed over the bar */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium",
          "bg-black/20 px-1 rounded", // Subtle background for readability
          textColor || "text-foreground"
        )}
      >
        {clampedValue}%
      </div>
    </div>
  );
}

export { Progress };
