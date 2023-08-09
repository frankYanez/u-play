import jwt from 'jsonwebtoken'
import { getStorage } from '../.././services/sessionStorage.js'




export const validateToken = (req, res, next) => {


    const token = req.cookies.token
    console.log(token);



    // if (!token) {
    //     return res.status(405).json({ messagge: 'No token' })

    // }

    // jwt.verify(token, 'colo', (err, user) => {

    //     if (err) return res.status(403).json({ message: 'Invalida Token' })

    // req.user = {
    //     id: '60b9b0b9e0b9c00f9c0b9b0b',
    //     nombre: 'colo'
    // };

    next()




}