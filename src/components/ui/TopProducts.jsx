'use client';

import Image from 'next/image';

const products = [
  { id: 1, label: "NEW", category: "Chocos", title: "Router Bits", price: 25, oldPrice: 30, stock: "1 Pack", rating: 4, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 2, label: "HOT", category: "Juice", title: "Router Bits", price: 15, oldPrice: null, stock: "3 Left", rating: 5, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 3, label: "", category: "Juice", title: "Router Bits", price: 32, oldPrice: 39, stock: "250 g", rating: 5, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 4, label: "SALE", category: "Fruits", title: "Router Bits", price: 25, oldPrice: null, stock: "Out Of Stock", rating: 4, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 5, label: "", category: "Snacks", title: "Router Bits", price: 18, oldPrice: 22, stock: "500 g", rating: 5, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 6, label: "BESTSELLER", category: "Tea", title: "Router Bits", price: 12, oldPrice: null, stock: "50 Bags", rating: 4, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 7, label: "", category: "Bakery", title: "Router Bits", price: 20, oldPrice: 24, stock: "6 Pieces", rating: 5, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" },
  { id: 8, label: "LIMITED", category: "Energy Drinks", title: "Router Bits", price: 28, oldPrice: 35, stock: "2 Left", rating: 4, image: "https://vijayshreetools.com/assets/images/products/router_bits/beading_flat_bits/beading_flat_bits_01.jpg" }
];

export default function TopProducts() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Top Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            
            {/* Product Image */}
            <div className="relative">
              <img src={product.image} alt={product.title} className="rounded-md w-56 object-cover md:64" />
            </div>
            
            {/* Product Details */}
            <div className="mt-4">
              {/* Category and Star Ratings (Same row on desktop, separate on mobile) */}
              <div className='w-full h-[2px] bg-gray-100'></div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <p className="text-xs text-gray-500">{product.category}</p>
                <div className="flex mt-1 sm:mt-0">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className={`text-yellow-500 text-base ${index < product.rating ? 'opacity-100' : 'opacity-30'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold mt-1">{product.title}</h3>

              {/* Pricing and Stock */}
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  {product.oldPrice && <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>}
                </div>
                <p className={`text-sm ${product.stock === 'Out Of Stock' ? 'text-red-500' : 'text-gray-600'}`}>{product.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}