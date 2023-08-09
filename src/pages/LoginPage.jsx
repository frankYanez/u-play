import React, { useEffect } from 'react'
import { useAuthContext } from '../context/userContext'
import Mockup from '../components/Mockup'
import Login from '../components/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    return (
        <div className='h-screen w-screen'>
            <video className='absolute w-screen  h-screen object-cover -z-10' autoPlay loop muted src="/videos/bg-mobile.mp4" />
            <section className='w-screen h-full flex gap-12 flex-col justify-center'>
                <h1 className='text-center text-5xl'>Login</h1>
                <Login />
                <div className='flex flex-col items-center'>
                    <h2>¿Aun no tienes cuenta?</h2>
                    <Link to='/register'>Registrate</Link>
                </div>
            </section>




        </div>
    )
}

export default LoginPage