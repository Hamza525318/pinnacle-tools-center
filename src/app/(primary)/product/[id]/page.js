"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import QuantitySelector from "./components/QuantitySelector";
import AddToCartButton from "./components/AddToCartButton";
import useProductStore from "../../../store/productStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductPage = () => {
  const params = useParams();
  const id = params.id;

  const { product, loading, getProductById } = useProductStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedMM, setSelectedMM] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id);
    }

    // Cleanup function
    return () => {
      useProductStore.getState().clearProduct();
    };
  }, [id, getProductById]);

  // Handle loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h2>
          <p className="text-gray-500 mt-2">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const subcategory = product?.subcategory?.name?.toLowerCase();

  // Extract unique values from specifications array
  const specifications = Array.isArray(product.specifications)
    ? product.specifications
    : Object.values(product.specifications || {});
  
  const getUniqueOptions = (key) =>
    [...new Set(specifications.map((spec) => spec[key]).filter(Boolean))];
  
  // Dynamic options
  const brandOptions = product.brand
    ? product.brand.map((b) => (typeof b === "object" ? b.name : b))
    : [];
  
  const mmOptions = getUniqueOptions("mm");
  const lengthOptions = getUniqueOptions("length");
  const shankOptions = getUniqueOptions("shank");

  // Calculate price based on specifications or use the base price
  const priceFromSpec = specifications.price || product.price;
  const discountedPrice = product.discount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  console.log("SPECIFICATIONS", specifications);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <ProductImage
          imageUrl={
            product.images && product.images.length > 0
              ? product.images[0]
              : "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg"
          }
          altText={product.title}
        />

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <ProductInfo
            title={product.title}
            price={`₹${(priceFromSpec || discountedPrice).toLocaleString(
              "en-IN"
            )}`}
            oldPrice={
              product.discount
                ? `₹${product.price.toLocaleString("en-IN")}`
                : null
            }
            discount={product.discount}
            description={product.description}
          />

          {/* Dynamic Dropdowns */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
          {(subcategory === "router bits" || subcategory === "cnc bits") && brandOptions.length > 0 && (
    <div className="w-full">
      <span className="block text-gray-700 font-semibold mb-1">Select Brand</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
          {selectedBrand || "Select Brand"}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-white shadow-md">
          {brandOptions.map((brand, index) => (
            <DropdownMenuItem key={index} onClick={() => setSelectedBrand(brand)}>
              {brand}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )}

{subcategory === "router bits" && shankOptions.length > 0 && (
    <div className="w-full">
      <span className="block text-gray-700 font-semibold mb-1">Select Shank</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
          {selectedLength || "Select Shank"}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-white shadow-md">
          {shankOptions.map((shank, index) => (
            <DropdownMenuItem key={index} onClick={() => setSelectedLength(shank)}>
              {shank}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )}

  {/* Length Dropdown (Only for CNC Bits) */}
  {subcategory === "cnc bits" && lengthOptions.length > 0 && (
    <div className="w-full">
      <span className="block text-gray-700 font-semibold mb-1">Select Length</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
          {selectedLength || "Select Length"}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-white shadow-md">
          {lengthOptions.map((length, index) => (
            <DropdownMenuItem key={index} onClick={() => setSelectedLength(length)}>
              {length} mm
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )}
 {mmOptions.length > 0 && (
    <div className="w-full">
      <span className="block text-gray-700 font-semibold mb-1">Select MM</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full px-4 py-2 border rounded-md text-gray-600">
          {selectedMM || "Select MM"}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-white shadow-md">
          {mmOptions.map((mm, index) => (
            <DropdownMenuItem key={index} onClick={() => setSelectedMM(mm)}>
              {mm} mm
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )}
          </div>

          {/* Stock Status */}
          <div className="my-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
              ${
                product.stock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.stock ? `In Stock: ${product.stock}` : "Out of Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <QuantitySelector onQuantityChange={setQuantity} />
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <AddToCartButton
              price={`₹${(
                (priceFromSpec || discountedPrice) * quantity
              ).toLocaleString("en-IN")}`}
              onClick={() => alert(`Added ${quantity} to cart`)}
            />
          </div>

          {/* Guaranteed Safe Checkout Section */}
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
