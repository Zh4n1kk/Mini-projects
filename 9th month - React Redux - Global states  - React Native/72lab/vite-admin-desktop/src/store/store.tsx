import { create } from "zustand";
import axiosApi from "../axios/axiosApi";

export interface IDishes {
    id: string
    name: string
    price: string
    image: string
}

export interface IOrder {
    cart: {
        [id: string]: number
    }
    id: string,
    name: string,
    phone: string,
    address: string,
}
interface IStore {
    dishData: IDishes[]
    activeLink: string
    show: boolean
    name: string
    image: string
    price: string
    modalType: 'add' | 'edit' | 'null'
    globalId: string
    loading: boolean
    orderData: IOrder[]
    setOrderData: (newState: IOrder[]) => void
    setLoading: (newState: boolean) => void
    setGlobalId: (newState: string) => void
    setModalType: (newState: 'add' | 'edit' | 'null') => void
    setDishData: (newState: IDishes[]) => void
    setActiveLink: (newState: string) => void
    toggleShow: () => void
    setName: (newState: string) => void
    setImage: (newState: string) => void
    setPrice: (newState: string) => void
    fetchOrder: () => void
    completeOrder: (id: string) => void
    handleSubmit: () => void
    handleSubmitEdit: (id: string) => void
    fetchDish: () => void
    deleteDish: (id: string) => void
}

const useStoreAdmin = create<IStore>()((set, get) => ({
    globalId: '',
    setGlobalId: (newState: string) => set(() => ({ globalId: newState })),
    modalType: 'null',
    setModalType: (newState) => set(() => ({ modalType: newState })),
    dishData: [],
    setDishData: (newState) => set(() => ({ dishData: newState })),
    activeLink: 'Dishes',
    setActiveLink: (newState) => set(() => ({ activeLink: newState })),
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show })),
    name: '',
    setName: (newState: string) => set(() => ({ name: newState })),
    image: '',
    setImage: (newState: string) => set(() => ({ image: newState })),
    price: '',
    setPrice: (newState: string) => set(() => ({ price: newState })),
    loading: false,
    setLoading: (newState) => set(() => ({ loading: newState })),
    orderData: [],
    setOrderData: (newState) => set(() => ({ orderData: newState })),
    fetchOrder: async () => {
        const { setLoading, setOrderData } = get()
        setLoading(true);
        try {
            const response = await axiosApi.get("/orderDishes.json");
            const data = response.data;
            if (data) {
                const newDishData = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...(value as Omit<IOrder, "id">),
                }));
                setOrderData(newDishData);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        };
    },
    completeOrder: async (id: string) => {
        const { setLoading, fetchOrder } = get()
        setLoading(true);
        try {
            await axiosApi.delete(`/orderDishes/${id}.json`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        fetchOrder();
    },
    fetchDish: async () => {
        const { setLoading, setDishData } = get()
        setLoading(true)
        try {
            const response = await axiosApi.get('/dishes.json')
            const data = response.data
            if (data) {
                const newDishData = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...(value as Omit<IDishes, 'id'>),
                }))
                setDishData(newDishData)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    },
    deleteDish: async (id) => {
        const { setLoading, fetchDish } = get()
        setLoading(true)
        try {
            await axiosApi.delete(`/dishes/${id}.json`,)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        fetchDish()
    },

    handleSubmit: async () => {
        const { setLoading, setImage, setName, setPrice, toggleShow, fetchDish, name, price, image } = get()
        setLoading(true)
        try {
            await axiosApi.post('/dishes.json', { name, price, image })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        setImage('')
        setName('')
        setPrice('')
        toggleShow()
        fetchDish()
    },
    handleSubmitEdit: async (id) => {
        const { setLoading, toggleShow, setImage, setName, setPrice, fetchDish, name, price, image } = get()
        try {
            setLoading(true)
            toggleShow()
            await axiosApi.patch(`/dishes/${id}.json`, { name, price, image })
            setImage('')
            setName('')
            setPrice('')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            fetchDish()
        }
    }
}))

export default useStoreAdmin