"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import QuantitySelector from "./components/QuantitySelector";
import AddToCartButton from "./components/AddToCartButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductPage = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const [quantity, setQuantity] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("Jon Bhandari");
  const [selectedShank, setSelectedShank] = useState("1/4 Inch");
  const [selectedMM, setSelectedMM] = useState("6mm");

  const product = {
    id,
    title: "Straight Router Bits",
    price: 2500.0,
    oldPrice: 3000.0,
    discount: 17,
    description:
      "Straight Router Bits are essential for woodworking and CNC projects. Designed for smooth, precise cuts in a variety of materials, these router bits deliver high efficiency and durability.",
    imageUrl:
      "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742383320/pinnacle-tools/staticassets/ebd812b3-5306-4e64-b048-4b36a8f86272.png",
    brands: ["Jon Bhandari", "Perfect", "Licon"],
    shankSizes: ["1/4 Inch", "1/2 Inch", "3/4 Inch"],
    mmSizes: ["6mm", "8mm", "10mm", "12mm"],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <ProductImage imageUrl={product.imageUrl} altText={product.title} />

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <ProductInfo
            title={product.title}
            price={`₹${product.price.toLocaleString("en-IN")}`}
            oldPrice={
              product.oldPrice
                ? `₹${product.oldPrice.toLocaleString("en-IN")}`
                : null
            }
            discount={product.discount}
            description={product.description}
          />

          {/* Selection Dropdowns */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Select Brand */}
            <div className="w-full">
              <span className="block text-gray-700 font-semibold mb-1">
                Select Brand
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
                  {selectedBrand}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-white shadow-md">
                  {product.brands.map((brand, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      {brand}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Select Shank Size */}
            <div className="w-full">
              <span className="block text-gray-700 font-semibold mb-1">
                Select Shank
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
                  {selectedShank}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-white shadow-md">
                  {product.shankSizes.map((shank, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setSelectedShank(shank)}
                    >
                      {shank}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Select MM Size */}
            <div className="w-full">
              <span className="block text-gray-700 font-semibold mb-1">
                Select MM
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
                  {selectedMM}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-white shadow-md">
                  {product.mmSizes.map((mm, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setSelectedMM(mm)}
                    >
                      {mm}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <QuantitySelector onQuantityChange={setQuantity} />
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <AddToCartButton
              price={`₹${(product.price * quantity).toLocaleString("en-IN")}`}
              onClick={() => alert(`Added ${quantity} to cart`)}
            />
          </div>

          {/* ✅ Guaranteed Safe Checkout Section */}
          <div className="mt-6">
            <p className="text-gray-600 font-medium mb-2">
              Guaranteed Safe Checkout
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1740446190/pinnacle-tools/logos/visa_e6mfrg.png"
                alt="Visa"
                width={40}
                height={24}
                className="object-contain"
              />
              <Image
                src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1740446261/pinnacle-tools/logos/master-card_lgblsu.png"
                alt="Mastercard"
                width={40}
                height={24}
                className="object-contain"
              />
              <Image
                src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1740447815/pinnacle-tools/logos/upi-logo_abgvnt.webp"
                alt="UPI"
                width={40}
                height={24}
                className="object-contain"
              />
              <Image
                src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1740446273/pinnacle-tools/logos/mobile-banking_no8e6l.png"
                alt="Mobile Banking"
                width={40}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
