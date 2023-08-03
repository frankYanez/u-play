import { useContext, useState } from "react";
import { createContext } from "react";
import { loginUser, registerUser } from "../api/auth";


export const AuthContext = createContext()
// const userContextd = useContext(AuthContext)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const verifySession = async (values) => {
        const response = await registerUser(values)
        setSession(values)
        setAuthenticated(true)
    }

    const signIn = async (user) => {
        try {
            const response = await loginUser(user)

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <AuthContext.Provider value={{ verifySession, signIn, setSession, session, authenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

