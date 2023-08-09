import axios from "axios"

const baseURL = 'http://localhost:3001'

export const getToRenderSongs = async () => {

    const response = await axios.get(`${baseURL}/songs`)

    return response.data
}

export const createASong = async (song) => {

    const response = await axios.post(`${baseURL}/songs`, { nombre: song })


    return response
}