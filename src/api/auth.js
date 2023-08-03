import axios from "axios";

const baseURL = 'http://localhost:3001'

export const registerUser = (user) => {

    const response = axios.post(`${baseURL}/register`, user)
    console.log(response);
}

export const loginUser = async (user) => {
    console.log(user);
    const { data } = await axios.post(`${baseURL}/login`, user)
    console.log(data);
}