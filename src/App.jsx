import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import FormSongs from './components/FormSongs'
import { useDispatch, useSelector } from 'react-redux'
import Songs from './components/Songs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import { AuthProvider } from './context/userContext'



function App() {

  //Guardamos el estado inicial en una variable
  const stateUsers = useSelector(state => state.users)
  console.log(stateUsers);
  const stateSongs = useSelector(state => state.songs)
  console.log(stateSongs);
  const [user, setUser] = useState(null)

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
      {
        user ? <FormSongs/> : <Login user={user} setUser={setUser}/>
      }
     <Songs/>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
