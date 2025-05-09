import axios from "axios";
import { UserRegistration, User } from "../types/userTypes";
import { UserLogin } from "../types/userTypes";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const register = async (user: UserRegistration) => {
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

export const login = async (user: UserLogin) => {
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

export const findAllHobbies = async (token: string) => {
  try {
    const response = await api.get("/hobbies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const saveHobbies = async (user: User, token: string) => {
  try {
    const response = await api.post("/users/hobbies", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const getSimilarUsers = async (user: User, token: string) => {
  try {
    const response = await api.post("/users/similar", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
