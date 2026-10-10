"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/ui/Logo";
import { showreel } from "@/lib/data";

export default function Showreel() {
  const wrap = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [80, 32]);

  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    v.muted = !v.muted;
    setSound(!v.muted);
  };

  return (
    <section className="overflow-hidden pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why us"
          title={<>Your growth is <Em>our mission</Em></>}
          desc="See the care and craft we bring to every client partnership."
        />

        <div ref={wrap} className="mt-14">
          <motion.div
            style={{ scale, borderRadius: radius }}
            data-cursor={showreel.video ? (sound ? "Mute" : "Sound") : undefined}
            onClick={toggle}
            className="group relative aspect-video overflow-hidden bg-gradient-to-br from-navy via-navy to-accent"
          >
            {showreel.video ? (
              <video
                ref={vid}
                src={showreel.video}
                poster={showreel.poster || undefined}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
                <LogoMark className="h-16 w-auto text-white/80 md:h-24" />
                <p className="font-serif text-2xl italic text-white/70 md:text-4xl">Showreel coming soon</p>
              </div>
            )}
            {showreel.video && (
              <span className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md">
                {sound ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
