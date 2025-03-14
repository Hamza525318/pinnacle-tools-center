"use client";

import { create } from "zustand";
import api from "../../lib/api";
import Cookies from "js-cookie";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"; // Default to localhost in development

console.log("BASE URL", BASE_URL);
const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Login function
  login: async (email, password) => {
    set({ loading: true, error: null });

    try {
      const { data } = await api.post(`${BASE_URL}/api/users/login`, { email, password });
      set({ user: data, isAuthenticated: true, loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: false });
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  // Register function
  register: async (name, email, password) => {
    set({ loading: true, error: null });

    try {
      const { data } = await api.post(`${BASE_URL}/api/users/register`, { name, email, password });
      set({ user: data, isAuthenticated: true, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log(error);
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  // Logout function
  logout: async () => {
    try {
      await api.post(`${BASE_URL}/api/users/logout`);
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  fetchUser: async () => {
    const token = Cookies.get('jwt');

    try {
      const { data } = await api.get(`${BASE_URL}/api/users/profile`);
      set({ user: data, isAuthenticated: true, loading: false });
    } catch (error) {
      console.log("Auth Fetch Error:", error.response?.data?.message || error.message);
      set({ loading: false });
    }
  },
}));

export default useAuthStore;
