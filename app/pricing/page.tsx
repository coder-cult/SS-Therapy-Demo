import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { plans, faqs } from "@/lib/data";

export const metadata = { title: "Pricing · Serenity" };

const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: "We don&rsquo;t offer a free trial, but the first session is a fit-check — if it isn&rsquo;t right, we&rsquo;ll match you with another therapist and you only pay once that work begins.",
  },
  {
    q: "Can I pause my plan?",
    a: "Yes. Pause for up to twelve weeks at a time. Your therapist and notes are waiting when you come back.",
  },
  {
    q: "Do you take insurance?",
    a: "We&rsquo;re out-of-network with most major carriers in the US. We generate a superbill after each session that you can submit for reimbursement, and we&rsquo;ll check your out-of-network benefits for free before you commit.",
  },
  ...faqs.slice(3, 6),
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 border-b border-[color:var(--border)]">
        <div className="container-page text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">Pricing</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Simple weekly plans. No surprise bills.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Billed every four weeks. Pause or cancel from your dashboard — no phone calls required.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-brand-50 border border-brand-100 p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold">Need lower-cost care?</h3>
            <p className="mt-2 text-muted-foreground">
              If cost is in the way, email us at{" "}
              <a href="mailto:hello@serenity.example" className="text-brand-700 underline">
                hello@serenity.example
              </a>
              . We hold a small number of reduced-fee spots each month and will do our best to get you
              seen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--sand)]">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Pricing questions</h2>
          <div className="mt-8">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
