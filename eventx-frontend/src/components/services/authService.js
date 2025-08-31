import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1"; // replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const loginService = (credentials) => api.post("/auth/login", credentials);
export const registerService = (data) => api.post("/auth/register", data);
export const logoutService = () => api.post("/auth/logout");
export const meService = () => api.get("/auth/me");

export default api;