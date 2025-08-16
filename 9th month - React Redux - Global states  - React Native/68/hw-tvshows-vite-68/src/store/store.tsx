import { configureStore } from "@reduxjs/toolkit";
import tvReducer from './tv.slice'

const store = configureStore({
    reducer: {
        tv: tvReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store