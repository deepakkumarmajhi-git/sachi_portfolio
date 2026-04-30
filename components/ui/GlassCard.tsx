"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn(
        "glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,243,255,0.1)] hover:-translate-y-1 border border-white/5 hover:border-white/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Subtle glowing orb inside the card on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
