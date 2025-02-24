"use client";
import { useRouter,useSearchParams } from "next/navigation";
import { useState } from "react";
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
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
