"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonCircleProps {
  className?: string;
  color?: "cyan" | "pink" | "purple";
  size?: string;
  blur?: string;
}

export function NeonCircle({
  className,
  color = "cyan",
  size = "w-64 h-64",
  blur = "blur-3xl",
}: NeonCircleProps) {
  const colorMap = {
    cyan: "bg-neon-cyan/20",
    pink: "bg-neon-pink/20",
    purple: "bg-neon-purple/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className={cn(
        "absolute rounded-full -z-10 mix-blend-screen pointer-events-none",
        size,
        blur,
        colorMap[color],
        className
      )}
    />
  );
}
