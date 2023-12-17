import axiosClient from "./axiosClient";

export const createOrders = async (data) => {
  return axiosClient.post("/api/order/create", data);
};
export const getAllOrders = async () => {
  return axiosClient.get("/api/orders");
};
