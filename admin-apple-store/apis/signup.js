import axiosClient from "./axiosClient";

export const postSignUpInfo = async () => {
  try {
    const response = await axiosClient.post("/api/users/register");
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    throw error;
  }
};
