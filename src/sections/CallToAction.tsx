"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24 overflow-hidden">
      <motion.div 
        className="flex gap-16 text-7xl md:text-8xl font-medium"
        animate={{ x: [0, -1600] }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 15, 
          ease: "linear" 
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center gap-16 whitespace-nowrap">
            <span className="text-lime-400 text-7xl">&#10038;</span>
            <span>Try it for free</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
 