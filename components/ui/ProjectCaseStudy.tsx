"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { useState, useEffect } from "react";
import { ComparisonSlider } from "./ComparisonSlider";

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
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setProgress(Math.round(latest * 100));
      if (latest > 0.98) setIsComplete(true);
      else setIsComplete(false);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Smart Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{ 
          scaleX, 
          backgroundColor: accentRGB,
          boxShadow: isComplete ? `0 0 20px ${accentRGB}` : 'none'
        }}
        animate={isComplete ? { height: [4, 6, 4] } : { height: 4 }}
        transition={isComplete ? { repeat: Infinity, duration: 2 } : {}}
      />
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
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-medium">
              Reading Progress
            </span>
            <span 
              className="text-xs font-mono w-10 text-right"
              style={{ color: isComplete ? accentRGB : 'inherit' }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-32 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
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
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-24 border border-white/10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          {/* Main content — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-16">
            {[
              { label: "Overview", content: project.overview },
              { label: "The Challenge", content: project.challenge },
              { label: "The Solution", content: project.solution },
              { label: "Outcome", content: project.outcome },
            ].map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              >
                <h2
                  className="text-[10px] tracking-[0.4em] uppercase font-medium mb-6"
                  style={{ color: project.color, opacity: 0.8 }}
                >
                  {section.label}
                </h2>
                <p className="text-zinc-300 leading-relaxed font-light text-lg md:text-xl">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Blueprint to Reality Comparison */}
            {project.comparison && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-8"
              >
                <h2
                  className="text-[10px] tracking-[0.4em] uppercase font-medium mb-8"
                  style={{ color: project.color, opacity: 0.8 }}
                >
                  Blueprint to Reality
                </h2>
                <ComparisonSlider 
                  before={project.comparison.before}
                  after={project.comparison.after}
                  labelBefore={project.comparison.labelBefore}
                  labelAfter={project.comparison.labelAfter}
                  accentColor={project.color}
                />
              </motion.div>
            )}
          </div>

          {/* Sidebar — 1 col */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Tech stack */}
            <div
              className="rounded-3xl p-8 border border-white/5 bg-white/2 backdrop-blur-sm"
            >
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 text-xs rounded-full border border-white/10 text-zinc-300 bg-white/5 font-light tracking-wide uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links.length > 0 && (
              <div
                className="rounded-3xl p-8 border border-white/5 bg-white/2 backdrop-blur-sm"
              >
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">
                  Links
                </h3>
                <div className="flex flex-col gap-4">
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
                        size={16}
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
              className="group relative block w-full text-center px-8 py-5 rounded-full border border-white/15 text-white text-[10px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-all duration-500 hover:border-white/40"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              Discuss Project
            </Link>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-32">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-12 text-center">Process & Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden border border-white/10 group"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Divider */}
        <div className="h-[1px] w-full bg-white/10 mb-16" />

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
