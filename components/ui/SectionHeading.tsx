import Reveal from "./Reveal";

export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-serif font-normal italic text-accent">{children}</em>;
}

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "border-white/15 text-white/70" : "border-navy/10 text-navy/70"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className={`mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-base md:text-lg ${light ? "text-white/60" : "text-ink/60"}`}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
