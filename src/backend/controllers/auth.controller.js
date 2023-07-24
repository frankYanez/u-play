import { UserModel } from "../models/user.model.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generateToken.js"


//Funcion para registrar
export const register = async (req,res)=>{
    try {
        //Del body extraemos los campos
        console.log(req.body);
    const {nombre,email,password} = req.body
    //Hasheamos la contraseña
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new UserModel({
        nombre,
        email,
        password: hashPassword
    })
    const userSaved = await newUser.save()
    
    const token = await generateToken(userSaved._id)

    res.cookie("token",token)
    res.send({userSaved,token})
    } catch (error) {
        console.log(error);
    }
    
  
}

export const login = async (req,res)=>{
    const {email,password} = req.body
    
    const user = await UserModel.findOne({email})

    if(!user){
        return res.status(404).json('Usuario o contraseña erroneos')
    }
    
    const passwordMatched = await bcrypt.compare(password,  user.password)
    
    if (!passwordMatched) {
        return res.json('Contraseña incorrecta')
    }

    const token = await generateToken(user._id)

    res.cookie('token',token)
    res.json({token,user})

}

export const logout = (req,res)=> {
    
    res.cookie('token', "")
    return res.sendStatus(200)
}

export const profile = async (req,res)=>{
    
    const userFound = await UserModel.findById(req.user.payload).populate('users')
    
   userFound ? res.json({
    id: userFound._id,
    nombre: userFound.nombre
   }) : res.send('User not found')
   
    
}

