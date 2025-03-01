"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X, Trash, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

export default function AddToCartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  // ✅ Calculate Cart Count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // ✅ Calculate Order Total
  const orderValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = cart.length > 0 ? 149 : 0;
  const totalAmount = orderValue + deliveryCharge;

  return (
    <>
      {/* ✅ Floating Cart Button (Only Visible if Cart has Items) */}
      
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 z-[99999] rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <ShoppingCart size={24} />
          {/* ✅ Cart Count Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      {/* ✅ Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 flex flex-col z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>

          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

          {/* ✅ If Cart is Empty */}
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <ShoppingCart size={40} className="text-gray-400" />
              <p className="text-gray-500 mt-2">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* ✅ Cart Items */}
              <div className="flex flex-col space-y-4 overflow-auto max-h-[60vh]">
                {cart.map((item, ind) => (
                  <div
                    key={ind}
                    className="flex items-center space-x-4 border-b pb-4"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Quantity: {item.quantity}
                      </p>

                      {/* ✅ Quantity Buttons */}
                      <div className="flex items-center space-x-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-md border text-gray-600 hover:bg-gray-200 transition"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-md border text-gray-600 hover:bg-gray-200 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* ✅ Remove Item Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* ✅ Order Summary */}
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between text-gray-700 text-sm">
                  <span>Order Value</span>
                  <span>₹{orderValue.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-sm mt-2">
                  <span>Delivery Charge</span>
                  <span>₹{deliveryCharge}</span>
                </div>
                <div className="border-t my-3"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* ✅ Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-gray-800 text-white py-3 mt-4 rounded-md font-semibold hover:bg-gray-900 transition-all">
                  Checkout
                </button>
              </Link>
            </>
          )}
        </motion.div>
      )}
    </>
  );
}
