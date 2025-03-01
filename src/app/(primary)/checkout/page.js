"use client";

import CheckoutForm from "./components/BillingForm";
import CartSummary from "./components/CartSummary";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Main Layout - Two Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Billing & Shipping Form */}
        <CheckoutForm />

        {/* Right Section - Cart Summary */}
        <CartSummary />
      </div>
    </div>
  );
}
