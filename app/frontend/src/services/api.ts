import axios, { AxiosResponse } from "axios";
import { UserData } from "../pages/register/Register";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const register = async (user: UserData) => {
  try {
    const response = await api.post("/auth/register", user);
    return { ok: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "An error occurred";
      return { ok: false, error: message };
    } else {
      return { ok: false, error: "An unexpected error occurred" };
    }
  }
};
