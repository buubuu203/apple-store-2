import axiosClient from "./axiosClient";

export const getAllUsers = () => {
  return axiosClient.get(`/api/users`);
};

export const createUser = (data) => {
  return axiosClient.post(`/api/create/users`, data);
};

export const onLogin = (data) => {
  return axiosClient.post(`/api/login`, data);
};

export const getUserbyId = (id) => {
  return axiosClient.get(`/api/users/${id}`);
};

export const deleteUserbyId = (id) => {
  return axiosClient.delete(`/api/delete/users/${id}`);
};
export const updateUserbyId = (id, data) => {
  return axiosClient.put(`/api/update/users/${id}`, data);
};
