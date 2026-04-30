"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring — slow, springy trail
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.5 });

  // Dot — near-instant
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 35 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing outer ring — desktop only */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
        animate={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? "rgba(212,175,55,0.9)" : "rgba(255,255,255,0.5)",
          boxShadow: isHovering
            ? "0 0 16px rgba(212,175,55,0.5), inset 0 0 8px rgba(212,175,55,0.1)"
            : "0 0 8px rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid",
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full w-1.5 h-1.5"
        animate={{
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "#d4af37" : "#ffffff",
          boxShadow: isHovering ? "0 0 8px #d4af37" : "0 0 6px rgba(255,255,255,0.8)",
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
