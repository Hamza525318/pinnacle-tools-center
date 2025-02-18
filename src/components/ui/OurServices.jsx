'use client';

import { Truck, Headset, ShieldCheck, ShoppingCart } from 'lucide-react';

const services = [
  { id: 1, title: "Free Shipping up to Certain Limit", description: "Enjoy free shipping on orders above a set amount.", icon: <Truck size={32} className="text-blue-600" /> },
  { id: 2, title: "24/7 Customer Support", description: "We're here to assist you anytime, anywhere.", icon: <Headset size={32} className="text-blue-600" /> },
  { id: 3, title: "Reliability & Quality Tools", description: "Precision-engineered tools for durability & efficiency.", icon: <ShieldCheck size={32} className="text-blue-600" /> },
  { id: 4, title: "Online Order & Doorstep Delivery", description: "Convenient ordering with fast & secure delivery.", icon: <ShoppingCart size={32} className="text-blue-600" /> }
];

export default function OurServices() {
  return (
    <section className="w-full py-12 px-6 md:px-12 md:py-24 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 flex items-center rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="mr-4">{service.icon}</div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
            <span className="text-blue-600 text-xl">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
