"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-serif text-sm tracking-[0.2em] text-[var(--color-diamond)]">
          {siteConfig.brandName}
        </Link>
        <button
          type="button"
          className="text-[11px] tracking-[0.32em] text-[var(--color-diamond)]"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          MENU
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/95">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <span className="font-serif text-sm tracking-[0.2em]">{siteConfig.brandName}</span>
            <button type="button" className="text-[11px] tracking-[0.32em]" onClick={() => setOpen(false)}>
              CLOSE
            </button>
          </div>
          <nav className="flex min-h-[70vh] flex-col items-center justify-center gap-8 font-serif text-3xl tracking-[0.12em]">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/#collection" onClick={() => setOpen(false)}>Collection</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}