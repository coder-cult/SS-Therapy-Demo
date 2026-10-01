import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="border-y border-[color:var(--border)] bg-white">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 py-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4">
            <p className="text-3xl md:text-4xl font-semibold text-brand-700">{s.value}</p>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
