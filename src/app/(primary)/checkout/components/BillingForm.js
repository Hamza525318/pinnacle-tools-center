"use client";

import { useState } from "react";
import { Input } from "../../../../../components/ui/input";
import { Checkbox } from "../../../../../components/ui/checkbox";
import { Button } from "../../../../../components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // ✅ Import Phone Input Styles

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    address:"",
    termsAccepted: false,
  });

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="text-gray-600 text-sm font-medium">Full Name *</label>
        <Input
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="text-gray-600 text-sm font-medium">Email Address *</label>
        <Input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-600 text-sm font-medium">Shipping Address *</label>
        <Input
          type="text"
          placeholder="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="text-gray-600 text-sm font-medium">Phone Number *</label>
        <PhoneInput
          country={"us"} // Default country
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          inputStyle={{ width: "100%" }}
        />
      </div>

      {/* Country, City, State, ZIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Country" />
        <Input placeholder="City" />
        <Input placeholder="State" />
      </div>

      <div className="mt-4">
        <Input placeholder="ZIP Code" />
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-center mt-4">
        <Checkbox
          checked={formData.termsAccepted}
          onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked })}
        />
        <label className="ml-2 text-sm text-gray-600">
          I have read and agree to the Terms and Conditions.
        </label>
      </div>
    </div>
  );
}
