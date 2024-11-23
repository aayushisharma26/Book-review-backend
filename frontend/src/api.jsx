import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add token to the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
