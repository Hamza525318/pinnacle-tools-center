"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  MapPin,
  User,
  Menu,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import Image from "next/image";
import AddToCartModal from "./AddToCartComponent"; // Importing the Cart Modal Component

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm relative">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src="../assets/pinnacle-logo.webp"
          alt="Pinnacle Tools Center"
          className="w-16 h-16 rounded-full"
        />

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 bg-gray-50 border-r border-gray-200 rounded-l-lg">
              <span className="text-gray-600">Products</span>
              <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white z-[9999]">
              <DropdownMenuItem>Router Bits</DropdownMenuItem>
              <DropdownMenuItem>CNC Bits</DropdownMenuItem>
              <DropdownMenuItem>V Groove Blades</DropdownMenuItem>
              <DropdownMenuItem>Power tools</DropdownMenuItem>
              <DropdownMenuItem>Abrasives</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-1 items-center border border-gray-200 rounded-r-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-4 py-2 text-gray-500 hover:text-[#003366]">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:flex items-center text-gray-700 hover:text-[#003366]">
            <User className="h-5 w-5" />
            <div className="ml-2 text-sm">
              <p className="text-xs text-gray-500">Account</p>
              <p className="font-medium">Login</p>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

        <div className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-[#003366] font-medium">
                Home
              </a>
              <DropdownMenu className="bg-white">
                <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#003366]">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" bg-white z-[9999]">
                  <DropdownMenuItem>Category 1</DropdownMenuItem>
                  <DropdownMenuItem>Category 2</DropdownMenuItem>
                  <DropdownMenuItem>Category 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#003366]">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white z-[9999]">
                  <DropdownMenuItem>Product 1</DropdownMenuItem>
                  <DropdownMenuItem>Product 2</DropdownMenuItem>
                  <DropdownMenuItem>Product 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/offers" className="text-[#FFD700] font-medium">
                Offers
              </a>
            </div>
            <button className="flex items-center text-gray-600 hover:text-[#003366]">
              <MapPin className="h-5 w-5" />
              <span className="ml-2">Bangalore</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#fd714c] to-[#ffc107] shadow-lg text-white p-6 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Search Bar - Moved Down */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="mt-6 flex flex-col space-y-4">
          <a href="/" className="text-white font-medium">
            Home
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between text-white">
              Categories
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black w-48 rounded-lg shadow-md">
              <DropdownMenuItem>Category 1</DropdownMenuItem>
              <DropdownMenuItem>Category 2</DropdownMenuItem>
              <DropdownMenuItem>Category 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between text-white">
              Products
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black w-48 rounded-lg shadow-md">
              <DropdownMenuItem>Product 1</DropdownMenuItem>
              <DropdownMenuItem>Product 2</DropdownMenuItem>
              <DropdownMenuItem>Product 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/offers" className="text-[#FFD700] font-medium">
            Offers
          </a>
        </nav>
      </div>

      {/* AddToCartModal Integrated */}
      <AddToCartModal />
    </nav>
  );
};

export default Navbar;
