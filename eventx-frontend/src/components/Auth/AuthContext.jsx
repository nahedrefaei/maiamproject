// src/components/Auth/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginService,
  registerService,
  logoutService,
  meService,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token"); // 👈 check localStorage
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await meService(token); // 👈 pass token
        setUser(data.user);
      } catch (err) {
        console.error("Auth error:", err);
        setUser(null);
        localStorage.removeItem("token"); // clear broken token
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    const { data } = await loginService(credentials);
    localStorage.setItem("token", data.token);
    setUser(data.user);
    return data.user;
  };

  const register = async (payload) => {
    const { data } = await registerService(payload);
    localStorage.setItem("token", data.token); // save token too
    setUser(data.user);
    return data.user;
  };


  const logout = async () => {
    try {
      await logoutService();
    } catch (e) {
      console.warn("Logout request failed, clearing local session anyway");
    }
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
    {loading ? (
      <div>Loading...</div> // or a spinner
    ) : (
      children
    )}
  </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
