"use client";
import { ArrowUpRight } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title={<>Services that <Em>kick-start</Em> your business</>}
          desc="Everything you need to launch, grow and scale online, under one roof."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <a
                  href="#contact"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:bg-navy hover:shadow-[0_30px_60px_rgba(0,26,77,0.25)]"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/40" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-navy/30 transition-colors group-hover:text-white/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-navy transition-colors duration-500 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink/60 transition-colors duration-500 group-hover:text-white/70">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy/10 px-3 py-1 text-xs font-medium text-navy/70 transition-colors duration-500 group-hover:border-white/20 group-hover:text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-accent transition-colors group-hover:text-white">
                    Start a project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
