'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote, User } from 'lucide-react';

const testimonials = [
  { id: 1, review: "Amazing quality tools! Highly reliable and efficient.", rating: 5 },
  { id: 2, review: "Great customer support and fast delivery.", rating: 4 },
  { id: 3, review: "Top-notch precision tools. A must-buy for professionals!", rating: 5 },
  { id: 4, review: "Excellent experience ordering online. Very smooth process.", rating: 4 }
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8">
        What Customers Say About Us
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on medium screens
          1024: { slidesPerView: 2 } // Show 2 slides on large screens
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 h-[220px] md:h-[250px] overflow-hidden">
              <Quote size={32} className="text-blue-600" />
              <p className="text-gray-700 text-lg flex-grow">{testimonial.review}</p>
              <div className="flex justify-between items-center mt-4">
                <User size={24} className="text-gray-500" />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className={`text-yellow-500 text-lg ${index < testimonial.rating ? 'opacity-100' : 'opacity-30'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
