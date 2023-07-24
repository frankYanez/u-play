import { createSlice } from "@reduxjs/toolkit";

//Configuracion por defecto de un slice
export const userSlice = createSlice({
    //nombre del Slice
    name: 'users',
    //Estado inicial
    initialState: [],
    //Acciones
    
    reducers:{

    }
})

//exportamos el reducer para almacenarlo en el store
export default userSlice.reducer