import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"; // Default to localhost in development
const api = axios.create({
  baseURL: BASE_URL, // No need for localhost:5000, Next.js handles proxying
  withCredentials: true, // Ensures cookies are sent in every request
});

// Request Interceptor (for adding tokens if needed)
api.interceptors.request.use(
  (config) => {
    // You can attach authentication tokens here if using Authorization headers
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (for handling errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default api;
