"use client";

import Image from "next/image";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import { motion } from "framer-motion";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-base sm:text-lg md:text-xl px-4">
          Already chosen by these market leaders{" "}
        </h3>
        <div className="overflow-hidden mt-8 md:mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24 pr-12 sm:pr-16 md:pr-20 lg:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo) => (
              <Image
                src={logo.image}
                key={logo.name}
                alt={logo.name}
                className="flex-none h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24 lg:h-16 lg:w-32"
              />
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo) => (
              <Image
                src={logo.image}
                key={`${logo.name}-dup`}
                alt={logo.name}
                className="flex-none h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24 lg:h-16 lg:w-32"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
