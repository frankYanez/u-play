import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import songReducer from './slices/songSlice'


//Creamos el Store o la tienda donde estaran tdos los estados
const store = configureStore({
    reducer:{
        
        //Reducer #1 creado en la carpeta SLICES(este seria un slice)
        users: userReducer,
        //Reducer #2 
        songs: songReducer
    }
})

export default store