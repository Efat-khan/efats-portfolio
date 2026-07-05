"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-forest-900 pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-forest-600/40 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 right-0 h-[420px] w-[420px] rounded-full bg-orange/15 blur-[120px]" />
      {/* hex mesh */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.06] hex-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cream/80"
          >
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            Available for opportunities · On Site &amp; Remote
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="font-display text-cream mt-6 text-5xl sm:text-6xl lg:text-7xl"
          >
            Full-Stack
            <br />
            <span className="text-orange">&amp; AI</span> Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mt-6 max-w-lg text-cream/70 text-base sm:text-lg leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl btn-orange px-6 py-3.5 text-sm font-semibold"
            >
              View My Work
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl btn-ghost px-6 py-3.5 text-sm font-semibold"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-8 flex items-center gap-5 text-cream/60"
          >
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={15} className="text-orange" />
              {profile.location}
            </span>
            <span className="h-4 w-px bg-cream/15" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange transition-colors">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange transition-colors">
              <Linkedin size={19} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] aspect-square">
            {/* rotating dashed ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-cream/15 animate-spin-slow" />
            {/* portrait clipped inside the orange circle */}
            <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-orange to-orange-bright shadow-2xl animate-float">
              <Image
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                className="object-cover object-top scale-105"
              />
            </div>
            {/* floating stat chip */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute z-20 -right-2 top-12 rounded-2xl bg-forest-950/90 border border-cream/10 px-4 py-3 shadow-xl backdrop-blur"
            >
              <p className="font-display text-xl text-orange leading-none">AI + Web</p>
              <p className="text-[11px] font-medium text-cream/60 mt-1">LLM · Full-Stack</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scrolling tech marquee */}
      <div className="relative mt-16 md:mt-20 border-y border-cream/10 py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 text-cream/40 font-display text-xl">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12">
              {["React", "Next.js", "FastAPI", "Laravel", "TypeScript", "PostgreSQL", "Python", "Docker", "OpenAI", "Gemini"].map((t) => (
                <span key={t} className="inline-flex items-center gap-12">
                  {t}
                  <span className="text-orange">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
