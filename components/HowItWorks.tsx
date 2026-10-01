import Link from "next/link";
import { ClipboardList, UserSearch, MessageSquareHeart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us what you&rsquo;re working on",
    body: "Answer a short set of questions — about ten minutes — so we understand what you want from therapy and what you don&rsquo;t.",
  },
  {
    icon: UserSearch,
    title: "Meet a therapist who fits",
    body: "We match you by specialty, approach, availability, and the small human stuff. Not a click, not a crush of 500 profiles.",
  },
  {
    icon: MessageSquareHeart,
    title: "Start the work",
    body: "Message between sessions, meet live each week, and switch therapists any time without starting over.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">How it works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Three steps, then you&rsquo;re actually doing the thing.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most people spend months thinking about starting therapy. Here&rsquo;s what the first week looks like.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[color:var(--border)] bg-white p-7 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="mt-5 text-sm font-semibold text-brand-700">Step {i + 1}</p>
              <h3
                className="mt-1 text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-full font-medium transition"
          >
            Start the intake <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
