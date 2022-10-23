
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";


const rootReducers = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
  });
  const persistConfig = {
    key: "contacts",
    storage,
    blacklist: ["search"],
  };

  export const store  = configureStore({
    reducer: persistReducer(persistConfig, rootReducers),
    middleware(getDefaultMiddleware) {
        return  getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
    }
  });

export const persistor = persistStore(store)

