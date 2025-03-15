"use client";

import { Card, CardContent } from "../../../components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Users, Boxes, User } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Trophy size={40} />, value: "25+", label: "Years of Experience" },
    { icon: <Users size={40} />, value: "100+", label: "Satisfied Clients" },
    { icon: <Boxes size={40} />, value: "25+", label: "Product Categories" },
    { icon: <User size={40} />, value: "25+", label: "Expert Team Members" },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#001F3F] via-[#004080] to-[#002F5F]">
      <div className="container mx-auto px-4">
        
        {/* Heading Section */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold font-oswald text-white mb-8"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-lg leading-relaxed font-roboto max-w-3xl mx-auto"
          >
            At Pinnacle Tools Center, we specialize in providing high-quality router bits, CNC bits, and power tools for professionals and DIY enthusiasts. 
            With a commitment to precision, durability, and innovation, our products are designed to enhance efficiency and accuracy in every project. 
            Whether you're a woodworker, metal fabricator, or industrial craftsman, our curated selection ensures that you have the right tools to achieve flawless results.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300 shadow-lg bg-gradient-to-br from-[#F6D776] to-[#FFD700] hover:scale-105">
                <CardContent className="p-8 flex flex-col items-center justify-center space-y-4">
                  <div className="text-[#003366]">
                    {stat.icon}
                  </div>
                  <div className="text-center font-roboto">
                    <div className="text-4xl md:text-5xl font-bold text-[#003366]">
                      {stat.value}
                    </div>
                    <div className="text-md mt-2 text-gray-800">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
