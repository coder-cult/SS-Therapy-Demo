import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 text-white p-10 md:p-16">
          <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              There is no &ldquo;ready.&rdquo; There&rsquo;s just the next ten minutes.
            </h2>
            <p className="mt-4 text-brand-100 text-lg">
              Take the intake — it&rsquo;s a short set of questions, not a commitment. You can decide what&rsquo;s next after.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-medium px-6 py-3.5 rounded-full transition"
              >
                Start the intake <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/therapists"
                className="inline-flex items-center justify-center gap-2 bg-brand-800/40 hover:bg-brand-800/60 border border-brand-500/60 text-white font-medium px-6 py-3.5 rounded-full transition"
              >
                Browse therapists
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
