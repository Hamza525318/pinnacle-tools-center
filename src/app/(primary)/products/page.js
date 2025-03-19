"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductsHeader from "./components/ProductHeader";
import PaginationComponent from "../../../components/ui/Pagination";

const products = [
  {
    id: 1,
    name: "Straight Router Bits",
    brands: ["Jon Bhandari", "Perfect", "Licon"],
    image:
      "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg",
  },
  {
    id: 2,
    name: "Straight Router Bits",
    brands: ["Jon Bhandari", "Perfect", "Licon"],
    image:
      "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg",
  },
  {
    id: 3,
    name: "Straight Router Bits",
    brands: ["Jon Bhandari", "Perfect", "Licon"],
    image:
      "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg",
  },
  {
    id: 4,
    name: "Straight Router Bits",
    brands: ["Jon Bhandari", "Perfect", "Licon"],
    image:
      "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg",
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
