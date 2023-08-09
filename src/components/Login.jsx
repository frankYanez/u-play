import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../context/userContext'
import { json } from 'react-router-dom'
import Mockup from './Mockup'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuthContext()


  const onSubmit = handleSubmit(async (data) => {
    signIn(data)
    localStorage.setItem('userLogged', JSON.stringify(data))
  })




  // const handleSubmit = async (e)=>{
  //     e.preventDefault()
  //     const user = await login({email:userName,password:userPassword})

  //     user ? localStorage.setItem('userLogged', JSON.stringify(user)) : console.log('No hay usuario');
  //     setUser(user) 
  //     setUserName('')
  //     setUserPassword('')

  // }
  return (
    <div >
      <form className='flex flex-col items-center px-12 gap-6' onSubmit={onSubmit}>
        <input type="text"
          placeholder='User name'

          {...register('email', { required: true })}
        />
        <input type="password"
          placeholder='Password'
          {...register('password', { required: true })}
        />
        <button className='border border-white rounded-2xl  px-12 '>Login</button>


      </form>

    </div>
  )
}

export default Login