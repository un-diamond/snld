"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const email = siteConfig.contact.email;
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  if (!email) {
    return (
      <p className="border border-[var(--color-hairline)] px-5 py-6 text-sm text-[var(--color-muted)]">
        Form disabled — configure an email or endpoint before collecting messages.
      </p>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("from") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Website inquiry from ${name || "a visitor"}`;
    const body = `From: ${name}\nEmail: ${from}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-4">
      <p className="text-xs text-[var(--color-muted)]">
        Phase 1: this form opens the visitor’s mail app. Configure a dedicated
        endpoint later.
      </p>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Name
        <input
          name="name"
          autoComplete="name"
          className="min-h-11 border border-[var(--color-hairline)] bg-transparent px-3 text-sm tracking-normal text-[var(--color-ivory)] outline-none focus:border-[var(--color-gold)]"
        />
      </label>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Email
        <input
          name="from"
          type="email"
          required
          autoComplete="email"
          className="min-h-11 border border-[var(--color-hairline)] bg-transparent px-3 text-sm tracking-normal text-[var(--color-ivory)] outline-none focus:border-[var(--color-gold)]"
        />
      </label>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="border border-[var(--color-hairline)] bg-transparent px-3 py-3 text-sm tracking-normal text-[var(--color-ivory)] outline-none focus:border-[var(--color-gold)]"
        />
      </label>
      <button type="submit" className="btn-primary self-start">
        Open email draft
      </button>
      {status === "opened" ? (
        <p className="text-sm text-[var(--color-muted)]">
          If nothing opened, email {email} directly.
        </p>
      ) : null}
    </form>
  );
}
