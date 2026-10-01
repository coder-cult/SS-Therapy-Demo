import { Smartphone, CalendarClock, RefreshCw, Lock, HeartHandshake, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Meet from anywhere",
    body: "Video, voice, or chat — on the device you already carry. No commute, no waiting room.",
  },
  {
    icon: CalendarClock,
    title: "Evenings and weekends",
    body: "Sessions outside of 9-to-5, because that&rsquo;s often when there&rsquo;s actually time.",
  },
  {
    icon: RefreshCw,
    title: "Switch anytime",
    body: "Fit matters. Change therapists in two taps and keep your history where it is.",
  },
  {
    icon: Lock,
    title: "Private by default",
    body: "End-to-end encryption, no data sold, no training on your sessions. Ever.",
  },
  {
    icon: HeartHandshake,
    title: "Specialists for every chapter",
    body: "Trauma, grief, couples, parenting, identity, burnout, something you can&rsquo;t name yet.",
  },
  {
    icon: PiggyBank,
    title: "Honest pricing",
    body: "Flat weekly rate. Pause when you need to. Superbills for out-of-network reimbursement.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--sand)]">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">Why Serenity</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Built for how people actually make time for therapy.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white border border-[color:var(--border)] p-7 hover:border-brand-300 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <b.icon className="w-5 h-5" />
              </div>
              <h3
                className="mt-5 text-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: b.title }}
              />
              <p
                className="mt-2 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: b.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
