"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-[100] md:bottom-12 md:right-12"
        >
          <Magnetic>
            <button
              onClick={scrollToTop}
              className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white transition-all duration-500 hover:border-white/40 hover:bg-black/60"
              aria-label="Scroll to top"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Accent ring */}
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-40" />

              <ArrowUp 
                size={22} 
                className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1" 
              />
              
              {/* Magnetic pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20 opacity-0"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
