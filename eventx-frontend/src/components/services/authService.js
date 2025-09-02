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
export const getEventService = (id) => api.get(`/events/${id}`);
// Book ticket
export const bookTicketService = (payload) => api.post("/tickets/book", payload);

// Get logged-in user tickets
export const myTicketsService = () => api.get("/tickets/my");

// Get single ticket details
export const getTicketService = (id) => api.get(`/tickets/${id}`);

// Admin: Check-in ticket
export const checkInService = (ticketId) =>
  api.post("/tickets/check-in", { ticketId });
export default api;