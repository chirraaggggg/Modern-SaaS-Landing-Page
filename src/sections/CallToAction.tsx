"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <motion.div 
        className="flex gap-8 md:gap-16 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-medium"
        animate={{ x: [0, -800, -1600] }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 20, 
          ease: "linear" 
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-16 whitespace-nowrap">
            <span className="text-lime-400 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">&#10038;</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">Try it for free</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
 