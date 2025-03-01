"use client";

import { useCartStore } from "../../../store/cartStore";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";

export default function CartSummary() {
  const { cart } = useCartStore();

  // Calculate Prices
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.0; // Fixed shipping price
  const discount = 10.0; // Example discount amount
  const total = subtotal + shipping - discount;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Review Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md" />
              <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-gray-500 text-xs">{item.quantity}x ₹{item.price}</p>
              </div>
            </div>
            <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="mt-4">
        <label className="text-gray-600 text-sm font-medium">Discount Code</label>
        <div className="flex mt-1">
          <Input placeholder="Enter discount code" />
          <Button variant="outline" className="ml-2">Apply</Button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-6">
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm mt-2 text-red-500">
          <span>Discount</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>
        <div className="border-t my-3"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Pay Now Button */}
      <Button className="mt-6 w-full bg-blue-600 text-white">Pay Now</Button>
    </div>
  );
}
