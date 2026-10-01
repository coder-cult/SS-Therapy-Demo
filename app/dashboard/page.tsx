import Link from "next/link";
import {
  CalendarDays,
  MessageSquare,
  BookOpenCheck,
  Flame,
  Sparkles,
  Settings,
} from "lucide-react";
import { therapists } from "@/lib/data";

export const metadata = { title: "Dashboard · Serenity" };

export default function DashboardPage() {
  const t = therapists[0];
  return (
    <section className="bg-[color:var(--muted)] min-h-screen py-10">
      <div className="container-page grid lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-[color:var(--border)] p-5 sticky top-24">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">You</p>
            <p className="mt-1 font-semibold">Rashmi K.</p>
            <p className="text-sm text-muted-foreground">Week 3 · Messaging + Live</p>

            <nav className="mt-6 space-y-1 text-sm">
              {[
                { icon: CalendarDays, label: "Sessions", active: true },
                { icon: MessageSquare, label: "Messages" },
                { icon: BookOpenCheck, label: "Journal" },
                { icon: Sparkles, label: "Worksheets" },
                { icon: Settings, label: "Settings" },
              ].map((n) => (
                <button
                  key={n.label}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                    n.active
                      ? "bg-brand-50 text-brand-700 font-medium"
                      : "text-muted-foreground hover:bg-[color:var(--muted)]"
                  }`}
                >
                  <n.icon className="w-4 h-4" /> {n.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
              <div className="flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4 text-[color:var(--accent)]" />
                <span>7-day check-in streak</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-[color:var(--border)] p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Good evening</p>
            <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
              A quiet one tonight?
            </h1>
            <p className="mt-2 text-muted-foreground">
              Here&rsquo;s what&rsquo;s on deck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[color:var(--border)] p-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Next session</p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full text-white flex items-center justify-center font-semibold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold">
                    {t.name}, {t.credentials}
                  </p>
                  <p className="text-sm text-muted-foreground">Thursday · 7:00 PM</p>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-medium px-4 py-2.5 rounded-full">
                  Join session
                </button>
                <button className="px-4 py-2.5 rounded-full border border-[color:var(--border)] text-sm font-medium">
                  Reschedule
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[color:var(--border)] p-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Unread</p>
              <div className="mt-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-medium">{t.name.split(" ")[0]}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Love that reflection from Tuesday. One thought before Thursday — try the 2-minute
                    reset we talked about if the morning gets ahead of you.
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="mt-5 inline-flex text-sm text-brand-700 font-medium hover:underline"
              >
                Open conversation →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[color:var(--border)] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">This week&rsquo;s check-ins</h2>
              <Link href="#" className="text-sm text-brand-700 hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-7 gap-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl border flex flex-col items-center justify-center text-sm ${
                    i < 4
                      ? "bg-brand-100 border-brand-200 text-brand-700"
                      : "border-[color:var(--border)] text-muted-foreground"
                  }`}
                >
                  <span className="text-xs">{d}</span>
                  <span className="mt-1 text-lg">{i < 4 ? "✓" : "·"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[color:var(--border)] p-6">
            <h2 className="text-lg font-semibold">Suggested for you</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                { title: "A 3-minute reset for anxious mornings", mins: 3 },
                { title: "Noticing without fixing: a short practice", mins: 5 },
                { title: "Journal prompt: what did Tuesday ask of you?", mins: 4 },
                { title: "Sleep wind-down: the low-effort version", mins: 6 },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-[color:var(--border)] p-4 hover:border-brand-300 transition"
                >
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.mins} min read</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
