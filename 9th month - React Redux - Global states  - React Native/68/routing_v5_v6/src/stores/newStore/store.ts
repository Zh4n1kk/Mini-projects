import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from './burgerReducer'

const store = configureStore({
    reducer: {
        burger: burgerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch =  typeof store.dispatch

export default store