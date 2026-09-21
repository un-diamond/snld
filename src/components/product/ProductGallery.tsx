"use client";

import { useState } from "react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <div className="flex flex-col gap-3">
      <PlaceholderImage
        src={current}
        alt={current ? `${name} — view ${index + 1}` : `${name} — photography forthcoming`}
        width={800}
        height={1000}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {images.length > 1 ? (
        <ul className="grid grid-cols-4 gap-2" aria-label="Product views">
          {images.map((image, imageIndex) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-pressed={imageIndex === index}
                className={`block w-full min-h-11 overflow-hidden border ${
                  imageIndex === index
                    ? "border-[var(--color-gold)]"
                    : "border-[var(--color-hairline)]"
                }`}
              >
                <PlaceholderImage
                  src={image}
                  alt={`${name} thumbnail ${imageIndex + 1}`}
                  width={200}
                  height={250}
                  caption=""
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
