import { ArrowUp } from "lucide-react";
import { Brand } from "@/components/ui/Logo";
import { nav, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-sm text-white/60">
              Websites, web apps, SaaS products and brands for businesses that want to grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white hover:text-navy">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Company</h4>
            <ul className="mt-5 space-y-3">
              {[...nav, { label: "Contact", href: "#contact" }].map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/75 transition-colors hover:text-white">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-white/75 transition-colors hover:text-white">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Contact</h4>
            <ul className="mt-5 space-y-3 text-white/75">
              <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
              <li><a href={site.whatsappLink} className="hover:text-white">{site.whatsapp}</a></li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} OctanSoft. All rights reserved.</p>
          <a href="#top" className="flex items-center gap-2 transition-colors hover:text-white">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <p aria-hidden className="pointer-events-none select-none text-center text-[19vw] font-bold leading-[0.8] tracking-tighter text-white/[0.05]">
        OctanSoft
      </p>
    </footer>
  );
}
