"use client";
import { ShieldCheck, UserCheck, Wallet, Headphones } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why choose us"
          title={<>Benefits built for <Em>your success</Em></>}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full bg-accent/40 blur-[90px]" />
              <UserCheck className="h-10 w-10 text-sky" />
              <h3 className="mt-6 text-3xl font-bold">Dedicated project manager</h3>
              <p className="mt-3 max-w-md text-white/60">
                One point of contact who knows your project inside out, so you are never chasing updates.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="w-fit rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3 text-sm backdrop-blur">
                  Homepage design is ready for review ✨
                </div>
                <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-accent px-4 py-3 text-sm">
                  Looks amazing, let&apos;s go live!
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-navy/10 bg-white p-8">
              <ShieldCheck className="h-10 w-10 text-accent" />
              <h3 className="mt-6 text-2xl font-bold text-navy">NDA &amp; security</h3>
              <p className="mt-3 text-ink/60">Every team member signs an NDA. Your ideas and data stay protected.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-navy/10 bg-white p-8">
              <Wallet className="h-10 w-10 text-accent" />
              <h3 className="mt-6 text-2xl font-bold text-navy">Easy payments</h3>
              <p className="mt-3 text-ink/60">Pay securely in your currency with low fees.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Payoneer", "Bank transfer", "Multi-currency"].map((t) => (
                  <span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-gradient-to-br from-accent to-navy p-8 text-white md:flex-row md:items-center md:p-10">
              <div>
                <Headphones className="h-10 w-10" />
                <h3 className="mt-6 text-3xl font-bold">Support after delivery</h3>
                <p className="mt-3 max-w-md text-white/70">
                  We stay with you after launch, including showing you how to update your site yourself.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-white px-7 py-4 text-center font-semibold text-navy transition-transform hover:scale-105"
              >
                Book a free call
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
