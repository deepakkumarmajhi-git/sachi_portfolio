"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Insights", href: "/#insights" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-widest text-white z-50 relative font-heading">
            S. PATTANAIK
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-white hover:text-shadow-neon transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <Link
              href="/services"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 text-white text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-500 flex items-center gap-2.5 group hover:from-[rgba(212,175,55,0.15)] hover:to-[rgba(0,245,255,0.15)] hover:border-white/40 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              <Rocket size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-out" />
              Services
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white uppercase tracking-widest hover:text-[var(--color-neon-cyan)] transition-colors w-full text-center py-4 border-b border-white/5 font-heading"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full pt-8"
              >
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 text-white font-semibold uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-all duration-300 active:from-[rgba(212,175,55,0.1)] active:to-[rgba(0,245,255,0.1)]"
                >
                  <Rocket size={16} className="text-[rgba(212,175,55,1)]" />
                  Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
