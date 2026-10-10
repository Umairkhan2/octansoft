import { tech } from "@/lib/data";
import { LogoMark } from "@/components/ui/Logo";

export default function TechMarquee() {
  return (
    <section className="border-y border-navy/10 bg-white py-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
        Tools &amp; platforms we master
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 text-2xl font-semibold text-navy/30 transition-colors hover:text-navy md:text-3xl">
              {t}
              <LogoMark className="h-3 w-auto text-accent/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
