"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, User, Leaf } from "lucide-react";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const isLogin = mode === "login";

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-brand-50 to-white py-16">
      <div className="container-page">
        <div className="max-w-md mx-auto">
          <Link href="/" className="flex items-center justify-center gap-2 font-semibold text-xl">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-700">
              <Leaf className="w-5 h-5" />
            </span>
            Serenity
          </Link>

          <div className="mt-8 bg-white border border-[color:var(--border)] rounded-3xl p-8 md:p-10">
            <h1 className="text-2xl font-semibold tracking-tight">
              {isLogin ? "Welcome back." : "Create your account."}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {isLogin
                ? "Pick up where you left off."
                : "This is a demo — no real account is created."}
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-brand-50 border border-brand-200 p-5 text-sm">
                <p className="font-medium text-brand-700">Demo only.</p>
                <p className="mt-1 text-muted-foreground">
                  In a real build this would submit to an auth provider. For now,{" "}
                  <Link href="/dashboard" className="text-brand-700 underline">
                    jump to the dashboard
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                {!isLogin && (
                  <Field icon={User} label="Name" type="text" placeholder="Your name" />
                )}
                <Field icon={Mail} label="Email" type="email" placeholder="you@example.com" />
                <Field icon={Lock} label="Password" type="password" placeholder="••••••••" />

                {isLogin && (
                  <div className="text-right">
                    <Link href="#" className="text-sm text-brand-700 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium px-5 py-3 rounded-full transition"
                >
                  {isLogin ? "Log in" : "Create account"}
                </button>

                <div className="relative py-2 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[color:var(--border)]" />
                  </div>
                  <span className="relative bg-white px-3 text-xs text-muted-foreground uppercase tracking-wider">
                    or
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full border border-[color:var(--border)] hover:border-brand-400 font-medium px-5 py-3 rounded-full transition"
                >
                  Continue with Google
                </button>
              </form>
            )}

            <p className="mt-6 text-sm text-center text-muted-foreground">
              {isLogin ? (
                <>
                  Don&rsquo;t have an account?{" "}
                  <Link href="/signup" className="text-brand-700 font-medium hover:underline">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <Link href="/login" className="text-brand-700 font-medium hover:underline">
                    Log in
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  type,
  placeholder,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1.5 relative">
        <Icon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[color:var(--border)] focus:border-brand-500 focus:outline-none"
        />
      </div>
    </label>
  );
}
