//https://66fc376ec3a184a84d16797a.mockapi.io/phonebook/v1/contacts
// fetchContacts — pobieranie tablicy kontaktów (metoda GET) przez żądanie. Podstawowym typem akcji będzie ciąg "contacts/fetchAll".
// addContact — dodanie nowego kontaktu (metoda POST). Podstawowym typem akcji będzie ciąg "contacts/addContact".
// deleteContact — usunięcie kontaktu według ID (metoda DELETE). Podstawowym typem akcji będzie ciąg "contacts/deleteContact".

import { createSlice } from "@reduxjs/toolkit";
import { removeContacts } from "./operation";

const initialState ={
    contacts: {
      items: [],
      isloading: false,
      error: null
    },
  }

export const apiRemoveContactSlice = createSlice({
    name: "removeContacts",
    initialState,
   
    extraReducers: builder => {
        builder
            .addCase(removeContacts.pending, (state,action) =>{
                state.contacts.isloading = true
            })
            .addCase(removeContacts.fulfilled,  (state,action) => {
                state.contacts.isloading = false
                state.contacts.items = action.payload;
                state.contacts.error=null
            })
            .addCase(removeContacts.rejected, (state,action) =>{
                state.contacts.isloading = false
                state.contacts.items = []
                state.contacts.error= action.payload;
            })
    }
})

export default apiRemoveContactSlice.reducer

