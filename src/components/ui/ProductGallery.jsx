"use client";

import Image from "next/image";

export default function ProductGallery() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white">
      {/* Left Side - 2x2 Grid */}
      <div className="w-full md:w-[60%] grid grid-cols-2 gap-6 p-4">
        {[
          {
            name: "V-Groove Blades",
            description: "Perfect for precise engraving and carving.",
            image: "./assets/gallery/power_tools_01.webp",
          },
          {
            name: "CNC Bits",
            description: "Engineered for high-speed, efficient cutting.",
            image: "./assets/gallery/power_tools_01.webp",
          },
          {
            name: "Power Tools",
            description: "Reliable and powerful tools for all projects.",
            image: "./assets/gallery/power_tools_01.webp",
          },
          {
            name: "Wood Cutting Blades",
            description: "Sharp and durable blades for fine woodwork.",
            image: "./assets/gallery/power_tools_01.webp",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden flex items-center justify-center h-[200px] group"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-80"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <p className="text-xl font-bold text-white">{product.name}</p>
              <p className="text-sm text-gray-300 mt-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Large Image with Background */}
      <div className="w-full md:w-[40%] flex items-center justify-center p-4">
        <div
          className="relative w-full h-[500px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('./assets/gallery/router_bits_01.webp')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <p className="text-3xl font-bold text-white">Router Bits</p>
            <p className="text-lg text-gray-300 mt-2">
              High-quality router bits for smooth and precise cuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
