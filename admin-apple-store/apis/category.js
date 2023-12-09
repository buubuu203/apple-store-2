import axiosClient from "./axiosClient";

export const getAllNameCategories = async () => {
  return axiosClient.get("/api/categories");
};
// export const createCategory = async () => {
//   return axiosClient.post("/api/create/category");
// };
export const createCategory = (data) => {
  return axiosClient.post(`/api/create/category`, data);
};
