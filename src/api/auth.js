import axios from "axios";
import Cookies from "js-cookie";

const baseURL = 'http://localhost:3001'

export const registerUser = (user) => {

    const response = axios.post(`${baseURL}/register`, user)

    return response.data
}

export const loginUser = async (user) => {

    const response = await axios.post(`${baseURL}/login`, user)
    const token = Cookies.get('token')
    console.log(token);

    return response.data




}