import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import TherapistCard from "@/components/TherapistCard";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { therapists, plans, faqs } from "@/lib/data";

export default function Home() {
  const preview = therapists.slice(0, 4);
  const topFaqs = faqs.slice(0, 5);
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Benefits />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">
                Meet the therapists
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                A real human in your corner.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every therapist on Serenity is independently licensed with years of post-graduate practice.
                Here are a few.
              </p>
            </div>
            <Link href="/therapists" className="text-brand-700 font-medium hover:underline">
              See all therapists →
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {preview.map((t) => (
              <TherapistCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 lg:py-28 bg-[color:var(--sand)]">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">Pricing</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Pay by the week. Pause whenever.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every plan includes unlimited messaging and the option to switch therapists at any time.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              The questions people actually ask.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Didn&rsquo;t find yours?{" "}
              <Link href="/contact" className="text-brand-700 underline underline-offset-2">
                Send it over
              </Link>{" "}
              — we read every one.
            </p>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion items={topFaqs} />
            <div className="mt-6">
              <Link href="/faq" className="text-brand-700 font-medium hover:underline">
                See all questions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
