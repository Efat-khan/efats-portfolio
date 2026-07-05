"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-forest-950 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-forest-700/30 blur-[130px]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-[0.05] hex-pattern" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-orange">
              <span className="h-px w-8 bg-orange" /> Toolkit
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-cream">
              The stack I build <span className="text-orange">the future</span> with
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-cream/65 text-lg">
              A pragmatic toolkit spanning modern web, AI/LLM systems, data and
              DevOps — chosen to ship reliable, scalable products.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-forest-900/60 p-6 transition-colors duration-200 hover:border-orange/40">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-cream">{group.group}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2 }}
                      className="rounded-lg bg-cream/5 border border-cream/10 px-3 py-1.5 text-sm text-cream/80 transition-colors group-hover:border-cream/15"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
