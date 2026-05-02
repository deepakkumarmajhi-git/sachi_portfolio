"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 border border-white/5 hover:border-white/15",
        className
      )}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.04), transparent 70%)`,
        }}
      />

      {/* Border spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: spotlight.opacity * 0.8,
          background: `radial-gradient(250px circle at ${spotlight.x}px ${spotlight.y}px, rgba(212,175,55,0.08), transparent 60%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
