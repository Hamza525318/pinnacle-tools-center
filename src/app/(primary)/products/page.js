"use client";

import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ProductsHeader from "./components/ProductHeader";
import PaginationComponent from "../../../components/ui/Pagination";
import useProductStore from "../../store/productStore";

export default function ProductsPage() {
  const { products, pagination, loading, getProducts } = useProductStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch products when the page loads or when pagination changes
    getProducts({ page: currentPage, limit: itemsPerPage });
  }, [currentPage, getProducts]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-white">
      <ProductsHeader />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={{
                  id: product._id,
                  name: product.title,
                  brands: product.brand.map(b => b.name || b),
                  image: product.images && product.images.length > 0 ? product.images[0] : 
                    "https://res.cloudinary.com/dduzbqxt7/image/upload/v1742037393/pinnacle-tools/staticassets/router-bits_1_qhuxoe.jpg"
                }} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No products found</p>
              </div>
            )}
          </div>

          {/* Pagination Component */}
          <PaginationComponent
            totalPages={pagination.pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}
