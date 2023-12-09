import axiosClient from "./axiosClient";

export const getAllProductByCategoryId = (id) => {
  return axiosClient.get(`/api/categories/${id}/products`);
};

export const getProductById = (id) => {
  return axiosClient.get(`/api/products/${id}`);
};

export const updateProductById = (id, dataUpdate) => {
  return axiosClient.put(`/api/update/product/${id}`, dataUpdate);
};
export const deleteProductById = (id) => {
  return axiosClient.delete(`/api/delete/product/${id}`);
};

export const createProduct = (data) => {
  return axiosClient.post(`/api/create/product`, data);
};
