"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Building2, 
  Zap, 
  Home, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Droplets,
  Wrench,
  Lightbulb,
  Fan,
  Paintbrush,
  Layers,
  Hammer,
  ShieldAlert,
  HardHat
} from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

const services = [
  {
    title: "Structural & Civil Work",
    description: "Expert solutions for core infrastructure, from residential foundations to advanced construction techniques.",
    icon: Building2,
    color: "#00F5FF", // Cyan
    features: [
      "Core house construction",
      "Pilling & Foundation",
      "Mivan & Traditional shuttering",
      "AAC block masonry",
      "Sewer & Drainage services",
      "Borewell installations"
    ]
  },
  {
    title: "Infrastructure & Utilities",
    description: "Comprehensive MEP (Mechanical, Electrical, Plumbing) services to ensure your project's lifeblood is robust and efficient.",
    icon: Zap,
    color: "#B4A0FF", // Purple
    features: [
      "Electrical wiring (FDB/MDB)",
      "Plumbing & Sanitary fitting",
      "Street & Flood lighting",
      "DG (Generator) installation",
      "HVAC & Cassette AC systems",
      "Smart utility integration"
    ]
  },
  {
    title: "Interior Finishing & Specialized Works",
    description: "High-end aesthetic solutions that transform spaces into architectural masterpieces.",
    icon: Home,
    color: "#FF2D55", // Pink
    features: [
      "Premium Painting works",
      "Designer False ceilings",
      "Bespoke Carpentry",
      "Marble & Granite tiling",
      "Custom Glass works",
      "WPC & PVC door solutions"
    ]
  },
  {
    title: "Property Protection & Maintenance",
    description: "Safeguarding your investment with industry-leading protection and safety systems.",
    icon: ShieldCheck,
    color: "#D4AF37", // Gold
    features: [
      "Advanced Waterproofing",
      "Integrated Pest control",
      "Fire suppression systems",
      "Fire alarms & Safety doors",
      "Maintenance contracts",
      "Emergency response systems"
    ]
  },
  {
    title: "Material Supply & Hardware",
    description: "Reliable procurement of high-grade building materials and specialized construction hardware.",
    icon: Truck,
    color: "#FFFFFF", // White
    features: [
      "Aggregates & River sand",
      "Premium Cement & Steel",
      "Structural Adhesives",
      "Hardware & Power tools",
      "Supply chain management",
      "Bulk material logistics"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-black pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden relative">
        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] md:w-[40%] md:h-[40%] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] md:w-[40%] md:h-[40%] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-12 md:mb-20">
            <SectionHeader 
              title="Services" 
              subtitle="Comprehensive architectural and construction solutions tailored for excellence"
              align="left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full border-white/5 hover:border-white/10 group transition-all duration-500 overflow-hidden p-6 md:p-8">
                  {/* Category Accent */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: service.color }}
                  />
                  
                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8">
                      <div 
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0"
                        style={{ color: service.color }}
                      >
                        <service.icon size={24} className="md:w-[28px] md:h-[28px]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: service.color }} />
                          <span className="text-xs md:text-sm text-zinc-400 font-light tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                      <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-zinc-600">Category {index + 1}</span>
                      <Magnetic>
                        <Link 
                          href="/#contact" 
                          className="flex items-center gap-2 text-[10px] md:text-xs tracking-widest uppercase text-white hover:text-[var(--color-neon-cyan)] transition-colors group/btn"
                        >
                          Inquire Now
                          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 mt-8 md:mt-12"
            >
              <div className="relative rounded-3xl md:rounded-[2rem] p-8 md:p-20 overflow-hidden border border-white/5 bg-gradient-to-br from-zinc-900 to-black text-center md:text-left">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,245,255,0.05)_0%,transparent_50%)]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-5xl font-light text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
                      Ready to start your <br className="md:hidden" /><span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">next masterpiece?</span>
                    </h2>
                    <p className="text-zinc-400 font-light text-base md:text-lg">
                      Whether it's a residential layout or a large-scale infrastructure project, we bring technical precision and artistic vision to every build.
                    </p>
                  </div>
                  <Magnetic>
                    <Link 
                      href="/#contact"
                      className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full bg-white text-black font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-zinc-200 transition-all duration-300 whitespace-nowrap block"
                    >
                      Get a Quote
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
