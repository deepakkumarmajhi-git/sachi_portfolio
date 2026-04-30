"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Skill {
  name: string;
  category: "code" | "design" | "ai" | "tools";
  size?: "sm" | "md" | "lg";
}

const skills: Skill[] = [
  { name: "Next.js", category: "code", size: "lg" },
  { name: "React", category: "code", size: "lg" },
  { name: "Node.js", category: "code", size: "md" },
  { name: "TypeScript", category: "code", size: "md" },
  { name: "MongoDB", category: "code", size: "sm" },
  { name: "Tailwind CSS", category: "code", size: "md" },
  { name: "Express.js", category: "code", size: "sm" },
  { name: "AutoCAD", category: "design", size: "lg" },
  { name: "Revit", category: "design", size: "md" },
  { name: "3D Planning", category: "design", size: "md" },
  { name: "Interior Design", category: "design", size: "lg" },
  { name: "2D Drafting", category: "design", size: "sm" },
  { name: "Azure AI", category: "ai", size: "lg" },
  { name: "Machine Learning", category: "ai", size: "md" },
  { name: "AI Foundry", category: "ai", size: "sm" },
  { name: "Git", category: "tools", size: "sm" },
  { name: "Figma", category: "tools", size: "sm" },
  { name: "C Programming", category: "tools", size: "sm" },
  { name: "DSA", category: "tools", size: "sm" },
];

const categoryColors: Record<Skill["category"], { border: string; glow: string; text: string; bg: string }> = {
  code:   { border: "rgba(255,255,255,0.2)", glow: "rgba(255,255,255,0.15)", text: "#ffffff", bg: "rgba(255,255,255,0.04)" },
  design: { border: "rgba(212,175,55,0.4)",  glow: "rgba(212,175,55,0.2)",  text: "#d4af37", bg: "rgba(212,175,55,0.05)" },
  ai:     { border: "rgba(180,160,255,0.4)", glow: "rgba(180,160,255,0.2)", text: "#b4a0ff", bg: "rgba(180,160,255,0.05)" },
  tools:  { border: "rgba(100,220,200,0.3)", glow: "rgba(100,220,200,0.15)",text: "#64dcc8", bg: "rgba(100,220,200,0.04)" },
};

const sizeMap = { sm: "px-4 py-2 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-6 py-3 text-base" };

function SkillBubble({ skill }: { skill: Skill }) {
  const constraintRef = useRef(null);
  const colors = categoryColors[skill.category];
  const sizeClass = sizeMap[skill.size ?? "md"];

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.3}
      whileDrag={{ scale: 1.15, zIndex: 50 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, scale: 0, rotate: Math.random() * 10 - 5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
        transition: {
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          y: {
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
            delay: Math.random() * 2,
          },
        },
      }}
      className={`${sizeClass} rounded-full font-light select-none cursor-grab active:cursor-grabbing z-10 relative`}
      style={{
        border: `1px solid ${colors.border}`,
        color: colors.text,
        backgroundColor: colors.bg,
        boxShadow: `0 0 20px ${colors.glow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
        backdropFilter: "blur(8px)",
        letterSpacing: "0.05em",
      }}
    >
      {skill.name}
      {/* Hover glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: [0, 0.4, 0],
          scale: [1, 1.4, 1.8],
          transition: { duration: 0.8 },
        }}
        style={{ background: `radial-gradient(circle, ${colors.glow}, transparent 70%)` }}
      />
    </motion.div>
  );
}

const categoryLabels: Record<Skill["category"], string> = {
  code: "Development",
  design: "Architecture & Design",
  ai: "AI & Cloud",
  tools: "Tools & CS",
};

export function SkillsGraph() {
  const groupedSkills = Object.entries(
    skills.reduce<Record<string, Skill[]>>((acc, skill) => {
      acc[skill.category] = acc[skill.category] ?? [];
      acc[skill.category].push(skill);
      return acc;
    }, {})
  ) as [Skill["category"], Skill[]][];

  return (
    <section id="skills" className="w-full px-6 py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.3em] text-white mb-6">
            Skills
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37]/50 mx-auto mb-6" />
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            Drag the bubbles · Hover to glow
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {groupedSkills.map(([category, categorySkills], groupIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6 font-light"
                style={{ color: categoryColors[category].text, opacity: 0.6 }}
              >
                {categoryLabels[category]}
              </p>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <SkillBubble skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-6 mt-16 justify-center"
        >
          {Object.entries(categoryColors).map(([cat, colors]) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.text, boxShadow: `0 0 6px ${colors.glow}` }}
              />
              <span className="text-xs text-zinc-500 tracking-widest uppercase">{categoryLabels[cat as Skill["category"]]}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
