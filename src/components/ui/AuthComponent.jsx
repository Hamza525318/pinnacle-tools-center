"use client";

import { useState } from "react";
import { X } from "lucide-react";
import useAuthStore from "../../app/store/authStore"; // Import Zustand store
import { Input } from "../../../components/ui/input";
import {Button} from "../../../components/ui/button"

export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const { login, register, loading, error } = useAuthStore();

  if (!isOpen) return null; // Prevent rendering when closed

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await register(formData.name, formData.email, formData.password);
    } else {
      await login(formData.email, formData.password);
    }
    onClose(); // Close modal on successful login/signup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative animate-fadeIn">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <h2 className="text-xl font-semibold text-center">{isSignUp ? "Register" : "Log in"}</h2>

        {/* Display API errors */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {isSignUp && (
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <Button type="submit" className="w-full bg-black text-white" disabled={loading}>
            {loading ? "Processing..." : isSignUp ? "Register" : "Log in"}
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          {isSignUp ? "Already have an account?" : "New customer?"}{" "}
          <button className="text-black font-semibold hover:underline" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log in here →" : "Create your account →"}
          </button>
        </p>
      </div>
    </div>
  );
}
