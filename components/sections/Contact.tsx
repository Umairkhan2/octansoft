"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { budgets, site } from "@/lib/data";

const input =
  "w-full rounded-2xl border border-navy/10 bg-paper px-5 py-4 text-navy outline-none transition placeholder:text-ink/40 focus:border-accent focus:bg-white";

export default function Contact() {
  const [budget, setBudget] = useState(budgets[1]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nWhatsApp: ${f.get("whatsapp")}\nBudget: ${budget}\n\n${f.get("details")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="px-3 pb-24 md:px-4 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/40 blur-[100px]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Free consultation</span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Let&apos;s build something <em className="font-serif font-normal italic text-sky">great.</em>
            </h2>
            <ul className="mt-8 space-y-3 text-white/75">
              {["Reply within 24 hours", "NDA signed on request", "Dedicated project manager"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sky" /> {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-10 flex flex-wrap gap-3">
              <a href={site.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition-transform hover:scale-105">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition-colors hover:bg-white/10">
                <Mail className="h-5 w-5" /> {site.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="h-full rounded-[2rem] border border-navy/10 bg-white p-8 md:p-12">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Full name" className={input} />
              <input name="email" type="email" required placeholder="Email address" className={input} />
            </div>
            <input name="whatsapp" placeholder="WhatsApp number" className={`${input} mt-4`} />

            <p className="mb-3 mt-6 text-sm font-semibold text-navy">Project budget</p>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    budget === b ? "border-accent bg-accent text-white" : "border-navy/10 text-navy hover:border-navy"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <textarea name="details" required rows={5} placeholder="Tell us about your project" className={`${input} mt-6 resize-none`} />

            <Magnetic className="mt-6">
              <button type="submit" className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white transition-colors hover:bg-navy">
                Send Inquiry
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
