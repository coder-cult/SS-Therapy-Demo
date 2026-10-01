import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">In their words</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Small shifts that added up.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl bg-white border border-[color:var(--border)] p-7 flex flex-col"
            >
              <Quote className="w-7 h-7 text-brand-300" />
              <blockquote className="mt-4 text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[color:var(--border)]">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
