"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"logo" | "wipe" | "done">("logo");

  useEffect(() => {
    // Show logo for 1.6s then start wipe
    const t1 = setTimeout(() => setPhase("wipe"), 1600);
    // After wipe starts (0.8s), mark done
    const t2 = setTimeout(() => {
      setIsLoading(false);
      setPhase("done");
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            {/* Grain texture overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

            {/* Logo reveal */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
                animate={
                  phase === "wipe"
                    ? { opacity: 0, scale: 1.1, filter: "blur(30px)" }
                    : { opacity: 1, scale: 1, filter: "blur(0px)" }
                }
                transition={
                  phase === "wipe"
                    ? { duration: 0.5, ease: "easeIn" }
                    : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              >
                <Image
                  src="/icon.png"
                  alt="SP Logo"
                  width={120}
                  height={120}
                  style={{ height: "auto" }}
                  className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  phase === "wipe"
                    ? { opacity: 0, y: -10 }
                    : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-light">
                  Sachidananda Pattnaik
                </p>
                <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-light">
                  Portfolio
                </p>
              </motion.div>

              {/* Loading bar */}
              <motion.div className="w-32 h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white/60 rounded-full"
                  initial={{ width: "0%" }}
                  animate={phase === "wipe" ? { width: "100%" } : { width: "65%" }}
                  transition={
                    phase === "wipe"
                      ? { duration: 0.4, ease: "easeIn" }
                      : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                  }
                />
              </motion.div>
            </div>

            {/* Curtain wipe panels */}
            <AnimatePresence>
              {phase === "wipe" && (
                <>
                  {/* Top panel */}
                  <motion.div
                    key="top-panel"
                    className="absolute inset-x-0 top-0 bg-black origin-top"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    style={{ height: "50%" }}
                  />
                  {/* Bottom panel */}
                  <motion.div
                    key="bottom-panel"
                    className="absolute inset-x-0 bottom-0 bg-black origin-bottom"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    style={{ height: "50%" }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content revealed underneath */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
