"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  MapPin,
  User,
  Menu,
  X,
  LogOut,
  ShoppingBag
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import AddToCartModal from "./AddToCartComponent"; // Importing the Cart Modal Component
import Link from "next/link";
import AuthModal from "./AuthComponent";
import useAuthStore from "../../app/store/authStore";
import { Button } from "../../../components/ui/button";
import ProductCategoriesDropdown from "./CategoryDropdown";
import { toast } from "sonner";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, isAuthenticated,logout, fetchUser } = useAuthStore();
  const router = useRouter();

  console.log("USER", user);  useEffect(() => {
    console.log("USE EFFECT FIRED");
    fetchUser();
    setIsMobileMenuOpen(false);
  }, []);

  const handleLogOut = async()=>{
    try {
      await logout();
      toast.success('Logged Out Successfully');
    } catch (error) {
      toast.error("Error Logging out. Please try again later!!")
    }
  }

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
            // User Dropdown Menu
            <div className="flex items-center space-x-4">
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
    <button className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
      <User className="h-6 w-6 text-gray-700" />
    </button>
          </DropdownMenuTrigger>

         <DropdownMenuContent
    align="end"
    className="bg-white z-[9999999] w-60 rounded-lg shadow-lg border p-3 space-y-2"
  >
    {/* User Email Section */}
    <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
      <User className="h-5 w-5 text-gray-500" />
      <span className="text-gray-800 font-medium">{user?.email}</span>
    </DropdownMenuItem>

    {/* My Orders Link */}
    <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
  <ShoppingBag className="h-5 w-5 text-gray-500" />
  <Link href={'/myorders'} className="w-full">
    <span className="text-gray-800 font-medium">My Orders</span>
  </Link>
</DropdownMenuItem>

    {/* Logout Button */}
    <DropdownMenuItem
      className="flex items-center space-x-3 p-3 rounded-md text-red-500 hover:bg-red-100 transition cursor-pointer"
      onClick={handleLogOut}
    >
      <LogOut className="h-5 w-5" />
      <span className="font-medium">Logout</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            <Menu
              className="h-5 w-5 text-gray-500 block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          ) : (
            // Sign In Button
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsAuthModalOpen(true)}>
                <User className="h-6 w-6 text-gray-700" />
              </button>
              <Menu
              className="h-5 w-5 text-gray-500 block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
  className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-orange-500 to-yellow-400 shadow-2xl text-white p-6 z-50 transform ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out rounded-l-3xl`}
>
  <button
    className="absolute top-4 right-4 bg-white p-1 rounded-full shadow-md"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <X className="h-5 w-5 text-gray-700" />
  </button>

  <nav className="mt-16 flex flex-col space-y-6 text-lg font-semibold">
    <Link
      onClick={() => setIsMobileMenuOpen(false)}
      href="/"
      className="hover:bg-white hover:text-orange-500 py-2 px-4 rounded-lg transition"
    >
      Home
    </Link>

    <div className="hover:bg-white hover:text-orange-500 py-2 px-4 rounded-lg">
      <ProductCategoriesDropdown />
    </div>

    <Link
      onClick={() => setIsMobileMenuOpen(false)}
      href="/products"
      className="hover:bg-white hover:text-orange-500 py-2 px-4 rounded-lg transition"
    >
      Products
    </Link>
  </nav>
</div>


      {/* Second Row - Desktop Menu */}
      <div className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-[#003366] font-medium">
                Home
              </Link>
             
                <ProductCategoriesDropdown/>
              <Link href="/contact" className="text-gray-600 hover:text-[#003366]">
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

      {/* AddToCartModal Integrated */}
      <AddToCartModal />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
