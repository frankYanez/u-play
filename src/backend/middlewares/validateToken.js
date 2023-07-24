import jwt from 'jsonwebtoken'
export const validateToken = (req,res,next)=>{
    const {token} = req.cookies

    
    if(!token){
        return res.status(405).json({messagge: 'No token'})
        
    }

    jwt.verify(token, 'colo',(err,user)=>{
       
        if(err) return res.status(403).json({message: 'Invalida Token'})

        req.user = user;
        
        next()

    })

    
}