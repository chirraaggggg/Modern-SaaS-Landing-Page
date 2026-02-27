"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
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
      className="py-24 relative z-20"
      style={isDragging ? { cursor: "none" } : undefined}
      onMouseMove={(e) => {
        if (isDragging) {
          setCursorPos({ x: e.clientX, y: e.clientY });
        }
      }}
    >
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
          className="absolute -left-72 top-16 hidden lg:block cursor-grab active:cursor-grabbing z-50"
        >
          <Image src={designExample1Image} alt="Design example 1 image" draggable={false} />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
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
          className="absolute -right-80 -top-16 hidden lg:block cursor-grab active:cursor-grabbing z-50"
        >
          <Image src={designExample2Image} alt="Design example 2 image" draggable={false} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 275, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Michael" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down. Layers combine powerful features
          with an intuative interface that keeps you in creative flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent flex px-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
