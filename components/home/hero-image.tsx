"use client";

import { SafeImage } from "@/components/media/safe-image";

type HeroImageProps = {
  src: string;
  alt: string;
};

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <SafeImage
      src={src}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  );
}
