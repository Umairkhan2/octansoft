"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { projects, site } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const BASE = 1.2;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: BASE + delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="pb-4">
      <div
        data-cursor="View"
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
        style={{ background: `linear-gradient(140deg, ${p.from}, ${p.to})` }}
      >
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
        )}
        <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/15 p-3 text-white backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-widest text-white/70">{p.category}</p>
          <p className="text-sm font-semibold">{p.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const colA = projects.filter((_, i) => i % 2 === 0);
  const colB = projects.filter((_, i) => i % 2 === 1);

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,26,77,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,26,77,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: BASE, ease }}
            className="inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white/70 py-1.5 pl-1.5 pr-4 text-sm shadow-sm backdrop-blur"
          >
            <span className="flex items-center gap-1 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {site.rating}
            </span>
            <span className="text-navy/70">Trusted by 2300+ businesses</span>
          </motion.div>

          <h1 className="mt-7 text-[13vw] font-bold leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <Line delay={0.1}>
              We build <em className="font-serif font-normal italic text-accent">software</em>
            </Line>
            <Line delay={0.2}>that grows your</Line>
            <Line delay={0.3}>
              <em className="font-serif font-normal italic text-accent">business.</em>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: BASE + 0.5, ease }}
            className="mt-6 max-w-lg text-lg text-ink/60"
          >
            Websites, custom web apps, SaaS MVPs and brands, built by one dedicated team that
            treats your business like its own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: BASE + 0.65, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(47,107,255,0.4)] transition-colors hover:bg-navy"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <a
              href="#services"
              className="rounded-full border border-navy/15 px-8 py-4 font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: BASE + 0.2, ease }}
          className="group relative grid h-[420px] grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] md:h-[600px]"
        >
          <div className="animate-marquee-up group-hover:[animation-play-state:paused]">
            {[...colA, ...colA].map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
          <div className="animate-marquee-up [animation-direction:reverse] group-hover:[animation-play-state:paused]">
            {[...colB, ...colB].map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
