import axios from "axios";

// ✅ Correct way to access env variable in Vite
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const loginUser = async (data) => {
  return await axios.post(`${API_BASE}/users/login`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${API_BASE}/users/register`, data);
};
