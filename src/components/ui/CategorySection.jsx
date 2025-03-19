"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Power Tools",
    subcategories: [
      {
        name: "Angle Grinders",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/angle_grinders_kbzxpq.webp",
      },
      {
        name: "Drilling Machines",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313512/pinnacle-tools/staticassets/drilling_machines_gdfukc.jpg",
      },
      {
        name: "Hammer Ring Machines",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/hammering_machines_djayvq.jpg",
      },
      {
        name: "Demolition Hammers",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/demolition_hammer_machine_lojuj6.jpg",
      },
      {
        name: "Chain Saw Machines",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313512/pinnacle-tools/staticassets/chainsaw_machines_a11cj5.jpg",
      },
      {
        name: "Cutter Machines",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313514/pinnacle-tools/staticassets/cutter_machines_pqoptc.jpg",
      },
      {
        name: "Cordless Tools",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037755/pinnacle-tools/staticassets/power-tools_ycbgc6.jpg",
      },
    ],
  },
  {
    name: "Hand Tools",
    subcategories: [
      {
        name: "Spanners",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742341200/pinnacle-tools/staticassets/spanners_2_zx7olb.jpg",
      },
      {
        name: "Screw Drivers",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313529/pinnacle-tools/staticassets/screwdrivers_pepewt.jpg",
      },
      {
        name: "Pipe Wrenches",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/pipe_wrenches_oiorkv.jpg",
      },
      {
        name: "Allen Keys",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313512/pinnacle-tools/staticassets/allen_keys_gzekgi.jpg",
      },
      {
        name: "Starbits",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313533/pinnacle-tools/staticassets/starbits_rxsx3v.jpg",
      },
    ],
  },
  {
    name: "Wood Working Tools",
    subcategories: [
      {
        name: "Router Bits",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg",
      },
      {
        name: "V Groove Blades",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313533/pinnacle-tools/staticassets/v-groove-blades_mxpusg.jpg",
      },
      {
        name: "CNC Bits",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/cnc-bits_aynjly.jpg",
      },
      {
        name: "Router Machines",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313513/pinnacle-tools/staticassets/router_machines_uhi5vl.jpg",
      },
    ],
  },
  {
    name: "Pneumatic Tools",
    subcategories: [
      {
        name: "Impact Wrench",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742341081/pinnacle-tools/staticassets/impact_wrench_jorsr6.jpg",
      },
      {
        name: "Nut Revitors",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742314698/pinnacle-tools/staticassets/8fe56f62-e59a-47de-a048-c55719e4da45.png",
      },
      {
        name: "Pop Revitors",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742341424/pinnacle-tools/staticassets/pop_rivetor_eib4hw.jpg",
      },
      {
        name: "Spray Gun",
        image:
          "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742313533/pinnacle-tools/staticassets/spray_gun_dwjrd6.jpg",
      },
    ],
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#002244] to-[#004080] text-white py-16 md:py-24">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
          Explore Categories
        </h2>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {category.name}
            </h3>
            <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
              {category.subcategories.map((sub, subIndex) => (
                <Link href={"/products"}>
                  <motion.div
                    key={subIndex}
                    whileHover={{ scale: 1.07 }}
                    className="relative min-w-[240px] h-56 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  >
                    {/* Background Image for Each Subcategory */}
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-70"></div>

                    {/* Subcategory Name */}
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                      <Link
                        href={`/products/${sub.name
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                      >
                        <span className="text-white font-semibold text-lg px-6">
                          {sub.name}
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
