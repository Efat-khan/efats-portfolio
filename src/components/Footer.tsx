"use client";

import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/lib/data";

const nav = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Journey", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-cream/8 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-orange text-forest-950 font-display text-xl">E</span>
              <span className="font-display text-2xl text-cream">Efat<span className="text-orange">.</span></span>
            </div>
            <p className="mt-5 text-cream/50 leading-relaxed">
              Full-stack &amp; AI software engineer building intelligent, scalable
              web platforms. Currently open to opportunities on site and remote.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl border border-cream/12 text-cream/70 transition-colors hover:border-orange hover:text-orange">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-cream/12 text-cream/70 transition-colors hover:border-orange hover:text-orange">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-xl border border-cream/12 text-cream/70 transition-colors hover:border-orange hover:text-orange">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-orange mb-5">Navigate</h4>
              <ul className="space-y-3 text-sm text-cream/55">
                {nav.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="transition-colors hover:text-cream cursor-pointer">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-orange mb-5">Reach Me</h4>
              <ul className="space-y-3 text-sm text-cream/55">
                <li><a href={`mailto:${profile.email}`} className="transition-colors hover:text-cream cursor-pointer">Email</a></li>
                <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-cream cursor-pointer">{profile.phone}</a></li>
                <li className="text-cream/40">{profile.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-cream/35 tracking-wide">
            © {new Date().getFullYear()} Efat Khan · Built with Next.js, Tailwind &amp; Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cream/60 transition-colors hover:text-orange cursor-pointer"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
