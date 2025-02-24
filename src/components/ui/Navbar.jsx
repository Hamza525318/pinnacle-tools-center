"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
import AddToCartModal from "./AddToCartComponent"; // Importing the Cart Modal Component
import Link from "next/link";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const router = useRouter();

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
          {/* Signed In User Dropdown */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* If User is Not Signed In, Show Account Button */}
          <SignedOut>
            <button
              className="flex items-center text-gray-700 hover:text-[#003366]"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <User className="h-5 w-5" />
              <div className="ml-2 text-sm hidden md:block">
                <p className="text-xs text-gray-500">Account</p>
                <p className="font-medium">Login</p>
              </div>
            </button>
          </SignedOut>

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

      {/* Mobile Sidebar */}
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

          <Link href="/products" className="text-white font-medium">
            Products
          </Link>
        </nav>
      </div>

      {/* Second Row - Desktop Menu */}
      <div className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-[#003366] font-medium">
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#003366]">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white z-[9999]">
                  <DropdownMenuItem>Category 1</DropdownMenuItem>
                  <DropdownMenuItem>Category 2</DropdownMenuItem>
                  <DropdownMenuItem>Category 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/contact" className="text-gray-600 hover:text-[#003366]">
                Contact-us
              </a>
              <Link href="/products" className="text-gray-600 font-medium">
                Products
              </Link>
            </div>
            <button className="flex items-center text-gray-600 hover:text-[#003366]">
              <MapPin className="h-5 w-5" />
              <span className="ml-2">Bangalore</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {isAuthModalOpen && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In or Sign Up</h2>
      <p className="text-gray-600 mb-6">Access your account to continue.</p>
      
      {/* Sign In Button */}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all mb-3"
        onClick={() => {
          setIsAuthModalOpen(false);
          router.push("/sign-in");
        }}
      >
        Sign In
      </button>
      
      {/* Sign Up Button */}
      <button
        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-all mb-3"
        onClick={() => {
          setIsAuthModalOpen(false);
          router.push("/sign-up");
        }}
      >
        Sign Up
      </button>

      {/* Cancel Button */}
      <button
        className="w-full bg-gray-300 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-400 transition-all"
        onClick={() => setIsAuthModalOpen(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}


    {/* AddToCartModal Integrated */}
    <AddToCartModal />
    </nav>
  );
};

export default Navbar;
