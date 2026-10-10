"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Quote } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import { videoTestimonials } from "@/lib/data";

function VideoCard({ t }: { t: (typeof videoTestimonials)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      data-cursor={playing ? "Pause" : "Play"}
      onClick={toggle}
      className="group relative aspect-[9/16] w-[250px] shrink-0 snap-start overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-accent md:w-[290px]"
    >
      {t.video ? (
        <video
          ref={ref}
          src={t.video}
          poster={t.poster || undefined}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-x-6 top-8 text-white">
          <Quote className="h-8 w-8 text-white/30" />
          <p className="mt-4 font-serif text-2xl italic leading-snug">Video testimonial coming soon</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div
        className={`absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 ${
          playing ? "opacity-0 group-hover:opacity-100" : ""
        }`}
      >
        {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
      </div>
      <div className="absolute inset-x-5 bottom-5 text-white">
        <p className="font-semibold">{t.name}</p>
        <p className="text-sm text-white/70">{t.role}</p>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 310, behavior: "smooth" });

  return (
    <section id="testimonials" className="overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          light
          center={false}
          eyebrow="Client stories"
          title={<>Hear it from <Em>our clients</Em></>}
        />
        <div className="flex gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {videoTestimonials.map((t, i) => (
          <VideoCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}
