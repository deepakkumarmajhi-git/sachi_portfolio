"use client";

import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  delay?: number;
}

export function SectionHeader({ title, subtitle, align = "center", delay = 0 }: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const lineVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "4rem", 
      opacity: 0.5,
      transition: { duration: 1, ease: "circOut", delay: delay + 0.5 }
    },
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-20 ${alignmentClasses[align]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase text-white mb-6 font-heading">
          {title}
        </h2>
        
        {/* Animated blueprint line */}
        <motion.div 
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[1px] bg-white/50 mx-auto"
          style={{ 
            marginLeft: align === "center" ? "auto" : align === "right" ? "auto" : "0",
            marginRight: align === "center" ? "auto" : align === "left" ? "auto" : "0",
          }}
        />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="mt-6 text-zinc-500 text-xs md:text-sm tracking-[0.3em] uppercase font-light max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
