"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

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
    <section className="w-full min-h-screen bg-gray-200 text-black flex flex-col items-center py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-oswald text-p-blue md:text-5xl font-bold">Get in touch!</h2>
        <p className="text-black font-oswald mt-2">
          Fill up the form and our team will get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl font-roboto mb-12">
        <div className="flex flex-col items-center bg-p-blue p-6 rounded-lg">
          <Phone className="h-8 w-8 text-p-yellow mb-2" />
          <p className="text-lg font-medium text-white">+02 1234 567</p>
        </div>
        <div className="flex flex-col items-center bg-p-blue p-6 rounded-lg">
          <Mail className="h-8 w-8 text-p-yellow mb-2" />
          <p className="text-lg font-medium text-white">pinnacle-tools@support.com</p>
        </div>
        <div className="flex flex-col items-center bg-p-blue p-6 rounded-lg">
          <MapPin className="h-8 w-8 text-p-yellow mb-2" />
          <p className="text-lg text-white font-medium">Sp road,Bangalore</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl md:p-12 mb-12">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Side */}
          <div className="space-y-4">
            <div className="relative flex items-center">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="pl-12 py-4 text-lg border border-gray-300 rounded-lg w-full"
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
                className="pl-12 py-4 text-lg border border-gray-300 rounded-lg w-full"
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
                className="pl-12 py-4 text-lg border border-gray-300 rounded-lg w-full"
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
              rows={7} // Increased height
              className="p-4 text-lg border border-gray-300 rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="text-white bg-p-blue border border-p-blue px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-500"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </Button>
          </div>
        </form>
      </div>

      {/* Embedded Google Map */}
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95373631531592!3d-37.81627977975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a6d12a5b8b1e!2s102%20Street%2C%20Hamilton!5e0!3m2!1sen!2sus!4v1616744850916!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </section>
  );
}
