import Link from "next/link";
import {
  ClipboardList,
  UserSearch,
  MessageSquareHeart,
  CalendarCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export const metadata = { title: "How it works · Serenity" };

const stages = [
  {
    icon: ClipboardList,
    title: "Tell us what you want",
    body:
      "A short intake — about ten minutes — on what&rsquo;s going on, how you want to work, and what&rsquo;s got in the way before. You can skip anything you&rsquo;re not ready to share.",
  },
  {
    icon: UserSearch,
    title: "We hand-match you",
    body:
      "A small team member reviews your intake and shortlists therapists whose practice fits what you asked for. You see three profiles, read them properly, and pick one.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule your first session",
    body:
      "Book a time that fits around your actual week. The first session is a check-fit — you&rsquo;re not locked into anything.",
  },
  {
    icon: MessageSquareHeart,
    title: "Message between sessions",
    body:
      "Share what came up on Wednesday without waiting until Friday. Your therapist responds on agreed days, usually within 24 hours.",
  },
  {
    icon: RefreshCw,
    title: "Adjust as you go",
    body:
      "Not clicking? Change therapists in two taps and bring your history with you. Done for now? Pause your plan without losing your records.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 border-b border-[color:var(--border)]">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">How it works</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            From &ldquo;I should probably talk to someone&rdquo; to your first session, in about a week.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Here&rsquo;s what each stage actually looks like, and what you can expect from us.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3.5 rounded-full transition"
            >
              Start the intake <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-4xl">
          <ol className="space-y-10">
            {stages.map((s, i) => (
              <li key={i} className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-brand-700">Step {i + 1}</p>
                </div>
                <div>
                  <h2
                    className="text-2xl font-semibold tracking-tight"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <p
                    className="mt-3 text-lg text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
