'use client'

import store, { AppStore } from "@/store/store"
import { useRef } from "react"
import { Provider } from "react-redux"

type Props = {
    children: React.ReactNode
}

const StoreProvider = ({children}: Props) => {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        storeRef.current = store
    }
    return(
    <Provider store={store}>
    {children}
    </Provider>
    )
}

export default StoreProvider