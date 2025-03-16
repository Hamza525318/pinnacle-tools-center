"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center bg-black">
      
      {/* Full-Screen Background Image */}
      <Image
        src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1741996969/pinnacle-tools/staticassets/bg-hero_o3hmxt.webp" // Replace this with the newly generated image path
        alt="Precision Cutting Tools Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      
      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 text-center px-6 md:px-12 max-w-3xl"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
        >
          Pinnacle Tools Center
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-md md:text-xl text-gray-200 mb-8"
        >
          Discover premium router bits and CNC tools, crafted for professionals and DIY enthusiasts. Innovation meets quality.
        </motion.p>

        {/* Trust Statement */}
        <p className="text-lg text-gray-300 mb-8">
          Trusted by thousands of professionals worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href={"/products"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#ffc107] text-black px-8 py-3 rounded-lg shadow-lg hover:bg-[#ffb300] text-lg font-semibold transition-all"
            >
              Shop Now
            </motion.button>
          </Link>

          <Link href={"#contact-us"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-transparent border-2 border-[#ffc107] text-[#ffc107] px-8 py-3 rounded-lg hover:bg-[#ffc107] hover:text-black shadow-lg text-lg font-semibold transition-all"
            >
              Enquire Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
