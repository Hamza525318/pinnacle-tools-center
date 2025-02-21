"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

export default function AddToCartModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Sample Cart Items (Replace this with actual cart state from Redux or Context)
  const cartItems = [
    {
      id: 1,
      name: "Regular Fit T-shirt",
      price: 399,
      quantity: 1,
      color: "White",
      size: "M",
      image: "https://via.placeholder.com/80", // Replace with actual product image
    },
  ];

  // Calculate Order Total
  const orderValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = cartItems.length > 0 ? 149 : 0;
  const totalAmount = orderValue + deliveryCharge;

  return (
    <>
      {/* Cart Button */}
      <button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-black text-white p-4 z-[99999] rounded-full shadow-lg">
        <ShoppingCart size={24} />
      </button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 flex flex-col z-50"
        >
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-black">
            <X size={24} />
          </button>

          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

          {/* If Cart is Empty */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <ShoppingCart size={40} className="text-gray-400" />
              <p className="text-gray-500 mt-2">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex flex-col space-y-4 overflow-auto max-h-[60vh]">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        Quantity: {item.quantity} | Color: {item.color} | Size: {item.size}
                      </p>
                      <p className="font-semibold">Rs. {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-6">
                <div className="flex justify-between text-gray-700">
                  <span>Order Value</span>
                  <span>Rs. {orderValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span>Delivery</span>
                  <span>Rs. {deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="border-t my-3"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs. {totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-3 mt-4 rounded-md font-semibold hover:bg-gray-900 transition-all">
                Checkout
              </button>
            </>
          )}
        </motion.div>
      )}
    </>
  );
}
