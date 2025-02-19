"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-[#004E64] via-[#005F73] to-[#003366] text-white flex flex-col items-center py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Get in touch!</h2>
        <p className="text-gray-300 mt-2">
          Fill up the form and our team will get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="flex flex-col items-center bg-[#432382] p-6 rounded-lg">
          <Phone className="h-8 w-8 text-white mb-2" />
          <p className="text-lg font-medium">+02 1234 567</p>
        </div>
        <div className="flex flex-col items-center bg-[#432382] p-6 rounded-lg">
          <Mail className="h-8 w-8 text-white mb-2" />
          <p className="text-lg font-medium">hello@yoursite.com</p>
        </div>
        <div className="flex flex-col items-center bg-[#432382] p-6 rounded-lg">
          <MapPin className="h-8 w-8 text-white mb-2" />
          <p className="text-lg font-medium">102 Street, Hamilton</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Side */}
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="pl-10"
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="pl-10"
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="pl-10"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              rows={5}
              onChange={handleChange}
              required
            />
          </div>

          {/* Services Selection */}
          {/* <div className="col-span-2">
            <p className="text-gray-700 font-semibold mb-2">Services</p>
            <div className="flex flex-wrap gap-3">
              {["Web Design", "Development", "Logo Design", "Other"].map((service, index) => (
                <button
                  key={index}
                  type="button"
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  {service}
                </button>
              ))}
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="text-black bg-transparent border border-p-blue-100 px-6 py-3 rounded-md flex items-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
