"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function ProductCard({ product }) {
  return (
    <div className="p-2 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md w-full object-cover h-48"
        />
      </div>

      {/* Content Wrapper - Ensuring Equal Height */}
      <div className="flex flex-col flex-grow mt-4 min-h-[160px]">
        <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>

        {/* Pricing */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="text-lg font-bold text-gray-900">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Size Selection Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600 mt-2">
            36
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full bg-off-white">
            <DropdownMenuItem>36</DropdownMenuItem>
            <DropdownMenuItem>38</DropdownMenuItem>
            <DropdownMenuItem>40</DropdownMenuItem>
            <DropdownMenuItem>42</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Add to Cart Button */}
      <Button className="w-full bg-p-blue text-white py-2 mt-1 hover:bg-p-blue-100">
        Add to Cart
      </Button>
    </div>
  );
}
