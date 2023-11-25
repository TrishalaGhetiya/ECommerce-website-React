import axios from "axios";

const baseURL = 'https://crudcrud.com/api/a3caa394ea1347dbbfa5176730f633fa/cart';

export const getCartData = async (email) => {
    return axios.get(`${baseURL}${email}`);
}

export const addDataToCart = async (email, item) => {
    return axios.post(`${baseURL}${email}`, item);
}

export const deleteDataFromCart = async (email, _id) => {
    return axios.delete(`${baseURL}${email}/${_id}`);
}