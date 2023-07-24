import axios from "axios";


const url = 'http://localhost:3001/login'

const login = async (payload)=>{
    const data = await axios.post(url,payload)
    if(data)return data.data;
    return null
    
}


export default login;