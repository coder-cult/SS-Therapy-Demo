import Link from "next/link";
import { Leaf } from "lucide-react";

const groups = [
  {
    title: "Serenity",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/therapists", label: "Find a therapist" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact us" },
      { href: "/get-started", label: "Get matched" },
      { href: "/login", label: "Log in" },
    ],
  },
  {
    title: "Specialties",
    links: [
      { href: "/therapists", label: "Anxiety" },
      { href: "/therapists", label: "Depression" },
      { href: "/therapists", label: "Couples" },
      { href: "/therapists", label: "Trauma" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Notice of privacy practices" },
      { href: "#", label: "Accessibility" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--sand)] border-t border-[color:var(--border)] mt-24">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-100 text-brand-700">
                <Leaf className="w-5 h-5" />
              </span>
              Serenity
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Online therapy that fits around your life — not the other way around.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{g.title}</h4>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted-foreground hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[color:var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground max-w-2xl">
            Serenity is a demo site. It is not a real therapy service. If you are in immediate danger,
            please call or text 988 (US) or your local emergency number.
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Serenity, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
