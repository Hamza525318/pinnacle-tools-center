"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";

export default function CTASection() {
  return (
    <section
      className="w-full py-16 px-6 md:px-12 relative bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/cta-section-01.webp')" }}
    >
      {" "}
      {/* Replace with your actual image */}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* CTA Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-white">
        {/* Left Side - CTA Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            Power Up Your Work with Premium Tools
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Explore our latest collection of high-performance drills, router
            bits, and precision tools. Designed for professionals and DIY
            enthusiasts.
          </p>

          {/* CTA Button */}
          <Button className="bg-p-yellow text-black px-6 py-2 rounded-md shadow-md hover:bg-p-yellow-100 text-p-blue font-semibold text-lg w-[150px] h-[48px] transition-all mt-2">
            Order now
          </Button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          {/* <img
            src="./assets/cta-section-02.webp" // Replace with actual image
            alt="Power Tools"
            width={500}
            height={300}
            className="rounded-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
