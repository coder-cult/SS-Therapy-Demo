import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star, Languages, CalendarDays, GraduationCap, Sparkles } from "lucide-react";
import { therapists } from "@/lib/data";

export function generateStaticParams() {
  return therapists.map((t) => ({ id: t.id }));
}

export default async function TherapistProfile({ params }: PageProps<"/therapists/[id]">) {
  const { id } = await params;
  const t = therapists.find((x) => x.id === id);
  if (!t) notFound();

  const others = therapists.filter((x) => x.id !== t.id).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-10 border-b border-[color:var(--border)]">
        <div className="container-page">
          <Link
            href="/therapists"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back to directory
          </Link>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-5">
              <div
                className="w-20 h-20 rounded-full text-white flex items-center justify-center font-semibold text-2xl shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {t.name}, <span className="text-muted-foreground font-normal">{t.credentials}</span>
                </h1>
                <div className="mt-2 flex items-center gap-1 text-muted-foreground">
                  <Star className="w-4 h-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
                  <span className="font-medium text-foreground">{t.rating.toFixed(1)}</span>
                  <span>· {t.reviews} reviews · {t.years} years practicing</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">About me</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t.bio}</p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I draw on {t.modalities.join(" and ")} depending on what fits the moment. We&rsquo;ll
                check in regularly on what&rsquo;s working and what we should change — therapy should feel
                like something we&rsquo;re building together, not something being done to you.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <InfoRow icon={GraduationCap} label="Credentials" value={`${t.credentials} · ${t.years} years`} />
              <InfoRow icon={Sparkles} label="Approaches" value={t.modalities.join(", ")} />
              <InfoRow icon={Languages} label="Languages" value={t.languages.join(", ")} />
              <InfoRow icon={CalendarDays} label="Availability" value={t.availability} />
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold">What clients say</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <ClientNote stars={5} text="I felt heard in the first session. Didn't expect that." />
                <ClientNote stars={5} text="Practical, kind, and doesn't let me off the hook (in a good way)." />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 sticky top-24">
              <p className="text-sm text-muted-foreground">Weekly sessions start at</p>
              <p className="mt-1 text-3xl font-semibold">$85<span className="text-base text-muted-foreground font-normal">/week</span></p>
              <Link
                href="/get-started"
                className="mt-5 block text-center bg-brand-600 hover:bg-brand-700 text-white font-medium px-5 py-3 rounded-full transition"
              >
                Book with {t.name.split(" ")[0]}
              </Link>
              <Link
                href="/therapists"
                className="mt-3 block text-center border border-[color:var(--border)] hover:border-brand-400 font-medium px-5 py-3 rounded-full transition"
              >
                See more therapists
              </Link>
              <p className="mt-5 text-xs text-muted-foreground text-center">
                Cancel anytime · Switch therapists in two taps
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <h2 className="text-2xl font-semibold">You might also connect with</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/therapists/${o.id}`}
                className="rounded-2xl border border-[color:var(--border)] bg-white p-5 hover:border-brand-300 transition flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full text-white flex items-center justify-center font-semibold shrink-0"
                  style={{ backgroundColor: o.color }}
                >
                  {o.initials}
                </div>
                <div>
                  <p className="font-semibold">
                    {o.name}, <span className="text-muted-foreground font-normal">{o.credentials}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{o.specialties.slice(0, 2).join(" · ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-white p-4 flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function ClientNote({ stars, text }: { stars: number; text: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-white p-5">
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
        ))}
      </div>
      <p className="mt-3 text-sm">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
