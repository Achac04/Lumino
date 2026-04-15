"use client";

import * as React from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

import { cn } from "@/lib/utils";

type SafeImageFill = {
  src: string;
  alt: string;
  fill: true;
  sizes: string;
  className?: string;
  priority?: boolean;
};

type SafeImageFixed = {
  src: string;
  alt: string;
  fill?: false;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export type SafeImageProps = SafeImageFill | SafeImageFixed;

/**
 * Remote product art can 404; show a neutral fallback instead of a broken image.
 */
export function SafeImage(props: SafeImageProps) {
  const { src, alt, className, priority } = props;
  const [failed, setFailed] = React.useState(false);

  const fill = "fill" in props && props.fill === true;

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-parchment-deep text-charcoal-muted",
          fill && "absolute inset-0 h-full w-full",
          className,
        )}
      >
        <ImageOff className="h-8 w-8 opacity-50" aria-hidden />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={props.sizes}
        className={className}
        priority={priority}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={props.width}
      height={props.height}
      sizes={props.sizes}
      className={className}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
