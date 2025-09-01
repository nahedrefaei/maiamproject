import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1"; // replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const loginService = (credentials) => api.post("/auth/login", credentials);
export const registerService = (data) => api.post("/auth/register", data);
export const logoutService = () => api.post("/auth/logout");
export const meService = () => api.get("/auth/me");

export const createEventService = (payload) => api.post("/events", payload);
export const publishEventService = (id) => api.post(`/events/${id}/publish`);
export const updateEventService = (id, payload) => api.put(`/events/${id}`, payload);
export const deleteEventService = (id) => api.delete(`/events/${id}`);
export const listEventsService = (params) => api.get("/events", { params });


export default api;