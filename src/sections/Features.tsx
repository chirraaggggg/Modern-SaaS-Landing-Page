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
                <p className="text-4xl font-extrabold text-white/20 text-center transition-colors duration-500 group-hover:text-white/40">
                    We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year
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
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, borderColor: "rgba(163, 230, 53, 0.3)" }}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center cursor-default"
            >
              <motion.span
                className="bg-lime-400 text-neutral-950 size-5 rounded-full flex items-center justify-center text-xl"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                &#10038;
              </motion.span>
              <span className="font-medium md:text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const keys = [
  { label: "shift", className: "w-28 px-5" },
  { label: "alt", className: "" },
  { label: "c", className: "" },
];

function AnimatedKeys() {
  const pressKey = async (wrapper: HTMLElement) => {
    const el = wrapper.firstElementChild as HTMLElement;
    if (!el) return;

    // Press down — realistic key sink with depth loss
    await el.animate(
      [
        {
          transform: "translateY(0px)",
          borderBottomWidth: "3px",
          boxShadow: "0 2px 0 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.5)",
          filter: "brightness(1)",
        },
        {
          transform: "translateY(2px)",
          borderBottomWidth: "1px",
          boxShadow: "0 0 0 0 rgba(0,0,0,0.05), inset 0 2px 4px rgba(0,0,0,0.2)",
          filter: "brightness(0.92)",
        },
      ],
      { duration: 60, fill: "forwards", easing: "cubic-bezier(0.4, 0, 1, 1)" }
    ).finished;

    // Flash highlight ring
    wrapper.style.outline = "2px solid #a3e635";
    wrapper.style.outlineOffset = "1px";
    wrapper.style.borderRadius = "12px";

    // Hold at bottom
    await new Promise((r) => setTimeout(r, 80));

    // Release — bounce back up
    await el.animate(
      [
        {
          transform: "translateY(2px)",
          borderBottomWidth: "1px",
          boxShadow: "0 0 0 0 rgba(0,0,0,0.05), inset 0 2px 4px rgba(0,0,0,0.2)",
          filter: "brightness(0.92)",
        },
        {
          transform: "translateY(-2px)",
          borderBottomWidth: "4px",
          boxShadow: "0 4px 8px -2px rgba(0,0,0,0.2), 0 0 16px rgba(163,230,53,0.25)",
          filter: "brightness(1.05)",
        },
        {
          transform: "translateY(0px)",
          borderBottomWidth: "3px",
          boxShadow: "0 2px 0 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.5)",
          filter: "brightness(1)",
        },
      ],
      { duration: 300, fill: "forwards", easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
    ).finished;

    // Fade out highlight ring
    wrapper.style.outline = "2px solid transparent";
  };

  return (
    <div className="flex items-center justify-center gap-3 pl-4">
      {keys.map((key) => (
        <div
          key={key.label}
          className="rounded-xl cursor-pointer select-none active:cursor-default"
          onMouseDown={(e) => pressKey(e.currentTarget as HTMLElement)}
        >
          <Key className={key.className}>
            {key.label}
          </Key>
        </div>
      ))}
    </div>
  );
}
