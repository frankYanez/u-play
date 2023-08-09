import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../components/Register'

const RegisterPage = () => {
    return (

        <div className='h-screen w-screen'>
            <video className='absolute w-screen  h-screen object-cover -z-10' autoPlay loop muted src="/videos/bg-mobile.mp4" />
            <section className='w-screen h-full flex gap-12 flex-col justify-center'>
                <h1 className='text-center text-5xl'>Register</h1>
                <Register />
                <div className='flex flex-col items-center'>
                    <h2>¿Ya tienes cuenta?</h2>
                    <Link to='/login'>Inicia Sesion</Link>
                </div>
            </section>
        </div>
    )
}

export default RegisterPage