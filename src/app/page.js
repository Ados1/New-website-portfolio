"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const text = "Crafting Interactive Digital Experiences";
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      {/* TITLE */}
      <div className="bg-[#10131C] text-center pt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              inital={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="h-full w-full flex flex-col lg:flex-row   ">
        {/* IMAGE CONTAINER */}
        <div className=" relative">
          <Spline
            scene="https://prod.spline.design/64E3C0UYOZ4HwzbR/scene.splinecode"
            className="h-full"
          />
        </div>
        {/* TEXT CONTAINER */}

        <div className="  flex flex-col gap-8 items-center justify-center absolute left-20 top-56">
          {/* Desc */}
          <p className="text-base text-white w-64 ">
            A <strong>front-end developer</strong> passionate about blending
            design and technology to create engaging user experiences. With
            expertise in HTML, CSS, JavaScript and React.Js . Specialized in
            crafting responsive and visually stunning websites and applications.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-white bg-white text-black">
                View My Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-white text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
