"use client";

import { useState } from "react";
import { Mail, MessageCircle, Shield, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 border-b border-[color:var(--border)]">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium text-brand-700 uppercase tracking-wider">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Got a question? We&rsquo;re people, not a chatbot.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We read every message and reply within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <InfoCard
              icon={Mail}
              title="Email"
              body="hello@serenity.example"
              hint="General questions, press, partnerships"
            />
            <InfoCard
              icon={MessageCircle}
              title="Clinical support"
              body="support@serenity.example"
              hint="Already a member? Fastest route for billing or scheduling"
            />
            <InfoCard
              icon={Shield}
              title="In crisis?"
              body="988 (US) · 112 (EU)"
              hint="If you&rsquo;re in immediate danger, please call or text."
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-[color:var(--border)] rounded-3xl p-8 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold">Message sent (demo).</h2>
                  <p className="mt-2 text-muted-foreground">
                    In a real build this would land in our inbox. We&rsquo;d reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField label="Your name" placeholder="Rae Johnson" />
                  <TextField label="Email" type="email" placeholder="rae@example.com" />
                  <div className="md:col-span-2">
                    <TextField label="Subject" placeholder="A question about matching" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block">
                      <span className="text-sm font-medium">How can we help?</span>
                      <textarea
                        rows={6}
                        placeholder="Tell us a bit about what you&rsquo;re looking for."
                        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white border border-[color:var(--border)] focus:border-brand-500 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-full"
                    >
                      Send message <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[color:var(--border)] p-6">
      <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 font-medium">{body}</p>
      <p
        className="mt-1 text-sm text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: hint }}
      />
    </div>
  );
}

function TextField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white border border-[color:var(--border)] focus:border-brand-500 focus:outline-none"
      />
    </label>
  );
}
