
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-slice";
import {filterReducer} from "./filter/filter-slice";


const rootReducers = configureStore ({
  reducer:{
    contacts: contactsReducer,
    filter: filterReducer
  }
  });
  

export const store = rootReducers;

