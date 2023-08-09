import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/userContext'

const Navbar = () => {
    const { authenticated, logOut } = useAuthContext()


    return (
        <nav className='flex w-full z-30 px-6 items-center justify-between absolute'>
            <div>
                <Link to='/'><img className='w-12 bg-transparent' src="/images/logo-uplay.png" alt="" /></Link>
            </div>

            <div className='flex gap-6'>
                <Link to='/songs'>Songs</Link>
                <Link to='/features'>Features</Link>
                {
                    authenticated ? <p onClick={() => {
                        logOut()
                    }} >Logout</p> : <Link to='/register'>Login</Link>
                }

            </div>
        </nav>
    )
}

export default Navbar