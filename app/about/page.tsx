import Link from "next/link";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export const metadata = { title: "About · Serenity" };

const values = [
  {
    icon: Heart,
    title: "People, not funnels",
    body: "The intake is a real conversation we read, not a form that sorts you into a bucket.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy on purpose",
    body: "Your sessions are yours. Encrypted end-to-end, never sold, never used to train anything.",
  },
  {
    icon: Sparkles,
    title: "Therapists, well-supported",
    body: "The quality of your care is downstream of how our therapists are treated. We pay fairly, cap caseloads, and listen when they push back.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 border-b border-[color:var(--border)]">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">About</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            We built Serenity for the people we love.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Not everyone has a therapist in their phone book or the time to collect one. Serenity is
            for the people who&rsquo;d go if the door were a little lower.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Serenity started as a side project between two friends — one who&rsquo;d spent months
            trying to find a therapist that fit, and one who kept hearing the same story from
            everyone around them. The hard part, it turned out, wasn&rsquo;t deciding to go. The hard
            part was the twenty hours of calls, voicemails, and insurance questions before the first
            session.
          </p>
          <p>
            So we built the thing we wished existed. Short intake, careful matching, flexible times,
            and a monthly bill that doesn&rsquo;t ambush you. Every therapist on the platform is
            independently licensed with years of post-graduate experience, and we take our time
            onboarding them.
          </p>
          <p>
            We&rsquo;re a small team, and we plan to stay that way. If you&rsquo;ve got feedback —
            good or sharp — we&rsquo;re at{" "}
            <a href="mailto:hello@serenity.example" className="text-brand-700 underline">
              hello@serenity.example
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--sand)]">
        <div className="container-page">
          <h2 className="text-3xl font-semibold tracking-tight">What we care about</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-[color:var(--border)] p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      <section className="py-20">
        <div className="container-page max-w-xl text-center">
          <h3 className="text-2xl font-semibold">Interested in joining as a therapist?</h3>
          <p className="mt-3 text-muted-foreground">
            We&rsquo;re always meeting new clinicians. Tell us a bit about your practice and we&rsquo;ll
            be in touch.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-full"
          >
            Say hi
          </Link>
        </div>
      </section>
    </>
  );
}
