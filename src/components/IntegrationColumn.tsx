"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumn(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, reverse } = props;
  return (
    <div
      className={twMerge(
        "flex flex-col overflow-hidden",
        props.className
      )}
    >
      <motion.div
        className="flex flex-col gap-4 pb-4"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          y: {
            duration: 28,
            repeat: Infinity,
            ease: [0.33, 1, 0.68, 1], // cubic-bezier for smoothness
          },
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {integrations.map((integration) => (
              <div
                key={`${integration.name}-${i}`}
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
              >
                <div className="flex justify-center">
                  <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    className="size-24"
                  />
                </div>
                <h3 className="text-3xl text-center mt-6">
                  {integration.name}
                </h3>
                <p className="text-center text-white/50 mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
