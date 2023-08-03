import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import FormSongs from './components/FormSongs'
import { useDispatch, useSelector } from 'react-redux'
import Songs from './components/Songs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import { AuthProvider, useAuthContext } from './context/userContext'
import HomePage from './pages/HomePage'



function App() {

  //Guardamos el estado inicial en una variable
  const stateUsers = useSelector(state => state.users)

  const stateSongs = useSelector(state => state.songs)

  const { session } = useAuthContext()

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
