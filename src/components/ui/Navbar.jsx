"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingBag,
  LogOut,
  User,
  MapPin,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import AddToCartModal from "./AddToCartComponent";
import Link from "next/link";
import AuthModal from "./AuthComponent";
import useAuthStore from "../../app/store/authStore";
import { toast } from "sonner";
import ProductCategoriesDropdown from "./CategoryDropdown";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, isAuthenticated, logout, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogOut = async () => {
    try {
      await logout();
      toast.success("Logged Out Successfully");
    } catch (error) {
      toast.error("Error Logging out. Please try again later!!");
    }
  };

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
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
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
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-lg shadow-sm"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <User className="h-6 w-6 text-gray-700" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-white z-[9999999] w-60 rounded-lg shadow-lg border p-3 space-y-2"
              >
                <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-800 font-medium">
                    {user?.email}
                  </span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
                  <ShoppingBag className="h-5 w-5 text-gray-500" />
                  <Link href={"/myorders"} className="w-full">
                    <span className="text-gray-800 font-medium">My Orders</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center space-x-3 p-3 rounded-md text-red-500 hover:bg-red-100 transition cursor-pointer"
                  onClick={handleLogOut}
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button onClick={() => setIsAuthModalOpen(true)}>
              <User className="h-6 w-6 text-gray-700" />
            </button>
          )}
        </div>
      </div>

      {/* Full-Width Mobile Search Bar */}
      <div className="md:hidden w-full px-4 pb-3">
        <div className="flex items-center border border-gray-200 rounded-lg">
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

      {/* Mobile Full Width Menu */}
      <div className="md:hidden w-full py-3 shadow-sm">
        <div className="flex justify-around">
          <Link href="/products" className="hover:text-[#003366] text-gray-800 transition">
            Products
          </Link>
          <Link href="#categories" className="hover:text-[#003366] text-gray-800 transition">
            Categories
          </Link>
          <Link href="#contact-us" className="hover:text-[#003366] text-gray-800 transition">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-[#003366] font-medium">
                Home
              </Link>
              <Link href="#categories" className="text-gray-600 font-medium">
                Categories
              </Link>
              <Link href="#contact-us" className="text-gray-600 font-medium">
                Contact-us
              </Link>
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

      {/* Integrated Modals */}
      <AddToCartModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
