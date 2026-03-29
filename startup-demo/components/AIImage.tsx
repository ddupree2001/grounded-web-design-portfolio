"use client";

import Image from "next/image";

interface AIImageProps {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill";
}

/**
 * Displays an AI-generated image if the src is available.
 * When src is not set (images not yet generated), renders nothing —
 * the parent's fallback styling/content shows through.
 */
export default function AIImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  objectFit = "cover",
}: AIImageProps) {
  if (!src) return null;

  const style = objectFit !== "cover" ? { objectFit } : undefined;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={{ objectFit, ...(style || {}) }}
        priority={priority}
        sizes="100vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      style={{ objectFit, ...(style || {}) }}
      priority={priority}
    />
  );
}
