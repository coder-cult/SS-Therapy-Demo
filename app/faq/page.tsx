import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { faqs } from "@/lib/data";

export const metadata = { title: "FAQ · Serenity" };

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 border-b border-[color:var(--border)]">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">FAQ</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            The questions people actually ask.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Didn&rsquo;t find yours below? Send us a note — a real person reads every message.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
