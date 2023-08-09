import React, { useEffect } from 'react'
import { useAuthContext } from '../context/userContext'

const HomePage = () => {
    // const { setSession } = useAuthContext()

    return (
        <div className='relative' >
            <video className='absolute w-screen  h-screen object-cover -z-10' autoPlay loop muted src="/videos/bg-mobile.mp4" />


            <aside className='flex flex-col py-32 items-center justify-between absolute w-screen h-screen z-20'>

                <section className='w-full flex flex-col justify-center items-center'>
                    <img className='w-3/6' src="/images/logo-uplay.png" alt="" />
                    <h1 className='text-white text-xl text-center'>El complemento que te hacia falta para disfrutar tu noche</h1>
                    <p>Tus canciones al alcance de un click</p>
                </section>
                <section className='w-full h-screen flex justify-center items-end'>

                </section>

            </aside>
        </div >
    )
}

export default HomePage