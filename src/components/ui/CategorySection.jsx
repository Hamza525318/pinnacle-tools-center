"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Power Tools",
    subcategories: [
      "Angle Grinders",
      "Drilling Machines",
      "Hammer Ring Machines",
      "Demolition Hammers",
      "Chain Saw Machines",
      "Cutter Machines",
      "Cordless Tools",
    ],
  },
  {
    name: "Hand Tools",
    subcategories: [
      "Spanners",
      "Screw Drivers",
      "Pipe Wrenches",
      "Allen Keys",
      "Starbits",
    ],
  },
  {
    name: "Wood Working Tools",
    subcategories: [
      "Router Bits",
      "V Groove Blades",
      "CNC Bits",
      "Router Machines",
    ],
  },
  {
    name: "Pneumatic Tools",
    subcategories: [
      "Impact Wrench",
      "Nut Revitors",
      "Pop Revitors",
      "Spray Gun",
    ],
  },
];

const cardColors = [
  "bg-orange-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-blue-100",
  "bg-yellow-100",
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="w-full bg-gradient-to-br from-[#002244] to-[#004080] text-white py-12 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
          Explore Categories
        </h2>

        {categories.map((category, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {category.name}
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
              {category.subcategories.map((sub, subIndex) => (
                <motion.div
                  key={subIndex}
                  whileHover={{ scale: 1.05 }}
                  className={`min-w-[180px] h-40 ${cardColors[subIndex % cardColors.length]} rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center`}
                >
                  <Link href={`/products/${sub.toLowerCase().replace(/ /g, '-')}`}>
                    <span className="text-center text-gray-800 font-semibold cursor-pointer">
                      {sub}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}