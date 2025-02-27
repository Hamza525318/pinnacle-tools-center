"use client"; // ✅ Required for Zustand in Next.js 13+ (Client Components)

import { create } from "zustand";

// ✅ Create Zustand Store
export const useCartStore = create((set, get) => ({
  cart: [],

  // ✅ Add item to cart
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    });
  },

  // ✅ Remove item from cart
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  // ✅ Update item quantity
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  // ✅ Clear the cart
  clearCart: () => set({ cart: [] }),
}));
