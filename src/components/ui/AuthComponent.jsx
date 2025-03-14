"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import useAuthStore from "../../app/store/authStore";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";


export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");
  const { login, register, loading } = useAuthStore();

  if (!isOpen) return null;

  const validateForm = () => {
    if (isSignUp && (formData.name.length < 3 || formData.name.length > 100)) {
      setFormError("Name must be between 3 and 100 characters.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    if (formData.password.length < 8 || formData.password.length > 15) {
      setFormError("Password must be between 8 and 15 characters.");
      return false;
    }
    if (isSignUp && formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      if (isSignUp) {
        await register(formData.name, formData.email, formData.password);
        toast.success("Sign Up Success 😃");
      } else {
        await login(formData.email, formData.password);
        toast.success("Logged in successfully");
      }
      onClose(); // Close modal on successful login/signup
    } catch (error) {
      console.error("ERROR:", error);
  
      // Check if it's an instance of Error and access the message
      const serverError =
        (error instanceof Error && error.message) ||
        "An error occurred. Please try again.";
      
      setFormError(serverError); // Display the error message within the form
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold text-center">
          {isSignUp ? "Register" : "Log in"}
        </h2>

        {/* Display Form Error */}
        {formError && (
          <p className="text-red-500 text-sm text-center mt-2">{formError}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {isSignUp && (
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <span
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </span>
          </div>

          {isSignUp && (
            <Input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          )}

          <Button type="submit" className="w-full bg-black text-white" disabled={loading}>
            {loading ? "Processing..." : isSignUp ? "Register" : "Log in"}
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          {isSignUp ? "Already have an account?" : "New customer?"}{" "}
          <button
            className="text-black font-semibold hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log in here →" : "Create your account →"}
          </button>
        </p>
      </div>
    </div>
  );
}
