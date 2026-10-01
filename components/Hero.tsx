import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[color:var(--sand)]">
      <div className="container-page grid lg:grid-cols-2 gap-12 py-20 lg:py-28 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Licensed therapists · Private · Flexible
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            Therapy that works around <span className="text-brand-600">your actual life.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Answer a few questions and we&apos;ll match you with a therapist who fits — in days, not weeks.
            Meet on video, voice, or chat. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3.5 rounded-full transition"
            >
              Get matched <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[color:var(--border)] hover:border-brand-400 font-medium px-6 py-3.5 rounded-full transition"
            >
              See how it works
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-600" /> Matched in under 48 hours
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Users className="w-4 h-4 text-brand-600" /> 35,000+ licensed therapists
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600" /> End-to-end encrypted
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-brand-200/40 rounded-[3rem] blur-2xl -z-10" />
          <div className="rounded-[2rem] bg-white border border-[color:var(--border)] shadow-xl p-6 md:p-8 relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-semibold">
                AW
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Amara Whitfield, LCSW</h3>
                  <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">Online now</span>
                </div>
                <p className="text-sm text-muted-foreground">Anxiety · Work stress · Mindfulness</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-[color:var(--muted)] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">Hey — I saw your intake notes. How did the past week actually feel?</p>
              </div>
              <div className="bg-brand-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] ml-auto">
                <p className="text-sm">Honestly a lot better. The sleep thing we talked about helped.</p>
              </div>
              <div className="bg-[color:var(--muted)] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">Love that. Let&apos;s build on it. See you Thursday 7pm?</p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[color:var(--border)] grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-semibold text-brand-700">9</p>
                <p className="text-xs text-muted-foreground">years practicing</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-700">4.9</p>
                <p className="text-xs text-muted-foreground">average rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-700">182</p>
                <p className="text-xs text-muted-foreground">clients helped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
