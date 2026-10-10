import { ArrowUpRight } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { jobs, site } from "@/lib/data";

export default function Careers() {
  return (
    <section id="careers" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center={false}
          eyebrow="Careers"
          title={<>Join the <Em>OctanSoft</Em> team</>}
          desc="Work with clients from around the world and grow your skills with us."
        />

        <div className="mt-12 border-t border-navy/10">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.1}>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Application: " + j.title)}`}
                className="group flex flex-col gap-4 border-b border-navy/10 px-2 py-8 transition-all duration-500 hover:rounded-3xl hover:border-transparent hover:bg-navy hover:px-8 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-navy transition-colors group-hover:text-white md:text-3xl">{j.title}</h3>
                  <p className="mt-2 text-ink/60 transition-colors group-hover:text-white/60">{j.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  {[j.type, j.mode].map((t) => (
                    <span key={t} className="rounded-full border border-navy/10 px-4 py-1.5 text-sm font-medium text-navy transition-colors group-hover:border-white/20 group-hover:text-white">
                      {t}
                    </span>
                  ))}
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
