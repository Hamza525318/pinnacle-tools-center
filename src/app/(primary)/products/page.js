"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductsHeader from "./components/ProductHeader";
import PaginationComponent from "../../components/ui/Pagination";

const products = [
  {
    id: 1,
    name: "Power Tool Set",
    price: 12000,
    oldPrice: 15000,
    image: "/assets/gallery/power_tools_01.webp",
  },
  {
    id: 2,
    name: "CNC Router Bit",
    price: 18000,
    oldPrice: 20000,
    image: "/assets/gallery/router_bits_01.webp",
  },
  {
    id: 3,
    name: "V-Groove Blade",
    price: 9500,
    oldPrice: 12000,
    image: "/assets/gallery/router_bits_01.webp",
  },
  {
    id: 4,
    name: "Industrial Drill Machine",
    price: 25000,
    oldPrice: 28000,
    image: "/assets/gallery/router_bits_01.webp",
  },
];

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-white">
      <ProductsHeader />

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Component */}
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
