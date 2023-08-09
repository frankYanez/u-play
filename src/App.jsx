import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Songs from './components/Songs'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Register from './components/Register'
import { AuthProvider, useAuthContext } from './context/userContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import PrivateRoute from './components/PrivateRoute'
import { getStorage } from './services/sessionStorage'
import SongsPage from './pages/SongsPage'
import FormSongs from './components/FormSongs'




function App() {
  const { setSession, setAuthenticated } = useAuthContext()

  // console.log(authenticated);
  useEffect(() => {
    const userJsonLogged = getStorage()

    if (userJsonLogged) {
      //     const user = JSON.parse(userJsonLogged)
      //     console.log(user);
      setSession(userJsonLogged)
      setAuthenticated(true)
    }
  }, [])

  //Guardamos el estado inicial en una variable
  const stateUsers = useSelector(state => state.users)

  const stateSongs = useSelector(state => state.songs)





  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/createSong' element={<FormSongs />} />
        <Route path='/songs' element={<PrivateRoute><SongsPage /></PrivateRoute>} />
      </Routes>
    </div>


  )
}

export default App
