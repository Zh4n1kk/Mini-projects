import axios from 'axios'
import { create } from 'zustand'

export interface IDish {
    id: string
    name: string
    price: string
    image: string
}
  const url = 'https://pizzeriaadminclient-default-rtdb.europe-west1.firebasedatabase.app'

interface IStore {
    dishData: IDish[]
    setDishData: (newState: IDish[]) => void
    totalPrice: number
    addToTotal: () => void
    cart: ICartItem[]
    addToCart: (newDish: IDish) => void
    modalState: boolean
    toggleModal: () => void
    cleanCart: () => void
    name: string
    setName: (newState: string) => void
    phone: string
    setPhone: (newState: string) => void
    address: string
    setAddress: (newState: string) => void
    orderDishes: () => void
    fetchDishes: () => void
}

interface ICartItem extends IDish {
    quantity: number
}

const useStoreDish = create<IStore>()((set, get) => ({
    dishData: [],
    setDishData: (newState) => set(() => ({dishData: newState})),
    totalPrice: 0,
    addToTotal: () => set((state) => {
        const totalPrice = state.cart.reduce((sum,item) => sum + Number(item.price) * item.quantity, 0)
        return { totalPrice: totalPrice }
    }),
    cart: [],
    addToCart: (newDish) => set((state) => {
        const cartFind = state.cart.find((item) => item.id === newDish.id);
        let newCart;
        if (cartFind) {
            newCart = state.cart.map((item) => item.id === newDish.id ? {...item, quantity: item.quantity + 1} : item)
        } else {
            newCart = [...state.cart, {...newDish, quantity: 1}]
        }
        return {cart: newCart}
    }),
    modalState: false,
    toggleModal: () => set((state) => ({modalState: !state.modalState})),
    cleanCart: () => set(() => ({cart: [], totalPrice: 0})),
    name: '',
    setName: (newState) => set(() => ({name: newState})),
    address: '',
    setAddress: (newState) => set(() => ({address: newState})),
    phone: '',
    setPhone: (newState) => set(() => ({phone: newState})),
    orderDishes: async() => {
        const { toggleModal, cart, address, phone, cleanCart, name, setName, setAddress, setPhone } = get()
            try {
              toggleModal()
            const cartObject = cart.reduce((acc, item) => {
                acc[item.id] = item.quantity;
                return acc;
                }, {} as Record<string, number>);
              
            await axios.post(`${url}/orderDishes.json`, (
                {
                  cart: cartObject,
                  name: name,
                  address: address, 
                  phone: phone}))
            } catch (error) { 
              console.log(error)
            }
            setName('')
            setAddress('')
            setPhone('')
            cleanCart()
    },

    fetchDishes: async() => {
        const { setDishData } = get()
            const response= await axios.get(`${url}/dishes.json`)
        const data = response.data
        if(data) {
            const newData = Object.entries(data).map(([id, value]) => ({id, ...(value as Omit<IDish, 'id'>)}))
            setDishData(newData)
        }
    }
}))

export default useStoreDish