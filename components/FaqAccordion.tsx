"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[color:var(--border)] border border-[color:var(--border)] rounded-2xl bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[color:var(--muted)] transition rounded-2xl"
            >
              <span className="font-medium text-foreground">{item.q}</span>
              {isOpen ? (
                <Minus className="w-5 h-5 text-brand-700 shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-brand-700 shrink-0" />
              )}
            </button>
            {isOpen && <div className="px-6 pb-6 text-muted-foreground">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
