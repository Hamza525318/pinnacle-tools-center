"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "./assets/dealers/john-bandari.png",
  "./assets/dealers/perfect-licon-group.png",
  "./assets/dealers/yuri_logo.webp",
  "./assets/dealers/john-bandari.png",
  "./assets/dealers/yuri_logo.webp",
  "./assets/dealers/perfect-licon-group.png",
];

export default function BrandsSection() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-oswald md:text-5xl font-bold text-center text-gray-900 mb-8">
          Brands We Deal In
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center space-x-10"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: brands.length * 3, // Adjust speed dynamically
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brand}
                  alt="Brand Logo"
                  className="w-auto h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
