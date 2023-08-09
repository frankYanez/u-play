import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { loginUser, registerUser } from "../api/auth";
import { Axios } from "axios";
import { set } from "mongoose";
import { useNavigate } from "react-router-dom";
import { getStorage, removeStorage, setStorage } from "../services/sessionStorage";
import { getToRenderSongs } from "../api/getSongs";


export const AuthContext = createContext()
// const userContextd = useContext(AuthContext)


export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    const [songs, setSongs] = useState([])

    const refreshSongs = () => {
        getToRenderSongs().then(res => setSongs(res))
    }


    const navigate = useNavigate()

    const verifySession = async (values) => {
        const response = await registerUser(values)
        // setSession(values)
        console.log(response);
        setSession(response.data)
        setAuthenticated(true)
    }

    const signIn = async (user) => {
        try {
            const response = await loginUser(user)


            console.log(response);
            if (response.token) {
                setSession(response)
                setAuthenticated(true)
                setStorage(response)
                navigate('/')

            } else {
                navigate('/login')
            }
            // console.log(session);

        } catch (error) {
            console.log(error);
        }


    }

    const logOut = () => {
        setSession(null)
        setAuthenticated(false)
        removeStorage()
    }


    return (
        <AuthContext.Provider value={{ verifySession, logOut, signIn, setSession, setAuthenticated, authenticated, songs, refreshSongs }}>
            {children}

        </AuthContext.Provider>
    )
}

