"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Wind,
  Cpu,
  DraftingCompass,
  Building2,
  Box,
  Home,
  Square,
  Cloud,
  Brain,
  Bot,
  GitBranch,
  Palette,
  Binary,
  Layers,
  Globe,
  Server,
  LucideIcon
} from "lucide-react";

interface Skill {
  name: string;
  category: "code" | "design" | "ai" | "tools";
  size?: "sm" | "md" | "lg";
  icon: LucideIcon;
}

const skills: Skill[] = [
  { name: "Next.js", category: "code", size: "lg", icon: Globe },
  { name: "React", category: "code", size: "lg", icon: Layers },
  { name: "Node.js", category: "code", size: "md", icon: Server },
  { name: "TypeScript", category: "code", size: "md", icon: Code2 },
  { name: "MongoDB", category: "code", size: "sm", icon: Database },
  { name: "Tailwind CSS", category: "code", size: "md", icon: Wind },
  { name: "Express.js", category: "code", size: "sm", icon: Cpu },
  { name: "AutoCAD", category: "design", size: "lg", icon: DraftingCompass },
  { name: "Revit", category: "design", size: "md", icon: Building2 },
  { name: "3D Planning", category: "design", size: "md", icon: Box },
  { name: "Interior Design", category: "design", size: "lg", icon: Home },
  { name: "2D Drafting", category: "design", size: "sm", icon: Square },
  { name: "Azure AI", category: "ai", size: "lg", icon: Cloud },
  { name: "Machine Learning", category: "ai", size: "md", icon: Brain },
  { name: "AI Foundry", category: "ai", size: "sm", icon: Bot },
  { name: "Git", category: "tools", size: "sm", icon: GitBranch },
  { name: "Figma", category: "tools", size: "sm", icon: Palette },
  { name: "C Programming", category: "tools", size: "sm", icon: Terminal },
  { name: "DSA", category: "tools", size: "sm", icon: Binary },
];

const categoryColors: Record<Skill["category"], { border: string; glow: string; text: string; bg: string }> = {
  code: { border: "rgba(255,255,255,0.2)", glow: "rgba(255,255,255,0.15)", text: "#ffffff", bg: "rgba(255,255,255,0.04)" },
  design: { border: "rgba(212,175,55,0.4)", glow: "rgba(212,175,55,0.2)", text: "#d4af37", bg: "rgba(212,175,55,0.05)" },
  ai: { border: "rgba(180,160,255,0.4)", glow: "rgba(180,160,255,0.2)", text: "#b4a0ff", bg: "rgba(180,160,255,0.05)" },
  tools: { border: "rgba(100,220,200,0.3)", glow: "rgba(100,220,200,0.15)", text: "#64dcc8", bg: "rgba(100,220,200,0.04)" },
};

const sizeMap = {
  sm: "px-3 py-1.5 text-[10px]",
  md: "px-4 py-2 text-xs",
  lg: "px-5 py-2.5 text-sm"
};

const iconSizeMap = {
  sm: 12,
  md: 14,
  lg: 16
};

function SkillBubble({ skill }: { skill: Skill }) {
  const colors = categoryColors[skill.category];
  const sizeClass = sizeMap[skill.size ?? "md"];
  const iconSize = iconSizeMap[skill.size ?? "md"];
  const Icon = skill.icon;

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.3}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
        transition: {
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          y: {
            repeat: Infinity,
            duration: 4 + Math.random() * 2,
            ease: "easeInOut",
            delay: Math.random() * 2,
          },
        },
      }}
      className={`${sizeClass} rounded-full font-medium select-none cursor-grab active:cursor-grabbing z-10 relative flex items-center gap-2.5`}
      style={{
        border: `1px solid ${colors.border}`,
        color: colors.text,
        backgroundColor: colors.bg,
        boxShadow: `0 0 15px ${colors.glow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
        backdropFilter: "blur(12px)",
        letterSpacing: "0.02em",
      }}
    >
      <Icon size={iconSize} className="opacity-80" />
      <span>{skill.name}</span>

      {/* Hover glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.2, 1.4],
          transition: { duration: 1 },
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
