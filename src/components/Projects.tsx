"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";
import { Github } from "./BrandIcons";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-cream text-forest-900 py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-16 left-8 h-24 w-40 dotted-path text-forest-900/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-orange">
                <span className="h-px w-8 bg-orange" /> Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl mt-4">
                Explore my <span className="text-orange">popular</span> projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="https://www.github.com/Efat-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-900/15 px-5 py-3 text-sm font-semibold text-forest-900 transition-colors hover:border-orange hover:text-orange cursor-pointer"
            >
              <Github size={17} /> All on GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="card-cream group h-full overflow-hidden rounded-3xl border border-forest-900/5 shadow-sm">
                {/* image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
                  {/* rating badge */}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-forest-950/85 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur">
                    <Star size={12} className="fill-orange text-orange" />
                    {p.rating}
                  </span>
                  {/* category chip */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-forest-950">
                    {p.category}
                  </span>
                </div>

                {/* body */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-forest-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-forest-700 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-forest-900/5 px-2 py-0.5 text-[11px] font-medium text-forest-700"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tools.length > 4 && (
                      <span className="rounded-md bg-forest-900/5 px-2 py-0.5 text-[11px] font-medium text-forest-700">
                        +{p.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-forest-900/8 pt-4">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 transition-colors hover:text-orange cursor-pointer"
                      >
                        View Project
                        <ArrowUpRight size={15} strokeWidth={2.4} />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-forest-700/55">{p.category}</span>
                    )}
                    <motion.span
                      whileHover={{ rotate: 45 }}
                      className="grid h-8 w-8 place-items-center rounded-full bg-orange/15 text-orange"
                    >
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </motion.span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
