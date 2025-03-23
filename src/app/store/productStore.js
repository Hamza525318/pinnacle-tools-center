"use client";

import { create } from "zustand";
import api from "../../lib/api";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

const useProductStore = create((set) => ({
  products: [],
  product: null,
  loading: false,
  error: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10
  },

  // Fetch all products with pagination and filters
  getProducts: async (params = {}) => {
    set({ loading: true, error: null });
    
    try {
      // Build query string from params
      const queryParams = new URLSearchParams();
      
      // Add pagination params
      if (params.page) queryParams.append('page', params.page);
      if (params.limit) queryParams.append('limit', params.limit);
      
      // Add filter params
      if (params.category) queryParams.append('category', params.category);
      if (params.subcategory) queryParams.append('subcategory', params.subcategory);
      if (params.brand) queryParams.append('brand', params.brand);
      if (params.minPrice) queryParams.append('minPrice', params.minPrice);
      if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice);
      if (params.featured !== undefined) queryParams.append('featured', params.featured);
      
      const queryString = queryParams.toString();
      const url = `${BASE_URL}/api/products${queryString ? `?${queryString}` : ''}`;
      
      const { data } = await api.get(url);
      console.log("<<<---PRODUCTS--->>", data);
      
      set({ 
        products: data.products || [], 
        pagination: {
          total: data.pagination?.total || 0,
          page: data.pagination?.page || 1,
          pages: data.pagination?.pages || 1,
          limit: data.pagination?.limit || 10
        },
        loading: false 
      });
      
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ 
        loading: false, 
        error: error.response?.data?.message || "Failed to fetch products" 
      });
      throw error;
    }
  },

  // Fetch a single product by ID
  getProductById: async (id) => {
    set({ loading: true, error: null, product: null });
    
    try {
      const { data } = await api.get(`${BASE_URL}/api/products/${id}`);
      set({ product: data, loading: false });
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      set({ 
        loading: false, 
        error: error.response?.data?.message || "Failed to fetch product" 
      });
      throw error;
    }
  },

  // Search products
  searchProducts: async (query) => {
    set({ loading: true, error: null });
    
    try {
      const { data } = await api.get(`${BASE_URL}/api/products/search?q=${encodeURIComponent(query)}`);
      set({ products: data, loading: false });
      return data;
    } catch (error) {
      console.error("Error searching products:", error);
      set({ 
        loading: false, 
        error: error.response?.data?.message || "Failed to search products" 
      });
      throw error;
    }
  },

  // Get featured products
  getFeaturedProducts: async (limit = 8) => {
    set({ loading: true, error: null });
    
    try {
      const { data } = await api.get(`${BASE_URL}/api/products/featured?limit=${limit}`);
      set({ products: data, loading: false });
      return data;
    } catch (error) {
      console.error("Error fetching featured products:", error);
      set({ 
        loading: false, 
        error: error.response?.data?.message || "Failed to fetch featured products" 
      });
      throw error;
    }
  },

  // Clear product state
  clearProduct: () => set({ product: null }),

  // Clear products state
  clearProducts: () => set({ products: [] }),
}));

export default useProductStore;
