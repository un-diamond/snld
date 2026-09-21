import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
}: CtaBannerProps) {
  return (
    <section className="border-y border-[var(--color-hairline)] bg-[var(--color-raised)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl text-[var(--color-ivory)]">{title}</h2>
          {description ? (
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
              {description}
            </p>
          ) : null}
        </div>
        <Link href={primaryHref} className="btn-primary">
          {primaryLabel}
        </Link>
      </div>
    </section>
  );
}
