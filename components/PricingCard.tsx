import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 flex flex-col h-full border transition",
        plan.featured
          ? "bg-brand-700 text-white border-brand-700 shadow-xl relative lg:scale-105"
          : "bg-white border-[color:var(--border)]"
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[color:var(--accent)] text-brand-900 px-3 py-1 rounded-full">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className={cn("mt-1 text-sm", plan.featured ? "text-brand-100" : "text-muted-foreground")}>
        {plan.tagline}
      </p>
      <p className="mt-6 text-5xl font-semibold tracking-tight">
        ${plan.price}
        <span className={cn("ml-1 text-base font-normal", plan.featured ? "text-brand-100" : "text-muted-foreground")}>
          {plan.cadence}
        </span>
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check
              className={cn(
                "w-5 h-5 shrink-0 mt-0.5",
                plan.featured ? "text-[color:var(--accent)]" : "text-brand-600"
              )}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/get-started"
        className={cn(
          "mt-8 text-center px-5 py-3 rounded-full font-medium transition",
          plan.featured
            ? "bg-white text-brand-700 hover:bg-brand-50"
            : "bg-brand-600 text-white hover:bg-brand-700"
        )}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
