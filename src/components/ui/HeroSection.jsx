'use client';

import Image from 'next/image';
import { Button } from './button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-tr from-[#002244] via-[#61356f] via-[#c04271] via-[#fd714c] to-[#ffc107] text-white relative">
      {/* Title Centered at the Top with Animation & Text Shadow */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-3xl md:text-5xl font-bold font-oswald text-white text-shadow"
      >
        Your Ultimate Destination for Precision Cutting Tools
      </motion.h1>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-20 md:mt-0">
        {/* Left Side - Image (Positioned Slightly Bottom Left, Optimized Size) */}
        <div className="w-full md:w-[55%] lg:w-[50%] flex justify-start md:pl-12 md:mt-16">
          <img
            src="./assets/hero-section-01.webp" // Replace this later with actual image
            alt="Hero Section Image"
            className="rounded-lg shadow-lg object-cover w-full max-w-[500px]"
          />
        </div>

        {/* Right Side - Description & Button */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4"
        >
          <p className="text-md md:text-lg mb-6 text-off-white font-roboto text-shadow">
            Explore a curated selection of router bits and CNC cutting tools designed for professionals and DIY enthusiasts alike. Experience the perfect blend of innovation, quality, and affordability.
          </p>

          <p className=" text-sm text-off-white my-2">Trusted by thousands of professionals worldwide.</p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffc107] text-black px-8 py-3 rounded-md shadow-md hover:bg-[#ffb300] text-p-blue font-semibold text-lg w-[160px] h-[48px] transition-all"
          >
            Shop Now
          </motion.button>
          
          {/* Trust-Building Subtext */}
         
        </motion.div>
      </div>
    </section>
  );
}
