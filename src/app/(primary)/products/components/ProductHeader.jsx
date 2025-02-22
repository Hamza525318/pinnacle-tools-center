"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../../../../../components/ui/dropdown-menu";

export default function ProductsHeader() {
  const [selectedFilter, setSelectedFilter] = useState("Category");
  const [selectedSort, setSelectedSort] = useState("Brand");

  return (
    <section className="w-full py-4 px-6 md:px-12 md:py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">
          Shop All
        </h1>

        {/* Filter & Sort Options */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <span>Filter: {selectedFilter}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedFilter("Size")}>
                Size
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Color")}>
                Color
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Category")}>
                Category
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <span>Sort by: {selectedSort}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedSort("Featured")}>
                Featured
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedSort("Newest")}>
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedSort("Price: Low to High")}
              >
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedSort("Price: High to Low")}
              >
                Price: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Product Count */}
          <span className="text-gray-700 font-medium">25 products</span>
        </div>
      </div>
    </section>
  );
}
