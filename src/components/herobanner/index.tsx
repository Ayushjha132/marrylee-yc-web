"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Link from "next/link";
export function Herobanner() {
  const images = [
    "/hero1.png",
    // "/bannerimg.jpg",
  ];
  return (
    <ImagesSlider className="h-[55rem] max-h-svh" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-100 py-4">
        Seasoned Real Estate Investor <br /> and Consultant, Dubai.
        </motion.p>
        <button className="px-5 py-3 backdrop-blur-sm border bg-black border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"> 
          <span className="text-lg lg:text-2xl"><Link href="/about-me"> About Me →</Link></span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
