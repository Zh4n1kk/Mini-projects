import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { axiosApi } from "../axios/axiosApi"

const name = 'cart'

type CartItem = {
    itemImg: string
    name: string
    price: string
    count: number
}

type checkoutItem = {
    name: string
    price: string
    count: number
}


type TInit = {
    cartList: CartItem[]
    cart: checkoutItem[]
    show: boolean
    FirstNameInput: string
    LastNameInput: string
    number: string
    email: string
}

const initialState: TInit = {
    cartList: [],
    cart: [],
    show: false,
    FirstNameInput: '',
    email: '',
    LastNameInput: '',
    number: ''
}

export const fetchFirebase = createAsyncThunk(
    `${name}/fetchFirabse`,
    async() => {
        const response = await axiosApi.get('/product.json')
        return response.data
    }
)

export const postFirebase = createAsyncThunk(
    `${name}/postFirebase`,
    async(order: {firstName: string, lastName: string, number: string, email: string, cart: checkoutItem[]}) => {
        const post = await axiosApi.post('/orders.json', order)
        return post
    }
)

const cartSlice = createSlice({
    name,
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{name: string, price: string}>) => {
            const itemIndex = state.cart.findIndex(item => item.name === action.payload.name) 
            if (itemIndex !== -1) {
                state.cart[itemIndex].count++
            } else {
                state.cart.push({...action.payload, count: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<({name: string})>) => {
            const itemIndex = state.cart.findIndex(item => item.name === action.payload.name)
            if (itemIndex !== -1) {
                if(state.cart[itemIndex].count === 1) {
                    state.cart.splice(itemIndex, 1)
                } else {
                    state.cart[itemIndex].count--
                }
            } 
        },
        setCartList: (state, action) => {
            state.cartList = action.payload
        },
        setShow: (state) => {
            state.show = !state.show
        },
        setFirstName: (state, action) => {
            state.FirstNameInput = action.payload
        },
        setLastName: (state, action) => {
            state.LastNameInput = action.payload
        },
        setNumber: (state, action) => {
            state.number = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        clearCart: (state) => {
            state.cart = []
            state.FirstNameInput = ''
            state.LastNameInput = ''
            state.number = ''
            state.email = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFirebase.fulfilled, (state,action) => {
            state.cartList = Object.values(action.payload) 
        })
    }
})

export const { addToCart, removeFromCart, setCartList, setShow, setFirstName, setEmail, setLastName, setNumber, clearCart } = cartSlice.actions
export default cartSlice.reducer