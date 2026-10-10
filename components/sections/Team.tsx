import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our team"
          title={<>The people behind <Em>your growth</Em></>}
          desc="Developers, designers and strategists working as one team for you."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={i} delay={(i % 4) * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-accent">
                  {m.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/15">
                      <LogoMark className="h-14 w-auto" />
                    </div>
                  )}
                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 transition duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {m.skills.map((s) => (
                      <span key={s} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{m.name}</h3>
                <p className="text-sm text-ink/60">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
