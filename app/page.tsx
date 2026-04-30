"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollTimeline } from "@/components/ui/ScrollTimeline";
import { NeonCircle } from "@/components/ui/NeonCircle";
import { SkillsGraph } from "@/components/ui/SkillsGraph";
import dynamic from "next/dynamic";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { insights } from "@/lib/insights";

const ArchitecturalModel = dynamic(
  () => import("@/components/ui/ArchitecturalModel").then((m) => m.ArchitecturalModel),
  { ssr: false, loading: () => null }
);

export default function Home() {
  const experiences = [
    {
      title: "Junior Site Engineer",
      subtitle: "Kubic Design Solutions",
      date: "Feb 2026 - Present",
      location: "Bhubaneswar, Odisha, India",
      description: "Design 2d Architectural drawings and Interior design.",
      skills: ["Revit", "Interior Architecture", "2D/3D Planning"],
    },
    {
      title: "Full Stack Web Development Intern",
      subtitle: "Apna College",
      date: "Jan 2025 - Sep 2025",
      location: "Remote",
      description: "Successfully completed the Delta course. Learned JS, Node.js, React, and more.",
      skills: ["MERN Stack", "JavaScript", "React", "Node.js"],
    },
    {
      title: "AI Azure Intern",
      subtitle: "Edunet Foundation (Microsoft Initiative)",
      date: "Jun 2025 - Jul 2025",
      location: "Remote",
      description: "Enhanced skills in AI and Azure to drive innovation and growth in future endeavors.",
      skills: ["Azure AI Foundry", "Artificial Intelligence"],
    },
  ];

  const education = [
    {
      title: "12th Grade",
      subtitle: "NIIS Institute of Business Administration",
      date: "Apr 2021 - Apr 2023",
      location: "Bhubaneswar, Odisha, India",
      description: "Completed higher secondary education with a grade of 75%.",
    },
    {
      title: "Bachelor of Technology - BTech, Computer Science",
      subtitle: "Gandhi Engineering College (GEC)",
      date: "Sep 2023 - Present",
      location: "Bhubaneswar, Odisha, India",
      description: "Pursuing degree in Computer Science, focusing on full-stack development and AI.",
      skills: ["C Programming", "DSA"],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative w-full flex flex-col items-center overflow-hidden">
        {/* Fixed Modern Background Image */}
        <div className="fixed inset-0 z-[-2] bg-black">
          <Image
            src="/bg.png"
            alt="Modern Tech Background"
            fill
            className="object-cover opacity-2 mix-blend-screen"
            priority
          />
          {/* Subtle noise texture over background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 px-4 sm:px-6 overflow-hidden">
          <NeonCircle color="cyan" size="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" className="-top-16 -left-16 md:-top-32 md:-left-32 opacity-40 blur-[60px] md:blur-[100px]" />
          <NeonCircle color="purple" size="w-[400px] h-[400px] md:w-[800px] md:h-[800px]" className="-bottom-20 -right-10 md:-bottom-40 md:-right-20 opacity-30 blur-[80px] md:blur-[120px]" />

          {/* 3D Interactive WebGL Element */}
          <ArchitecturalModel />

          <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10 w-full relative pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tight mb-4 uppercase text-white leading-none mix-blend-difference break-words w-full"
            >
              Sachidananda
              <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                Pattnaik
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-zinc-400 font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-8 mb-12 sm:mb-16"
            >
              <span>Architectural Designer</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--color-neon-pink)]"></span>
              <span>Full-Stack Developer</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white"></span>
              <span>AI Enthusiast</span>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              href="#contact"
              className="group relative px-10 sm:px-12 py-3 sm:py-4 border border-white/20 rounded-full overflow-hidden bg-transparent text-white font-medium uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-500 hover:border-white/50 pointer-events-auto cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <span className="relative z-10 transition-colors duration-500">Explore Portfolio</span>
            </motion.a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <GlassCard delay={0.2} className="h-full border-white/10">
              <h2 className="text-2xl font-light mb-8 text-white tracking-[0.3em] uppercase">About Me</h2>
              <p className="text-foreground/70 leading-relaxed mb-6 font-light">
                Being an individual with a strong technical background with innovative and sustainable solution ideas for real-world problems, I work as an <strong className="text-white font-medium">architectural designer and construction planner</strong>, creating 2D & 3D residential designs, building layouts, and interior concepts.
              </p>
              <p className="text-foreground/70 leading-relaxed font-light">
                My vision is to integrate technology, architecture, and sustainability to design smarter and more efficient living spaces. I believe the future belongs to innovators who combine technology and infrastructure development to create solutions that positively impact society.
              </p>
            </GlassCard>

            <div className="flex flex-col gap-6">
              <GlassCard delay={0.4} className="border-white/10">
                <h3 className="text-sm font-medium tracking-[0.2em] mb-6 text-white uppercase">Current Focus</h3>
                <ul className="space-y-4 text-sm text-foreground/70 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-neon-pink)] mt-1 text-xs">◆</span>
                    Developing eco-friendly products to reduce plastic pollution.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-neon-pink)] mt-1 text-xs">◆</span>
                    Designing modern 2D & 3D residential plans and interior concepts.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-neon-pink)] mt-1 text-xs">◆</span>
                    Researching global real estate trends and smart cities.
                  </li>
                </ul>
              </GlassCard>

              <GlassCard delay={0.6} className="border-white/10">
                <h3 className="text-sm font-medium tracking-[0.2em] mb-6 text-white uppercase">Building Skills In</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI & ML", "Full-Stack Dev", "Architectural Design", "Interior Design", "Sustainable Product Design", "Real Estate Research"].map(skill => (
                    <span key={skill} className="px-4 py-2 text-xs tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-zinc-300 font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsGraph />

        {/* Projects Section */}
        <section id="projects" className="w-full px-6 py-32 relative z-10 bg-black/20 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.3em] text-white mb-6">Projects</h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <Link href={`/projects/${project.slug}`} className="group block h-full">
                    <div
                      className="h-full rounded-3xl p-8 border border-white/5 bg-white/2 backdrop-blur-sm relative overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/15"
                    >
                      {/* Accent glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${project.color}10, transparent 70%)` }}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-6">
                          <span
                            className="text-[10px] tracking-[0.3em] uppercase font-medium"
                            style={{ color: project.color, opacity: 0.8 }}
                          >
                            {project.category}
                          </span>
                          <span className="text-[10px] tracking-widest text-zinc-600">{project.year}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-light text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8 flex-grow">
                          {project.tagline}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="px-2.5 py-1 text-[10px] rounded-full bg-white/4 border border-white/8 text-zinc-400 tracking-wide">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2.5 py-1 text-[10px] rounded-full bg-white/4 border border-white/8 text-zinc-500">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300">
                          <span>View Case Study</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="w-full px-6 py-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.3em] text-white mb-6">Insights</h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insights.map((insight, i) => (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <Link href={`/insights/${insight.slug}`} className="group block">
                    <GlassCard className="h-full border-white/5 hover:border-white/20 transition-all duration-500">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">{insight.date}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">{insight.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-white transition-colors leading-tight">
                          {insight.title}
                        </h3>
                        
                        <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8 line-clamp-3">
                          {insight.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors mt-auto">
                          <span>Read Article</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="w-full px-6 py-32 relative z-10 bg-black/20 backdrop-blur-sm border-y border-white/5 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.3em] text-white mb-6">Experience</h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto" />
            </div>
            <ScrollTimeline items={experiences} />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full px-6 py-32 relative z-10 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.3em] text-white mb-6">Education</h2>
              <div className="w-16 h-[1px] bg-[var(--color-neon-pink)]/50 mx-auto" />
            </div>
            <ScrollTimeline items={education} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-32 relative z-10 mb-20">
          <GlassCard className="text-center p-12 md:p-24 border-white/10 hover:border-white/20">
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white mb-8 uppercase">Get In Touch</h2>
            <p className="text-foreground/50 max-w-xl mx-auto mb-12 text-sm leading-relaxed uppercase tracking-wider">
              I am always open to connecting with innovators, architects, researchers, entrepreneurs, and investors interested in technology, sustainability, and building impactful global solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:pattnaiksachidananda0@gmail.com"
                className="w-full md:w-auto px-12 py-4 rounded-full bg-white text-black font-medium uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors duration-300"
              >
                Say Hello
              </a>
              <a
                href="https://wa.me/918260586277"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-4 rounded-full border border-white/20 text-white font-medium uppercase tracking-[0.2em] text-xs hover:bg-white/5 transition-colors duration-300"
              >
                WhatsApp Me
              </a>
            </div>
          </GlassCard>
        </section>
      </main>

      <Footer />
    </>
  );
}
