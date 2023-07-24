import React, { useEffect, useState } from 'react'
import login from '../services/loginHandle'

const Login = ({user, setUser}) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    

    useEffect(()=>{
      const userJsonLogged = localStorage.getItem('userLogged')

      if (userJsonLogged) {
        const user = JSON.parse(userJsonLogged)
        setUser(user)
      }
    },[])


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const user = await login({email:userName,password:userPassword})

        user ? localStorage.setItem('userLogged', JSON.stringify(user)) : console.log('No hay usuario');
        setUser(user) 
        setUserName('')
        setUserPassword('')

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={userName}
            name='userName'
            placeholder='User name'
            onChange={(e)=> setUserName(e.target.value)}
            />
            <input type="password"
            value={userPassword}
            name='userName'
            onChange={(e)=> setUserPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login