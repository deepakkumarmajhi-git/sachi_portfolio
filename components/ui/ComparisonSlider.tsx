"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ComparisonSliderProps {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
  accentColor?: string;
}

export function ComparisonSlider({
  before,
  after,
  labelBefore = "Before",
  labelAfter = "After",
  accentColor = "var(--color-neon-cyan)"
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 select-none cursor-ew-resize group"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt={labelAfter}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt={labelBefore}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth }}
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-1 z-30 pointer-events-none"
        style={{ 
          left: `${sliderPosition}%`, 
          backgroundColor: accentColor,
          boxShadow: `0 0 15px ${accentColor}`
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 border-white/20 flex items-center justify-center backdrop-blur-md">
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none p-6 flex justify-between items-end">
        <div 
          className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] uppercase text-white/70 transition-opacity duration-300"
          style={{ opacity: sliderPosition < 10 ? 0 : 1 }}
        >
          {labelBefore}
        </div>
        <div 
          className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] uppercase text-white/70 transition-opacity duration-300"
          style={{ opacity: sliderPosition > 90 ? 0 : 1 }}
        >
          {labelAfter}
        </div>
      </div>
    </div>
  );
}
