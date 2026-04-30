"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "./GlassCard";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  skills?: string[];
}

interface ScrollTimelineProps {
  items: TimelineItem[];
}

export function ScrollTimeline({ items }: ScrollTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-10 px-2 md:px-0">
      {/* Background timeline track */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
        {/* Animated Neon Light Segment */}
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] shadow-[0_0_15px_var(--color-neon-cyan)] rounded-full"
        />
      </div>

      <div className="flex flex-col gap-12 md:gap-24 relative z-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`w-full md:w-[45%] flex pl-16 md:pl-0 mb-8 md:mb-0 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                <GlassCard className="w-full relative group hover:border-[var(--color-neon-cyan)]/50 transition-colors duration-500">
                  <div className="text-[var(--color-neon-cyan)] text-xs md:text-sm font-semibold tracking-wider mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-foreground/80 mb-3 font-medium">
                    {item.subtitle}
                  </h4>
                  {item.location && (
                    <p className="text-xs text-foreground/50 mb-4 uppercase tracking-widest">
                      {item.location}
                    </p>
                  )}
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 text-xs rounded-md bg-white/5 border border-white/10 text-white shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>

              {/* Glowing Node on the timeline */}
              <div className="absolute left-[28px] md:left-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-[var(--color-neon-cyan)] shadow-[0_0_15px_var(--color-neon-cyan)] -translate-x-1/2 z-20 transition-transform duration-300 hover:scale-150" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
