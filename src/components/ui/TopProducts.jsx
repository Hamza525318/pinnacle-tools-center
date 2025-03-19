"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    label: "NEW",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 2500,
    oldPrice: 3000,
    stock: "1 Pack",
    rating: 4,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 2,
    label: "HOT",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 1500,
    oldPrice: null,
    stock: "3 Left",
    rating: 5,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 3,
    label: "",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 3200,
    oldPrice: 3900,
    stock: "250 g",
    rating: 5,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 4,
    label: "SALE",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 2500,
    oldPrice: null,
    stock: "Out Of Stock",
    rating: 4,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 5,
    label: "",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 1800,
    oldPrice: 2200,
    stock: "500",
    rating: 5,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 6,
    label: "BESTSELLER",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 1200,
    oldPrice: null,
    stock: "50",
    rating: 4,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 7,
    label: "BESTSELLER",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 1200,
    oldPrice: null,
    stock: "50",
    rating: 4,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
  {
    id: 8,
    label: "BESTSELLER",
    category: "Wood Working tools",
    title: "Router Bits",
    price: 1200,
    oldPrice: null,
    stock: "50",
    rating: 4,
    image:
      "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-[#f0f0f5] text-gray-900">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Top Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`}>
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300 bg-white hover:border-gray-300"
            >
              {/* Product Image */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4 space-y-2">
                {/* Category and Star Ratings */}
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500 capitalize">
                    {product.category}
                  </p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`text-yellow-500 text-base ${
                          index < product.rating ? "opacity-100" : "opacity-30"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-100"></div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h3>

                {/* Pricing and Stock */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      product.stock === "Out Of Stock"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {product.stock}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
