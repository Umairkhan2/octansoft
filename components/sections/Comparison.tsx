"use client";
import { Check, X } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { comparison } from "@/lib/data";

export default function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Compare"
          title={<>Why teams <Em>switch</Em> to us</>}
        />

        <Reveal className="mt-14">
          <div className="no-scrollbar overflow-x-auto rounded-3xl border border-navy/10 bg-white">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr>
                  <th className="p-5 text-sm font-medium text-ink/50 md:p-6">Feature</th>
                  {comparison.columns.map((c, i) => (
                    <th
                      key={c}
                      className={`p-5 text-center text-sm font-semibold md:p-6 ${i === 0 ? "bg-navy text-white" : "text-navy"}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r) => (
                  <tr key={r.label} className="border-t border-navy/5">
                    <td className="p-5 font-medium text-navy md:p-6">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i} className={`p-5 md:p-6 ${i === 0 ? "bg-navy" : ""}`}>
                        <span
                          className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${
                            v ? (i === 0 ? "bg-accent text-white" : "bg-accent/10 text-accent") : "bg-navy/5 text-navy/30"
                          }`}
                        >
                          {v ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
