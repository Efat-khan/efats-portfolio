"use client";

import { motion } from "motion/react";
import { Sparkles, Code2, Bot, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats, education, training } from "@/lib/data";

const highlights = [
  { icon: Code2, title: "Full-Stack Craft", text: "React, Next.js, Laravel & FastAPI — end to end." },
  { icon: Bot, title: "AI Integration", text: "LLMs, KYC verification, NLP & automation pipelines." },
  { icon: Sparkles, title: "Production Grade", text: "Scalable architecture, clean APIs, real-world scale." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream text-forest-900 py-24 md:py-32">
      {/* dotted path decoration */}
      <div className="pointer-events-none absolute top-12 right-8 h-24 w-40 dotted-path text-forest-900/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: heading + intro */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-orange">
                <span className="h-px w-8 bg-orange" /> About Me
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl mt-4 text-forest-900">
                Engineering ideas
                <br />
                into <span className="text-orange">real products</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-forest-700 text-lg leading-relaxed max-w-xl">
                I&apos;m a Computer Science engineer from DUET with a passion for
                intelligent web platforms and enterprise applications. From
                AI-driven recruitment systems to POS platforms, I ship software
                that solves genuine problems — and I&apos;m especially motivated to
                grow within the IT industry.
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.15 + i * 0.08}>
                  <div className="rounded-2xl bg-white p-5 h-full shadow-sm border border-forest-900/5">
                    <div className="h-10 w-10 rounded-xl bg-orange/15 grid place-items-center text-orange">
                      <h.icon size={20} />
                    </div>
                    <h3 className="font-display text-base mt-3 text-forest-900">{h.title}</h3>
                    <p className="text-sm text-forest-700 mt-1 leading-snug">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: education + training */}
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-forest-900">
                <GraduationCap size={20} className="text-orange" />
                <h3 className="font-display text-2xl">Education & Training</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={0.15 + i * 0.08}>
                  <div className="rounded-2xl bg-white border border-forest-900/5 p-5 shadow-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-semibold text-forest-900">{e.degree}</h4>
                      <span className="text-xs font-medium text-orange whitespace-nowrap">{e.detail}</span>
                    </div>
                    <p className="text-sm text-forest-700 mt-1">{e.school}</p>
                    <p className="text-xs text-forest-700/70 mt-1 font-mono">{e.period}</p>
                  </div>
                </Reveal>
              ))}
              {training.map((t, i) => (
                <Reveal key={t.name} delay={0.3 + i * 0.08}>
                  <div className="rounded-2xl bg-forest-900 text-cream p-5 shadow-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-semibold">{t.name}</h4>
                      <span className="text-xs font-mono text-orange-soft whitespace-nowrap">{t.period}</span>
                    </div>
                    <p className="text-sm text-cream/60 mt-1">{t.org}</p>
                    <p className="text-sm text-cream/75 mt-2 leading-snug">{t.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 rounded-3xl bg-forest-900 px-6 py-10 md:px-12 md:py-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-4xl md:text-5xl text-orange">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-cream/65 mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
