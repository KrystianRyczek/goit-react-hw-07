import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { removeContacts, } from "../redux/apiContacts/operation";
import { createSelector } from "@reduxjs/toolkit";

export const usePhoneBook=()=>{
    const dispatch = useDispatch()
    const remove = (id) =>{
      dispatch(removeContacts(id))   
    }

    const selectFriends =(state)=>state.apiContact.contacts.items
    const selectFilter = (state)=>state.filter.value

    const selectItemsByFilter = createSelector(
      [selectFriends, selectFilter],(friends, filter) => {
        const searchingActive = filter ? true : false

        if(filter==""){
          return [friends, searchingActive]
        }

        const filtredContacts = friends.filter((friend) => 
          friend.name.toLowerCase().includes(filter.toLowerCase()))
            return [filtredContacts, searchingActive]

      })

    const[friends, searchingActive] = useSelector(selectItemsByFilter)
    return{remove, friends, searchingActive}
}