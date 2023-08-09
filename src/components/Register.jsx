import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../api/auth'
import { useAuthContext } from '../context/userContext'

const Register = () => {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  const { verifySession } = useAuthContext()

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    verifySession(values)

  });

  return (
    <div>
      <form className='flex flex-col items-center px-12 gap-6' onSubmit={onSubmit}>
        <input type="text" placeholder='Nombre' {...register('nombre', { required: true })} />
        {
          errors.nombre && <p>Nombre is required</p>
        }
        <input type="email" placeholder='Email' {...register('email', { required: true })} />
        <input type="password" placeholder='Password' {...register('password', { required: true })} />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register