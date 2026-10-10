import { Star } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/data";

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="w-[320px] shrink-0 pr-5 md:w-[400px]">
      <div className="h-full rounded-3xl border border-navy/10 bg-white p-7">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="mt-4 text-ink/75">{r.text}</p>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-white">
            {r.name.charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-navy">{r.name}</p>
            <p className="text-sm text-ink/50">{r.from}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section className="overflow-hidden pb-24 md:pb-32">
      <div className="px-6">
        <SectionHeading
          eyebrow="Reviews"
          title={<>Trusted by people, <Em>chosen by brands</Em></>}
        />
      </div>

      <div className="mt-14 space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="group flex">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
        <div className="group flex">
          <div className="flex w-max animate-marquee [animation-direction:reverse] group-hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
