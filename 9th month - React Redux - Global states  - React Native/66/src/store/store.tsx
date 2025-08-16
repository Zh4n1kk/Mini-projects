import { configureStore } from "@reduxjs/toolkit";
import pinCodeReducer from './slices/pinCode.slice'

const store = configureStore({
    reducer: {
        pincode: pinCodeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store