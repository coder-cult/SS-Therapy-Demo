"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/therapists", label: "Therapists" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-[color:var(--border)]">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-100 text-brand-700">
            <Leaf className="w-5 h-5" />
          </span>
          <span>Serenity</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-700 transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-muted-foreground hover:text-brand-700">
            Log in
          </Link>
          <Link
            href="/get-started"
            className="text-sm font-medium bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-full transition"
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-1 text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[color:var(--border)] flex gap-3">
              <Link href="/login" className="flex-1 text-center py-2 rounded-full border border-[color:var(--border)]">
                Log in
              </Link>
              <Link href="/get-started" className="flex-1 text-center py-2 rounded-full bg-brand-600 text-white">
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
