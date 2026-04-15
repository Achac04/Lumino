"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, onChange, id, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <>
        <input
          id={id}
          type="checkbox"
          className={cn("peer sr-only", className)}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        <span
          className={cn(
            "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-charcoal/25 bg-parchment shadow-inner transition-colors",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-brass/40 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-parchment",
            "peer-checked:border-brass-dark peer-checked:bg-brass/15",
            "[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100",
          )}
          aria-hidden
        >
          <Check className="h-3.5 w-3.5 text-brass-dark transition-opacity" />
        </span>
      </>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
