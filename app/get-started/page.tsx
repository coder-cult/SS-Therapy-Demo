"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  key: string;
  question: string;
  helper?: string;
  options: string[];
  multi?: boolean;
};

const steps: Step[] = [
  {
    key: "focus",
    question: "What&rsquo;s bringing you here right now?",
    helper: "Pick anything that feels close. You can change this later.",
    options: [
      "Anxiety or constant worry",
      "Low mood or depression",
      "Relationship or family stuff",
      "Work stress or burnout",
      "Grief or a big loss",
      "Something I can&rsquo;t name yet",
    ],
    multi: true,
  },
  {
    key: "experience",
    question: "Have you worked with a therapist before?",
    options: ["First time", "Yes, in the past", "I&rsquo;m currently seeing one"],
  },
  {
    key: "style",
    question: "How do you want to work?",
    helper: "There&rsquo;s no wrong answer — this just shapes who we show you.",
    options: [
      "Direct — give me things to try",
      "Reflective — help me notice patterns",
      "Warm — I need to feel safe first",
      "Not sure yet",
    ],
  },
  {
    key: "when",
    question: "When would you prefer to meet?",
    options: ["Weekday mornings", "Weekday afternoons", "Weekday evenings", "Weekends", "Flexible"],
    multi: true,
  },
  {
    key: "format",
    question: "How do you want to meet?",
    options: ["Video", "Voice only", "Messaging-mostly", "A mix"],
  },
  {
    key: "age",
    question: "Last thing — how old are you?",
    options: ["Under 18", "18–25", "26–40", "41–60", "60+"],
  },
];

export default function GetStartedPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [done, setDone] = useState(false);

  const current = steps[step];
  const progress = ((step + (done ? 1 : 0)) / steps.length) * 100;

  function select(opt: string) {
    const prev = answers[current.key];
    if (current.multi) {
      const list = Array.isArray(prev) ? prev : [];
      const next = list.includes(opt) ? list.filter((x) => x !== opt) : [...list, opt];
      setAnswers({ ...answers, [current.key]: next });
    } else {
      setAnswers({ ...answers, [current.key]: opt });
      setTimeout(advance, 150);
    }
  }

  function advance() {
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  const selected = (opt: string) => {
    const v = answers[current?.key];
    if (Array.isArray(v)) return v.includes(opt);
    return v === opt;
  };

  const hasAnswer = () => {
    const v = answers[current?.key];
    return Array.isArray(v) ? v.length > 0 : !!v;
  };

  if (done) {
    return (
      <section className="min-h-[70vh] flex items-center bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <div className="max-w-xl mx-auto text-center rounded-3xl bg-white border border-[color:var(--border)] p-10 md:p-14">
            <div className="w-14 h-14 mx-auto rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
              You&rsquo;re all set.
            </h1>
            <p className="mt-4 text-muted-foreground">
              We&rsquo;re pulling together a short list of therapists based on what you shared. You&rsquo;ll
              see them in your dashboard — usually within a few hours, always within 48.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-full"
              >
                Go to my dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/therapists"
                className="inline-flex items-center justify-center gap-2 border border-[color:var(--border)] hover:border-brand-400 font-medium px-6 py-3 rounded-full"
              >
                Browse manually
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-brand-50 to-white py-12">
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>Step {step + 1} of {steps.length}</span>
            <Link href="/" className="hover:text-brand-700">Save and exit</Link>
          </div>

          <div className="h-1.5 w-full bg-brand-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-10 bg-white border border-[color:var(--border)] rounded-3xl p-8 md:p-10">
            <h1
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              dangerouslySetInnerHTML={{ __html: current.question }}
            />
            {current.helper && (
              <p className="mt-3 text-muted-foreground">{current.helper}</p>
            )}

            <div className="mt-8 grid gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(opt)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 text-left px-5 py-4 rounded-2xl border transition",
                    selected(opt)
                      ? "border-brand-600 bg-brand-50"
                      : "border-[color:var(--border)] hover:border-brand-400"
                  )}
                >
                  <span
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: opt }}
                  />
                  <span
                    className={cn(
                      "w-6 h-6 rounded-full border flex items-center justify-center transition",
                      selected(opt)
                        ? "bg-brand-600 border-brand-600 text-white"
                        : "border-[color:var(--border)]"
                    )}
                  >
                    {selected(opt) && <Check className="w-4 h-4" />}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 text-muted-foreground disabled:opacity-30 hover:text-brand-700"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {current.multi && (
                <button
                  onClick={advance}
                  disabled={!hasAnswer()}
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-300 text-white font-medium px-6 py-3 rounded-full transition"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
