"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
  } from "../../../components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Powertools",
    subcategories: [
      "Angle Grinders",
      "Drilling Machines",
      "Hammer Ring Machines",
      "Demolition Hammers",
      "Chain Saw Machines",
      "Cutter Machines",
    ],
  },
  {
    name: "Cordless Tools",
    subcategories: [],
  },
  {
    name: "Handtools",
    subcategories: [
      "Spanners",
      "Screw Drivers",
      "Pipe Wrenches",
      "Allen Keys",
      "Starbits",
    ],
  },
  {
    name: "Wood Working Tools",
    subcategories: [
      "Router Bits",
      "V Groove Blades",
      "CNC Bits",
      "Router Machines",
    ],
  },
  {
    name: "Pneumatic Tools",
    subcategories: [
      "Impact Wrench",
      "Nut Revitors",
      "Pop Revitors",
      "Spray Gun",
    ],
  },
];

export default function ProductCategoriesDropdown() {
  const [openCategory, setOpenCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSubMenu = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center px-4 py-2">
            <span className="text-gray-700 font-medium">Categories</span>
            <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60 bg-white border shadow-lg rounded-lg p-2 space-y-1 z-[9999]">
            {categories.map((category, idx) => (
              category.subcategories.length > 0 ? (
                <DropdownMenuSub key={idx}>
                  <DropdownMenuSubTrigger className="flex justify-between items-center px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                    <span>{category.name}</span>
                    {/* <ChevronRight className="h-4 w-4 text-gray-500" /> */}
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent className="bg-white shadow-lg border rounded-lg p-2 space-y-1 z-[9999]">
                    {category.subcategories.map((sub, subIdx) => (
                      <DropdownMenuItem
                        key={subIdx}
                        className="px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      >
                        {sub}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem
                  key={idx}
                  className="px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                >
                  {category.name}
                </DropdownMenuItem>
              )
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Dropdown */}
      <div className="w-full md:hidden space-y-2">
        <div
          className="flex justify-between items-center text-white"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-white font-medium">Categories</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isDropdownOpen && (
          <div className="space-y-2 bg-gray-50 rounded-md">
            {categories.map((category, idx) => (
              <div key={idx}>
                <div
                  className="flex justify-between items-center px-4 py-3 rounded-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => toggleSubMenu(category.name)}
                >
                  <span className="text-gray-800 font-medium">{category.name}</span>
                  {category.subcategories.length > 0 && (
                    <ChevronDown
                      className={`h-5 w-5 text-gray-800 transition-transform ${
                        openCategory === category.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {openCategory === category.name && category.subcategories.length > 0 && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    {category.subcategories.map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer text-gray-600"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
