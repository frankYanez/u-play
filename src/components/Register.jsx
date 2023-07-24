import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../api/auth'
import { useAuthContext } from '../context/userContext'

const Register = () => {
    const {register, handleSubmit, formState:{
      errors
    }} = useForm()
    const {verifySession} = useAuthContext()

    const onSubmit = handleSubmit( async (values) => {
      console.log(values);
      verifySession(values)
      
  });

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" {...register('nombre', {required: true})} />
            {
              errors.nombre && <p>Nombre is required</p>
            }
            <input type="email" {...register('email', {required: true})}/>
            <input type="password" {...register('password', {required: true})} />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register