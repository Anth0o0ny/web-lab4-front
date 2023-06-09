//  STORE

import {configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import userReducer from "./userSlice";
import hitReducer from "./hitSlice";
import {createStateSyncMiddleware} from "redux-state-sync";


const rootReducer = combineReducers({
    user: userReducer,
    hit: hitReducer,
})

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [createStateSyncMiddleware()]
});

export const persistor = persistStore(store);
export default store;
