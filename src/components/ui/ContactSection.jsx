"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section id="contact-us" className="w-full bg-gradient-to-tr from-[#002244] to-[#004080] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-oswald text-[#ffc107] font-bold">
            Get in Touch with Us
          </h2>
          <p className="text-gray-300 font-oswald mt-4 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Contact Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-[#003366] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#003366]">Phone</h3>
                  <p className="text-gray-600">+02 1234 567</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-[#003366] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#003366]">Email</h3>
                  <p className="text-gray-600">pinnacle-tools@support.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-[#003366] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#003366]">Location</h3>
                  <p className="text-gray-600">Sp road, Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="pl-12 py-2 text-base border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="pl-12 py-2 text-base border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="pl-12 py-2 text-base border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    onChange={handleChange}
                    required
                  />
                </div>

                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full p-4 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  onChange={handleChange}
                  required
                />

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-[#003366] text-white px-8 py-3 rounded-lg flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:bg-blue-600"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95373631531592!3d-37.81627977975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a6d12a5b8b1e!2s102%20Street%2C%20Hamilton!5e0!3m2!1sen!2sus!4v1616744850916!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
