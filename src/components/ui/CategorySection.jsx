"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CategoriesSection() {
  return (
    <section className="w-full py-12 px-6 md:px-12 flex flex-col items-center justify-center bg-white">
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="./assets/categories-section-01.webp" // Replace with actual image
            alt="Shopping"
            width={500}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full"
          />
          <span className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded-lg">
            50% Off
          </span>
        </div>

        {/* Right Side - Content & Sliding Category Cards */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Title aligned from the start */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            Explore Categories
          </h2>

          {/* Category Slider positioned in middle */}
          <div className="w-full flex justify-center">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {/* Category Cards */}
              {[
                {
                  title: "Router Bits",
                  count: 49,
                  icon: "./assets/categories/drilling_machine.png",
                  bg: "bg-purple-100",
                },
                {
                  title: "CNC bits",
                  count: 8,
                  icon: "./assets/categories/drilling_machine.png",
                  bg: "bg-yellow-100",
                },
                {
                  title: "V groove blades",
                  count: 485,
                  icon: "./assets/categories/drilling_machine.png",
                  bg: "bg-red-100",
                },
                {
                  title: "Power tools",
                  count: 291,
                  icon: "./assets/categories/drilling_machine.png",
                  bg: "bg-green-100",
                },
                {
                  title: "Abbrasives",
                  count: 291,
                  icon: "./assets/categories/drilling_machine.png",
                  bg: "bg-green-100",
                },
              ].map((category, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`p-6 ${category.bg} rounded-lg shadow-md flex flex-col items-center`}
                  >
                    <img className="w-20 md:24" src={category.icon}></img>
                    <p className="text-base font-semibold mt-2">
                      {category.title}
                    </p>
                    <span className="text-gray-600 text-sm">
                      {category.count} items
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
