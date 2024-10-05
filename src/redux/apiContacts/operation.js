import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const getContacts = createAsyncThunk(
    'getContacts/fetchGetContacts', 
    async() => {
        const resp = await axios.get('https://66fc376ec3a184a84d16797a.mockapi.io/phonebook/v1/contacts')
        return resp.data
})

export const addContacts = createAsyncThunk(
    'addContacts/fetchAddContacts', 
    async(newContact) => {
        const resp = await axios.post('https://66fc376ec3a184a84d16797a.mockapi.io/phonebook/v1/contacts',
            newContact
        )
        return resp.data
})

export const removeContacts = createAsyncThunk(
    'removeContacts/fetchRemoveContacts', 
    async(id) => {
        const resp = await axios.delete(`https://66fc376ec3a184a84d16797a.mockapi.io/phonebook/v1/contacts/${id}`)
        return resp.data
})
