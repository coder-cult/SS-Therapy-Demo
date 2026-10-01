import Link from "next/link";
import { Star } from "lucide-react";
import type { Therapist } from "@/lib/data";

export default function TherapistCard({ t }: { t: Therapist }) {
  return (
    <Link
      href={`/therapists/${t.id}`}
      className="group block rounded-2xl bg-white border border-[color:var(--border)] p-6 hover:border-brand-300 hover:shadow-sm transition"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-full text-white flex items-center justify-center font-semibold text-lg shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-lg truncate">
            {t.name}, <span className="text-muted-foreground font-normal">{t.credentials}</span>
          </h3>
          <div className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
            <span className="font-medium text-foreground">{t.rating.toFixed(1)}</span>
            <span>· {t.reviews} reviews · {t.years} yrs</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {t.specialties.slice(0, 3).map((s) => (
          <span
            key={s}
            className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-100"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{t.bio}</p>

      <div className="mt-5 pt-4 border-t border-[color:var(--border)] flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{t.availability}</span>
        <span className="text-brand-700 font-medium group-hover:underline">View profile →</span>
      </div>
    </Link>
  );
}
