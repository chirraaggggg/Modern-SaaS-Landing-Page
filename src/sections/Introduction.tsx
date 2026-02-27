"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  // Animate the tag and heading entrance
  const tagOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const tagY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.02, 0.08], [30, 0]);

  // Animate the closing line
  const closingOpacity = useTransform(scrollYProgress, [0.85, 0.92], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.85, 0.92], [40, 0]);
  const closingScale = useTransform(scrollYProgress, [0.85, 0.92], [0.9, 1]);

  // Subtle background gradient shift
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.06, 0]);

  return (
    <div ref={outerRef} className="h-[300vh] relative">
      <section className="sticky top-0 flex items-center min-h-screen py-28 lg:py-40 overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: bgOpacity }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/30 via-lime-400/20 to-purple-500/30 blur-[120px]" />
        </motion.div>

        <div className="container relative">
          {/* Animated tag */}
          <motion.div
            className="flex justify-center"
            style={{ opacity: tagOpacity, y: tagY }}
          >
            <Tag>Introducing Layers</Tag>
          </motion.div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            {/* Animated heading */}
            <motion.span
              className="inline-block"
              style={{ opacity: headingOpacity, y: headingY }}
            >
              Your creative process deserves better.
            </motion.span>{" "}
            <span>
              {words.map((word, i) => {
                const start = 0.1 + (i / totalWords) * 0.7;
                const end = start + 0.7 / totalWords;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </span>

            {/* Animated closing line */}
            <motion.span
              className="text-lime-400 block mt-6"
              style={{
                opacity: closingOpacity,
                y: closingY,
                scale: closingScale,
              }}
            >
              That&apos;s why we built Layers.
            </motion.span>
          </div>

          {/* Decorative animated lines */}
          <motion.div
            className="flex justify-center mt-12 gap-1.5"
            style={{ opacity: closingOpacity }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-lime-400"
                initial={{ width: 0 }}
                style={{
                  width: useTransform(
                    scrollYProgress,
                    [0.88 + i * 0.02, 0.92 + i * 0.02],
                    [0, i === 1 ? 40 : 12]
                  ),
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      className="inline-block mr-[0.25em]"
      style={{ opacity, y }}
    >
      {children}
    </motion.span>
  );
}
