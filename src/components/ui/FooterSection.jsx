'use client';

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#001F3F] text-white py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Left Section - Logo & Description */}
        <div>
          <img src="./assets/pinnacle-logo.webp" alt="Logo" className="w-32 mb-4" />
          <h5 className="text-gray-300 text-lg font-bold font-oswald">
            Pinnacle Tools Center 
          </h5>
          <p className="font-roboto text-sm">go-to marketplace for high-quality tools. Shop now and experience excellence!</p>
          <div className="flex gap-3 mt-4">
            {/* <img src="/google-play.png" alt="Google Play" className="w-28" />
            <img src="/app-store.png" alt="App Store" className="w-28" /> */}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Router Bits</li>
            <li>Wood Cutting Blades</li>
            <li>Power Tools</li>
            <li>CNC Bits</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>About Us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & Conditions</li>
            <li>Secure Payment</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
         <h3 className="text-lg font-semibold mb-3">Account</h3>
         <ul className='text-gray-300 text-sm space-y-2'>
         <li>My Account</li>
         <li>View Cart</li>
         <li>Order History</li>
         </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="flex items-center gap-2">
              <MapPin className="text-yellow-400" size={16} />
              123 Tool Street, Industrial Area, City, Country
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-yellow-400" size={16} />
              +00 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-yellow-400" size={16} />
              support@pinnacletools.com
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="text-yellow-400" size={20} />
            <Twitter className="text-yellow-400" size={20} />
            <Linkedin className="text-yellow-400" size={20} />
            <Instagram className="text-yellow-400" size={20} />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>Copyright © 2025 Pinnacle Tools Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
