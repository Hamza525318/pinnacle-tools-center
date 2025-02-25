"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image Component
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import QuantitySelector from "./components/QuantitySelector";
import AddToCartButton from "./components/AddToCartButton";

const ProductPage = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const [quantity, setQuantity] = useState(1);

  const product = {
    id,
    title: "Router Bits",
    price: 25.0,
    oldPrice: 30.0,
    discount: 17,
    description:
      "Experience comfort and style with our Ribbed Modal T-shirt, designed for everyday wear.",
    imageUrl: "/path/to/product-image.jpg",
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
            oldPrice={product.oldPrice ? `₹${product.oldPrice.toLocaleString("en-IN")}` : null}
            discount={product.discount}
            description={product.description}
          />

          {/* Quantity Selector */}
          <div className="px-4">
            <QuantitySelector onQuantityChange={setQuantity} />

            {/* Add to Cart Button */}
            <AddToCartButton
              price={`₹${(product.price * quantity).toLocaleString("en-IN")}`}
              onClick={() => alert(`Added ${quantity} to cart`)}
            />

            {/* ✅ Guaranteed Safe Checkout Section with Optimized <Image> */}
            <div className="mt-6">
              <p className="text-gray-600 font-medium mb-2">Guaranteed Safe Checkout</p>
              <div className="flex items-center gap-4">
                <Image 
                  src="https://res.cloudinary.com/dduzbqxt7/image/upload/v1740446190/pinnacle-tools/logos/visa_e6mfrg.png" 
                  alt="Visa" 
                  width={40} // ✅ Set fixed width
                  height={24} // ✅ Set fixed height
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
    </div>
  );
};

export default ProductPage;
