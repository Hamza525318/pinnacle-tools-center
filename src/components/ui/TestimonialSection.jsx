"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    review: "Amazing quality tools! Highly reliable and efficient.",
    rating: 5,
    name: "Hamza Mustafa",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 2,
    review: "Great customer support and fast delivery.",
    rating: 4,
    name: "Mutafa",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 3,
    review:
      "Top-notch precision tools. A must-buy for professionals! Highly recommended.",
    rating: 5,
    name: "Hamza Mustafa",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 4,
    review: "Reliable and durable products. Love the collection!",
    rating: 5,
    name: "John Doe",
    role: "Carpenter",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 5,
    review: "Very smooth shopping experience. Highly recommended!",
    rating: 4,
    name: "Jane Smith",
    role: "DIY Enthusiast",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-oswald text-black">
          Customers Review
        </h2>
        <p className="text-gray-700 text-md mt-2">
          Share information about your brand with your customers.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on medium screens
            1024: { slidesPerView: 3 }, // Show 3 slides on large screens
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Autoplay, Navigation]}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-[#f6f9fc] text-gray-900  p-6 rounded-lg shadow-md flex flex-col gap-4 h-[260px] md:h-[300px] overflow-hidden">
                <Quote size={32} className="text-[#FFC107]" />
                <p className="text-gray-700 text-lg flex-grow">
                  {testimonial.review}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows Below Slider */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button className="prev-button bg-[#FFC107] p-3 rounded-full shadow-md">
            <ChevronLeft size={28} className="text-[#002244]" />
          </button>
          <button className="next-button bg-[#FFC107] p-3 rounded-full shadow-md">
            <ChevronRight size={28} className="text-[#002244]" />
          </button>
        </div>
      </div>
    </section>
  );
}
