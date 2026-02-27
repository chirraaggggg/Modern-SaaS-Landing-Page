"use client";

import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 lg:max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30 transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent transition-transform duration-700 group-hover:translate-x-1">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                    {Array.from({ length: 3}).map((_, i) => (
                        <span
                            className="size-1.5 rounded-full bg-white inline-flex"
                            key={i}
                        ></span>
                    ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Interactive Prototyping"
            description="Engage with your clients with prototypes that react to user interactions"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video inline-flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center transition-all duration-500 group-hover:text-white/40 group-hover:scale-105">
                    We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-300 group-hover:to-pink-300">incredible</span> growth this year
                </p>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful command to help you create designs more quickly"
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
            >
            <div className="aspect-video inline-flex items-center justify-center gap-4">
                <AnimatedKeys />
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full flex items-center justify-center text-xl">&#10038;</span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const keys = [
  { label: "shift", className: "w-28" },
  { label: "alt", className: "" },
  { label: "c", className: "" },
];

function AnimatedKeys() {
  const pressKey = async (el: HTMLElement) => {
    // Press down with highlight border
    await el.animate(
      [
        { transform: "translateY(0) scale(1)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.2)", outline: "2px solid transparent", outlineOffset: "2px" },
        { transform: "translateY(4px) scale(0.95)", boxShadow: "0 1px 0 0 rgba(0,0,0,0.4)", outline: "2px solid #a3e635", outlineOffset: "2px" },
      ],
      { duration: 100, fill: "forwards", easing: "ease-in" }
    ).finished;

    // Release with bounce, keep highlight briefly
    await el.animate(
      [
        { transform: "translateY(4px) scale(0.95)", boxShadow: "0 1px 0 0 rgba(0,0,0,0.4)", outline: "2px solid #a3e635", outlineOffset: "2px" },
        { transform: "translateY(-4px) scale(1.02)", boxShadow: "0 6px 12px -2px rgba(0,0,0,0.3), 0 0 20px rgba(163,230,53,0.15)", outline: "2px solid #a3e635", outlineOffset: "3px" },
        { transform: "translateY(0) scale(1)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.2)", outline: "2px solid transparent", outlineOffset: "2px" },
      ],
      { duration: 350, fill: "forwards", easing: "ease-out" }
    ).finished;
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {keys.map((key) => (
        <motion.div
          key={key.label}
          style={{ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.2)" }}
          className="rounded-2xl cursor-pointer select-none"
          onMouseDown={(e) => pressKey(e.currentTarget as HTMLElement)}
        >
          <Key className={key.className}>
            {key.label}
          </Key>
        </motion.div>
      ))}
    </div>
  );
}
