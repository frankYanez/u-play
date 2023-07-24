import jwt from 'jsonwebtoken'

export const generateToken = async (payload) => {
    const token = jwt.sign({payload}, 'colo', {expiresIn: '30min'})
    
    return token
}

export const comparateToken = (jwtoken)=>{
    return jwt.verify(jwtoken, 'colo')
}

