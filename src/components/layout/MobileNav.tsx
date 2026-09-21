"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { navLinks } from "@/lib/links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenuLinks = navLinks.filter(
    (link) => link.href !== "/contact"
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center text-[11px] uppercase tracking-[0.22em] text-[var(--color-ivory)]"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[3.75rem] bottom-0 z-40 bg-[var(--color-charcoal)] px-5 py-8"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {mobileMenuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-12 items-center border-b border-[var(--color-hairline)] font-serif text-3xl text-[var(--color-ivory)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}

      <Link
        href="/contact"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-11 items-center border border-[var(--color-rose)] bg-[var(--color-charcoal)]/95 px-5 text-[10px] uppercase tracking-[0.28em] text-[var(--color-rose)] shadow-lg backdrop-blur-sm transition hover:bg-[var(--color-rose)] hover:text-[var(--color-charcoal)]"
      >
        CONTACT
      </Link>
    </div>
  );
}