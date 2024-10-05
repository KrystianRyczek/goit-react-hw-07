

import { createSlice } from "@reduxjs/toolkit";
import { addContacts } from "./operation";


const initialState ={
    contacts: {
      items: [],
      isloading: false,
      error: null
    },
  }

export const apiAddContacts = createSlice({
    name: "addContacts",
    initialState,
   
    extraReducers: builder => {
        builder
            .addCase(addContacts.pending, (state,action) =>{
                state.contacts.isloading = true
            })
            .addCase(addContacts.fulfilled,  (state,action) => {
                state.contacts.isloading = false
                state.contacts.items = action.payload;
                state.contacts.error=null
            })
            .addCase(addContacts.rejected, (state,action) =>{
                state.contacts.isloading = false
                state.contacts.items = []
                state.contacts.error= action.payload;
            })
    }
})

export default apiAddContacts.reducer

