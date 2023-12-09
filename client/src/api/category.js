import axiosClient from "./axiosClient";


export const getAllNameCategories = async () => {

    return   axiosClient.get('/api/categories')

}

