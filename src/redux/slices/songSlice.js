import { createSlice } from "@reduxjs/toolkit";





export const songSlice = createSlice({
    name: 'songs',
    initialState: [],
    reducers: {
        //Accion añadir recibe 2 parametros
        addSong: (state,action)=>{
            return [...state, action.payload]
        }
    }
})

//exportamos cada uno de los reducers de las acciones
export const {addSong} = songSlice.actions

export default songSlice.reducer