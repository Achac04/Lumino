import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GridContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

/** 12-column grid with consistent horizontal gutters and max width. */
export function GridContainer({
  children,
  className,
  as: Tag = "div",
}: GridContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-12col px-gutter",
        "grid grid-cols-12 gap-x-gutter",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
