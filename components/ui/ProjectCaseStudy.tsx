"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

const statusColors: Record<Project["status"], string> = {
  Live: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  "In Progress": "text-amber-400 border-amber-400/30 bg-amber-400/5",
  Completed: "text-zinc-400 border-zinc-400/30 bg-zinc-400/5",
};

export function ProjectCaseStudy({ project }: Props) {
  const accentRGB = project.color;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Noise + Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${accentRGB}12, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-black/60 backdrop-blur-md border-b border-white/5">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>
      </div>

      <main className="relative z-10 pt-32 pb-32 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium border ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-500">
              {project.category}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-600">
              {project.year}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 uppercase leading-none">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Divider */}
          <div className="mt-12 h-[1px] w-full" style={{ background: `linear-gradient(to right, ${accentRGB}40, transparent)` }} />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Main content — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-12">
            {[
              { label: "Overview", content: project.overview },
              { label: "The Challenge", content: project.challenge },
              { label: "The Solution", content: project.solution },
              { label: "Outcome", content: project.outcome },
            ].map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              >
                <h2
                  className="text-[10px] tracking-[0.4em] uppercase font-medium mb-4"
                  style={{ color: accentRGB, opacity: 0.7 }}
                >
                  {section.label}
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light text-base">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sidebar — 1 col */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Tech stack */}
            <div
              className="rounded-2xl p-6 border border-white/5"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-zinc-300 bg-white/3 font-light tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links.length > 0 && (
              <div
                className="rounded-2xl p-6 border border-white/5"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4">
                  Links
                </h3>
                <div className="flex flex-col gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-zinc-300 hover:text-white transition-colors group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <Link
              href="/#contact"
              className="block w-full text-center px-6 py-4 rounded-full border border-white/15 text-white text-xs tracking-[0.2em] uppercase font-light hover:bg-white/5 transition-all duration-300"
            >
              Discuss This Project
            </Link>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-16" />

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
