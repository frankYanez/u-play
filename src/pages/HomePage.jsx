import React, { useEffect } from 'react'
import { useAuthContext } from '../context/userContext'
import Mockup from '../components/Mockup'

const HomePage = () => {
    const { setSession } = useAuthContext()
    useEffect(() => {
        const userJsonLogged = localStorage.getItem('userLogged')

        if (userJsonLogged) {
            const user = JSON.parse(userJsonLogged)
            setSession(user)
        }
    }, [])
    return (
        <div className='relative' >
            <video className='absolute object-cover w-full  -z-10' autoPlay loop muted src="/videos/bg-video-desktop.mp4" />
            <div className='bg-black bg-opacity-50 h-screen w-screen absolute z-10 ' />

            <aside className='flex items-center justify-between absolute w-screen h-screen z-20'>

                <section className='w-full bg-black flex flex-col justify-center items-center'>
                    <img className='w-3/6' src="/images/logo-uplay.png" alt="" />
                    <h1 className='text-white text-5xl text-center'>El complemento que te hacia falta para disfrutar tu noche</h1>
                    <p>Tus canciones al alcance de un click</p>
                </section>
                <section className='w-full h-screen flex justify-center items-end'>
                    <Mockup />
                </section>

            </aside>
        </div >
    )
}

export default HomePage