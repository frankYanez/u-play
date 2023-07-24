import { useContext, useState } from "react";
import { createContext } from "react";
import { registerUser } from "../api/auth";

export const AuthContext = createContext()
// const userContextd = useContext(AuthContext)

export const useAuthContext = ()=> useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)

   const verifySession = async (values) => {
        const response = await registerUser(values)
        console.log(response);
        setSession(values)
    }
    return (
        <AuthContext.Provider value={{ verifySession, session }}>
            {children}
        </AuthContext.Provider>
    )
}

