"use client";
import { useState } from "react";
import { Eye } from "lucide-react";
import OrderDetailsModal from "./components/OrderDetailsModal";

const orders = [
  {
    id: "ORD123456",
    date: "2024-04-15",
    status: "Delivered",
    items: [
      { name: "Angle Grinder", quantity: 1 },
      { name: "Drilling Machine", quantity: 2 },
    ],
    address: "123, ABC Street, City, Country",
  },
  {
    id: "ORD654321",
    date: "2024-04-10",
    status: "Shipped",
    items: [
      { name: "Router Bits", quantity: 3 },
    ],
    address: "456, XYZ Street, City, Country",
  },
];

export default function MyOrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="p-4 pt-24 pb-16 min-h-[75vh] bg-gray-50 space-y-6">
    <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>

    <div className="grid gap-6 md:grid-cols-1">
      {orders.map((order) => (
        <div
          key={order.id}
          className="p-4 bg-white shadow-lg rounded-xl border hover:shadow-xl transition space-y-2"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Order ID: {order.id}</p>
              <p className="text-gray-500">Date: {order.date}</p>
              <p className="text-gray-500">Status: {order.status}</p>
            </div>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setSelectedOrder(order)}
            >
              <Eye className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>

    {selectedOrder && (
      <OrderDetailsModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    )}
  </div>
  );
}
