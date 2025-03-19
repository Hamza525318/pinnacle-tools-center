"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryItems = [
  {
    title: "Power Tools",
    description: "High-performance tools for precision and efficiency.",
    image: "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037755/pinnacle-tools/staticassets/power-tools_ycbgc6.jpg",
    link: "/products",
  },
  {
    title: "Cordless Tools",
    description: "Portable, powerful, and flexible for any task.",
    image: "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742038007/pinnacle-tools/staticassets/d00fe31c-76ae-433c-83cd-c7fab3b7cead.png",
    link: "/products",
  },
  {
    title: "Hand Tools",
    description: "Durable, reliable, and essential for every job.",
    image: "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742038376/pinnacle-tools/staticassets/hand-tools_jvxbc4.jpg",
    link: "/products",
  },
  {
    title: "Woodworking Tools",
    description: "Precision blades and tools for fine woodwork.",
    image: "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742038622/pinnacle-tools/staticassets/wood-working-tools_y13xyy.jpg",
    link: "/products",
  },
  {
    title: "Pneumatic Tools",
    description: "Heavy-duty, air-powered tools for top performance.",
    image: "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742038998/pinnacle-tools/staticassets/pneumatic-tools_ovvl1w.jpg",
    link: "/products",
  },
];

export default function GallerySection() {
  return (
    <section className="p-6 md:p-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-white text-2xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center mb-4">
                {item.description}
              </p>
              <Link href={item.link}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffc107] text-black px-6 py-2 rounded-lg shadow-md hover:bg-[#ffb300] transition-all"
                >
                  Explore More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
