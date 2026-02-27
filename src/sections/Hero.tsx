"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.svg";
import designExample2Image from "@/assets/images/design-example-2.svg";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [0, 1] }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 2.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);
  }, []);

  return (
    <section
      className="py-24 relative z-20 overflow-hidden"
      style={isDragging ? { cursor: "none" } : undefined}
      onMouseMove={(e) => {
        if (isDragging) {
          setCursorPos({ x: e.clientX, y: e.clientY });
        }
      }}
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-lime-400/30"
            initial={{
              x: `${(i * 16.67) % 100}%`,
              y: `${(i * 20) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Custom "You" cursor while dragging — hides native cursor */}
      {isDragging && (
        <>
          <style>{`* { cursor: none !important; }`}</style>
          <motion.div
            className="fixed pointer-events-none z-[100]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          >
            <Pointer name="You" />
          </motion.div>
        </>
      )}
      <div className="container relative">
        {/* Decorative gradient lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
        
        <motion.div
          ref={leftDesignScope}
          drag
          dragElastic={0.2}
          dragMomentum={false}
          whileDrag={{ scale: 1.05, cursor: "none" }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="absolute -left-32 sm:-left-48 md:-left-72 top-8 md:top-16 hidden lg:block cursor-grab active:cursor-grabbing z-50"
        >
          <Image src={designExample1Image} alt="Design example 1 image" draggable={false} />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-32 sm:left-40 md:left-56 top-64 sm:top-80 md:top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        <motion.div
          drag
          dragElastic={0.2}
          dragMomentum={false}
          whileDrag={{ scale: 1.05, cursor: "none" }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          initial={{ opacity: 0, y: 100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="absolute -right-32 sm:-right-48 md:-right-80 -top-8 md:-top-16 hidden lg:block cursor-grab active:cursor-grabbing z-50"
        >
          <Image src={designExample2Image} alt="Design example 2 image" draggable={false} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 275, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          className="absolute right-32 sm:right-40 md:right-80 -top-2 md:-top-4 hidden lg:block"
        >
          <Pointer name="Michael" color="red" />
        </motion.div>
        <div className="flex justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 rounded-full"
          >
            <span className="text-purple-400 mr-2">✨</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-sm sm:text-base">$7.5M seed round raised</span>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center mt-6 px-4"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Impactful design,</span>
          <br />
          <span className="text-lime-400">created effortlessly</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-base sm:text-lg md:text-xl text-white/50 mt-6 md:mt-8 max-w-2xl mx-auto px-4"
        >
          Design tools shouldn't slow you down. Zuna combine powerful features
          with an intuative interface that keeps you in creative flow.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row border border-white/15 rounded-full p-2 mt-6 md:mt-8 max-w-lg mx-auto overflow-hidden bg-neutral-900/50 backdrop-blur-sm"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent flex px-4 py-2 sm:py-0 flex-1 w-full outline-none text-white placeholder:text-white/30"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap w-full sm:w-auto mt-2 sm:mt-0"
            size="sm"
          >
            Sign Up
          </Button>
        </motion.form>
        
        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-8 mt-12 text-white/30"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-400" />
            <span className="text-sm">Real-time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-sm">Collaborative</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-400" />
            <span className="text-sm">Fast</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
