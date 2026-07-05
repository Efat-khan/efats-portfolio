"use client";

import { motion, useReducedMotion } from "motion/react";
import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative bg-forest-900 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[420px] w-[420px] rounded-full bg-orange/10 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-orange">
              <span className="h-px w-8 bg-orange" /> The Journey <span className="h-px w-8 bg-orange" />
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-cream">
              Where I&apos;ve <span className="text-orange">built &amp; grown</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* vertical spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream/12 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-4">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={job.role + job.company}
                  className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-12 md:items-center"
                >
                  {/* node on the spine */}
                  <span className="absolute left-4 md:left-1/2 top-6 md:top-1/2 z-10 h-4 w-4 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-orange ring-4 ring-forest-900" />

                  {/* card — column 1 (left) or column 2 (right) */}
                  <motion.div
                    initial={reduce ? false : { opacity: 0, x: left ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      left
                        ? "md:col-start-1 md:row-start-1 md:pr-10 md:text-right"
                        : "md:col-start-2 md:row-start-1 md:pl-10"
                    }
                  >
                    <div className="rounded-2xl border border-cream/10 bg-forest-850/70 p-6 transition-colors duration-200 hover:border-orange/40">
                      <div className={`flex items-center gap-2 text-orange ${left ? "md:justify-end" : ""}`}>
                        <Briefcase size={16} />
                        <span className="text-xs font-mono tracking-wide">{job.period}</span>
                      </div>
                      <h3 className="font-display text-xl text-cream mt-2">{job.role}</h3>
                      <p className={`mt-1 flex flex-wrap items-center gap-x-2 text-sm font-semibold text-orange-soft ${left ? "md:justify-end" : ""}`}>
                        {job.company}
                        <span className="inline-flex items-center gap-1 text-cream/50 font-normal">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </p>
                      <p className="mt-3 text-sm text-cream/70 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
