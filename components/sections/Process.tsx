"use client";
import { motion } from "framer-motion";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { steps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title={<>Simple steps, <Em>professional</Em> results</>}
          desc="A clear process from your first message to the final launch."
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-accent via-navy/20 to-accent md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="relative flex gap-5 md:block">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy font-bold text-white shadow-[0_10px_30px_rgba(0,26,77,0.25)]">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy md:mt-6">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
