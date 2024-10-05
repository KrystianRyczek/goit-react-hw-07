import { configureStore } from "@reduxjs/toolkit";
import contactFilter from "./contacts/contactSlice";
import apiContactReducer from "./apiContacts/apiContactSlice";
import apiRemoveContactReducer from "./apiContacts/apiRemoveContactSlice";
import apiAddContactReducer from "./apiContacts/apiAddContactSlice";

export const contactStore = configureStore({
    reducer: {
              filter: contactFilter, 
              apiContact: apiContactReducer,
              apiRemove: apiRemoveContactReducer,
              apiAdd: apiAddContactReducer}

})