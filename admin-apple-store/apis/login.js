import axiosClient from "./axiosClient";

export const login = (username, password) => {
  return axiosClient.post("/api/login", { username, password });
};
