import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPincode = {
    input: string
    status: string
}

const initialState = {
    input: '',
    status: 'waiting' 
}

const CORRECT_PIN = '1337'

const pinCodeSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addDigit(state, action: PayloadAction<string>) {
            if (state.input.length < 4 && state.status === 'waiting') {
                state.input += action.payload;
            }
        } ,
        removeDigit(state) {
            if (state.status === 'waiting') {
                state.input = state.input.slice(0, -1)
            }
        },
        submitCode(state) {
            if (state.input === CORRECT_PIN) {
                state.status = 'success'
            } else {
                state.status = 'error'
            }
        }
    }
})

export const {addDigit, removeDigit, submitCode} = pinCodeSlice.actions
export default pinCodeSlice.reducer
