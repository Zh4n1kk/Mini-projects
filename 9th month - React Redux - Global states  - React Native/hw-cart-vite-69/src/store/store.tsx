import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart.slice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store