import React from 'react'
import { useAuthContext } from '../context/userContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { authenticated } = useAuthContext()
    return (

        authenticated ? children : <Navigate to='/login' />

    )
}

export default PrivateRoute