import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:"",
}


export const contactFilterSlice = createSlice({
    name: "phoneBook",
    initialState,
    reducers:{
        filtreatingContacts: (state, action)=>{
            state.value = action.payload

        },
    },
    
})

export const { filtreatingContacts } = contactFilterSlice.actions

export default contactFilterSlice.reducer

