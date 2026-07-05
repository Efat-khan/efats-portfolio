"use client";

import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/efat-khan", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Efat-khan", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange to-orange-bright px-6 py-14 md:px-16 md:py-20"
        >
          {/* decorative hex */}
          <div className="pointer-events-none absolute inset-0 opacity-10 hex-pattern" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-2 border-dashed border-forest-950/20 animate-spin-slow" />

          <div className="relative text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-950/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-950">
              <MapPin size={13} /> Open to work · On Site &amp; Remote
            </span>
            <h2 className="font-display text-4xl sm:text-6xl mt-6 text-forest-950">
              Let&apos;s build your
              <br />
              next <span className="text-cream">adventure</span>
            </h2>
            <p className="mt-5 text-forest-950/80 text-lg">
              Have a project, a role, or an idea in mind? I&apos;d love to hear about
              it. Let&apos;s create something impactful together.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest-950 px-8 py-4 text-base font-semibold text-cream transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            >
              Start a Conversation
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </a>
          </div>
        </motion.div>

        {/* contact cards */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 transition-colors duration-200 hover:border-orange cursor-pointer"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-forest-950">
                  <c.icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-forest-700/60">{c.label}</p>
                  <p className="truncate text-sm font-medium text-forest-900">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
