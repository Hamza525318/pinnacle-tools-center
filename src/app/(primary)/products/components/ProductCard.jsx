"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react"; // ✅ Import Cart Icon
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md w-full object-cover h-48"
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col flex-grow mt-4 min-h-[120px]">
          <h3 className="text-md font-semibold text-gray-800">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Size Selection Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600 mt-2">
              Select Size
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white shadow-md">
              <DropdownMenuItem>36</DropdownMenuItem>
              <DropdownMenuItem>38</DropdownMenuItem>
              <DropdownMenuItem>40</DropdownMenuItem>
              <DropdownMenuItem>42</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ✅ Cart Icon at Right-Most End */}
        <div className="flex justify-end">
          <button
            className="p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            onClick={(e) => {
              e.preventDefault(); // Prevents link navigation when clicking the cart icon
              alert(`Added ${product.name} to cart!`);
            }}
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </Link>
  );
}
