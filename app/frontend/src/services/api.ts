import axios, { AxiosResponse } from "axios";
import { UserData } from "../types/userTypes";
import { LoginData } from "../types/userTypes";

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
      const messageError = error.response?.data?.error || "An error occurred";
      return { ok: false, error: messageError };
    } else {
      return { ok: false, error: "An unexpected error occurred" };
    }
  }
};

export const login = async (user: LoginData) => {
  try {
    const response = await api.post("/auth/login", user);
    return { ok: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const messageError = error.response?.data?.error || "An error occurred";
      return { ok: false, error: messageError };
    } else {
      return { ok: false, error: "An unexpected error occurred" };
    }
  }
};
