"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../../../store/cartStore";
import { toast } from "sonner";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCartStore();
  const isItemInCart = cart.some((item) => item.id === product.id);

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

          {/* Brand Names */}
          <div className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Brands:</span>{" "}
            {product.brands.join(", ")}
          </div>
        </div>

        {/* ✅ Cart Icon at Right-Most End */}
        <div className="flex justify-end">
          <button
            className="p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            onClick={(e) => {
              e.preventDefault();

              if (!isItemInCart) {
                addToCart(product);
                toast.success("Item has been added to cart 🛒", {
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo clicked"),
                  },
                });
              }
            }}
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </Link>
  );
}
