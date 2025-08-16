import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from './ToDo.slice'

const store = configureStore({
    reducer: {
        ToDo: ToDoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store