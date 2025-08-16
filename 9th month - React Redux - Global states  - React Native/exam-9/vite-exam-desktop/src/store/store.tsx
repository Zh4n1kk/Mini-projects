import { create } from "zustand";
import { axiosApi } from "../axios/axiosApi";

interface IContact {
    id: string
    nameInput: string
    emailInput: string
    imgInput: string
    phoneInput: string
}

interface IStore {
    data: IContact[]
    setData: (newState:IContact[]) => void
    
    globalId: string
    nameInput: string
    phoneInput: string
    imgInput: string
    emailInput: string
    setGlobalId: (newState: string) => void
    setName: (newState: string) => void
    setPhone: (newState: string) => void
    setEmail: (newState: string) => void
    setImg: (newState: string) => void
    clearInputs: () => void
    
    show: boolean,
    setShow: () => void,
    actionType: 'add' | 'edit'
    setActionType: (newState: 'add' | 'edit') => void
    
    loading: boolean
    setLoading: (newState: boolean) => void

    postContact: () => void
    fetchContacts: () => void
    patchContact: () => void
    deleteContact: () => void
}

const useStoreContact = create<IStore>()((set, get) => ({
    data: [],
    setData: (newState) => set(() => ({data: newState})),
    
    globalId: '',
    emailInput: '',
    imgInput: '',
    nameInput: '',
    phoneInput: '',
    setGlobalId: (newState) => set(() => ({globalId: newState})),
    setName: (newState) => set(() => ({nameInput: newState})),
    setPhone: (newState) => set(() => ({phoneInput: newState})),
    setEmail: (newState) => set(() => ({emailInput: newState})),
    setImg: (newState) => set(() => ({imgInput: newState})),
    clearInputs: () => set(() => ({imgInput: '', emailInput: '', phoneInput: '', nameInput: ''})),
    
    loading: false,
    setLoading: (newState) => set(() => ({loading: newState})),
    show: false,
    setShow: () => set((state) => ({show: !state.show})),
    actionType: "add",
    setActionType: (newState) => set(() => ({actionType: newState})),
    
    postContact: async () => {
        
        const { emailInput,imgInput,nameInput,phoneInput, fetchContacts, setLoading } = get()
        try {
            setLoading(true)
            axiosApi.post('/contacts.json', {emailInput,imgInput,nameInput,phoneInput})
        } catch (error) {
            console.log(error)
        }
            setLoading(false)
        await fetchContacts()
    },

    fetchContacts: async () => {
        const { setData, setLoading } = get()
        setLoading(true)
        const response = await axiosApi.get('/contacts.json')
        const data = response.data
        if (data) {
            const newData = Object.entries(data).map(([id, value]) => ({
                id, ...(value as Omit<IContact, 'id'>)
            }))
            setData(newData)
        }
        setLoading(false)
    },
    patchContact: async() => {

        const { globalId, imgInput, nameInput, phoneInput, emailInput, fetchContacts, setLoading } = get()

        try {
            setLoading(true)
            axiosApi.patch(`/contacts/${globalId}.json`, {imgInput, nameInput, phoneInput, emailInput})
        } catch (error) {
            console.log(error)
        }
        await fetchContacts()
        setLoading(false)
    },

    deleteContact: async() => {
        const { globalId, fetchContacts, setLoading } = get()
        setLoading(true)
        axiosApi.delete(`/contacts/${globalId}.json`)
        await fetchContacts()
        setLoading(false)
    }
}))

export default useStoreContact