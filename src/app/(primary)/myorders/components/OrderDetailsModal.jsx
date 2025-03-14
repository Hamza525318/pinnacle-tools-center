"use client";

import { X } from "lucide-react";

export default function OrderDetailsModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[95%] md:w-[600px] max-h-[90vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-gray-100 p-1 rounded-full hover:bg-gray-200"
          onClick={onClose}
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Order ID: {order.id}</h2>
        <p className="text-gray-500">Order date: {order.date}</p>

        {/* Order Items */}
        <div className="mt-6 space-y-4">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div>
                <p className="text-gray-800 font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold text-gray-800">$ {item.price}</p>
            </div>
          ))}
        </div>

        {/* Payment and Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Payment</h3>
            <p className="text-gray-500">Visa **56</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Delivery Address</h3>
            <p className="text-gray-500">{order.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
