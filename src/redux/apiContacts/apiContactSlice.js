
import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./operation";


const initialState ={
    contacts: {
      items: [],
      isloading: false,
      error: null
    },
  }

export const apiContactSlice = createSlice({
    name: "getContacts",
    initialState,
   
    extraReducers: builder => {
        builder
            .addCase(getContacts.pending, (state,action) =>{
                state.contacts.isloading = true
            })
            .addCase(getContacts.fulfilled,  (state,action) => {
                state.contacts.isloading = false
                state.contacts.items = action.payload;
                state.contacts.error=null
            })
            .addCase(getContacts.rejected, (state,action) =>{
                state.contacts.isloading = false
                state.contacts.items = []
                state.contacts.error= action.payload;
            })
    }
})

export default apiContactSlice.reducer

