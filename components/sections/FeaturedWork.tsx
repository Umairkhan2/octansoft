import { ArrowUpRight } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/ui/Logo";
import { caseStudies } from "@/lib/data";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={<>Proven success in <Em>every industry</Em></>}
          desc="A look at how we help businesses launch, grow and scale."
        />

        <div className="mt-16 space-y-8">
          {caseStudies.map((c, i) => (
            <div key={c.title} className="md:sticky" style={{ top: `${110 + i * 28}px` }}>
              <div
                data-cursor="View"
                className="grid overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_-10px_40px_rgba(0,26,77,0.08)] md:grid-cols-2"
              >
                <div className="flex flex-col p-8 md:p-12">
                  <span className="w-fit rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                    {c.industry}
                  </span>
                  <h3 className="mt-6 text-3xl font-bold leading-tight text-navy md:text-4xl">{c.title}</h3>
                  <p className="mt-4 text-ink/60">{c.desc}</p>
                  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-navy/10 pt-6 text-sm">
                    <div>
                      <p className="text-ink/50">Scope</p>
                      <p className="mt-1 font-semibold text-navy">{c.scope}</p>
                    </div>
                    <div>
                      <p className="text-ink/50">Duration</p>
                      <p className="mt-1 font-semibold text-navy">{c.duration}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative min-h-[260px] overflow-hidden md:min-h-[440px]"
                  style={{ background: `linear-gradient(140deg, ${c.from}, ${c.to})` }}
                >
                  {c.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/15">
                      <LogoMark className="h-24 w-auto" />
                    </div>
                  )}
                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
