"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  totalPages,
  currentPage,
  onPageChange,
}) {
  return (
    <div className="flex justify-center mt-8">
      <Pagination className="flex items-center space-x-2">
        <PaginationContent className="flex items-center space-x-2">
          {/* Previous Button */}
          <PaginationItem>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              Previous
            </Button>
          </PaginationItem>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <Button
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="lg"
                onClick={() => onPageChange(index + 1)}
                className={`px-4 py-2 rounded-md transition-all ${
                  currentPage === index + 1
                    ? "bg-[#003366] text-white font-semibold shadow-md"
                    : "border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </Button>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                onPageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2"
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
