import axios from "axios";

const baseURL = 'http://localhost:3001'

export const registerUser = (user) => {
    console.log(user);
    axios.post(`${baseURL}/register`, user)
}