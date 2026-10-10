"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "@/components/ui/Logo";
import Magnetic from "@/components/ui/Magnetic";
import { nav, services, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-500 md:px-6 ${
          scrolled
            ? "h-16 border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(0,26,77,0.08)] backdrop-blur-xl"
            : "h-20 border border-transparent"
        }`}
      >
        <a href="#top" aria-label="OctanSoft home">
          <Brand />
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-navy lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <a href={item.href} className="flex items-center gap-1 transition-colors hover:text-accent">
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${dropdown ? "rotate-180" : ""}`} />
                </a>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                    >
                      <div className="w-72 rounded-2xl bg-navy-900 p-2 shadow-2xl">
                        {services.map((s) => (
                          <a
                            key={s.title}
                            href="#services"
                            className="block rounded-xl px-4 py-3 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={item.href} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Magnetic>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy px-6 pb-10 pt-6 text-white lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Brand light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col">
              {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-center justify-between border-b border-white/10 py-5 text-4xl font-semibold tracking-tight"
                >
                  {item.label}
                  <ArrowUpRight className="h-6 w-6 text-white/40" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto space-y-2 text-white/60">
              <p>{site.email}</p>
              <p>{site.whatsapp}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
