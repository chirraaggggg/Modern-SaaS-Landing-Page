"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate(
      [leftDesignScope.current, {opacity: [0, 1] }, {duration: 0.5}],
    ]);
  return (
    <section className="py-24 overflow-hidden">
      <div className="container relative">
        <motion.div ref={leftDesignScope} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </motion.div>
        <motion.div ref={leftPointerScope} className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </motion.div>

        <motion.div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </motion.div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Michael" color="red" />
        </div>
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
