"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import type { Insight } from "@/lib/insights";

interface Props {
  insight: Insight;
}

export function InsightPost({ insight }: Props) {
  const accentColor = insight.color;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${accentColor}10, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Navbar Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-black/60 backdrop-blur-md border-b border-white/5">
        <Link
          href="/#insights"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Insights
        </Link>
      </div>

      <main className="relative z-10 pt-32 pb-32 max-w-3xl mx-auto px-6">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-6 mb-8 text-zinc-500">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase">
              <Calendar size={12} />
              {insight.date}
            </div>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase">
              <Clock size={12} />
              {insight.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8 leading-tight">
            {insight.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[9px] tracking-widest uppercase rounded-full border border-white/10 bg-white/5 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Body */}
        <div className="flex flex-col gap-12">
          {insight.content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-xl md:text-2xl font-light text-white mb-4 tracking-wide">
                {section.heading}
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-8"
        >
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase">End of Article</p>
          <Link
            href="/"
            className="group relative px-10 py-3 border border-white/20 rounded-full text-white text-[10px] tracking-[0.2em] uppercase hover:border-white/50 transition-all duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
