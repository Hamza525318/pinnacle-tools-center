"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "./assets/dealers/john-bandari.png",
  "./assets/dealers/perfect-licon-group.png",
  "./assets/dealers/yuri_logo.webp",
  "./assets/dealers/john-bandari.png",
  "./assets/dealers/yuri_logo.webp",
  "./assets/dealers/yuri_logo.webp",
  "./assets/dealers/perfect-licon-group.png",
];

export default function BrandsSection() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Brands We Deal In
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-screen space-x-10"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...brands].map((brand, index) => (
              <div key={index} className="flex items-center justify-center w-screen">
                <img src={brand} alt={brand} width={400} className="w-56 md:w-64" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
