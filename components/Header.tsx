"use client";

import * as React from "react";
import Link from "next/link";
import { primaryNav, site } from "@/lib/site";
import { Container } from "./ui";

function Monogram() {
  return (
    <span className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded border border-gold/30 bg-navy font-mono text-[0.7rem] font-semibold tracking-tight text-white"
        aria-hidden="true"
      >
        VID
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-[1.02rem] font-semibold text-navy">
          The Verified Income Desk
        </span>
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-charcoal-soft">
          Proof over promises
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-header backdrop-blur">
      <Container className="flex items-center justify-between py-2.5 md:py-3.5">
        <Link href="/" className="no-underline" aria-label={site.name}>
          <Monogram />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.88rem] font-medium text-navy no-underline transition-colors hover:text-gold-dark"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start-here"
            className="rounded border border-navy bg-navy px-4 py-2 text-[0.85rem] font-medium text-white no-underline transition-colors hover:bg-navy-700 hover:text-white"
          >
            Start Here
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-line p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line lg:hidden">
          <Container className="flex flex-col py-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-lineSoft py-3 text-[0.95rem] font-medium text-navy no-underline last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/start-here"
              className="py-3 text-[0.95rem] font-medium text-gold-dark no-underline"
              onClick={() => setOpen(false)}
            >
              Start Here →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
