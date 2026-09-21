import Image from "next/image";

type PlaceholderImageProps = {
  src?: string | null;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  caption?: string;
};

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes,
  caption = "Photography forthcoming",
}: PlaceholderImageProps) {
  const ratioStyle = { aspectRatio: `${width} / ${height}` };

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden bg-[var(--color-surface)] ${className}`}
        style={ratioStyle}
      >
        <div className="absolute inset-0 hairline-frame pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <span className="font-serif text-lg tracking-[0.18em] text-[var(--color-gold)] uppercase">
            SNLD
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {caption}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
