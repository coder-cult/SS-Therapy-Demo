"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import TherapistCard from "@/components/TherapistCard";
import { therapists } from "@/lib/data";

const allSpecialties = Array.from(
  new Set(therapists.flatMap((t) => t.specialties))
).sort();

export default function TherapistsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const list = useMemo(() => {
    return therapists.filter((t) => {
      const matchesQuery =
        !query ||
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
        t.modalities.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter = !filter || t.specialties.includes(filter);
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 border-b border-[color:var(--border)]">
        <div className="container-page">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">Therapist directory</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Find a therapist who fits the way you want to work.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Browse the full roster, or take the two-minute intake and we&rsquo;ll do the matching for you.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, specialty, or approach"
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[color:var(--border)] focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setFilter(null)}
              className={`text-sm px-4 py-1.5 rounded-full border transition ${
                !filter
                  ? "bg-brand-700 text-white border-brand-700"
                  : "bg-white border-[color:var(--border)] hover:border-brand-400"
              }`}
            >
              All
            </button>
            {allSpecialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-sm px-4 py-1.5 rounded-full border transition ${
                  filter === s
                    ? "bg-brand-700 text-white border-brand-700"
                    : "bg-white border-[color:var(--border)] hover:border-brand-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="text-muted-foreground">No therapists match that search. Try clearing the filter.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((t) => (
                <TherapistCard key={t.id} t={t} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
