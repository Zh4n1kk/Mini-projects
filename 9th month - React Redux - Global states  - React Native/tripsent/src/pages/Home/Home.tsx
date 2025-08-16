'use client'

import BackdropWindow from "@/components/BackdropWindow/BackdropWindow"
import styles from './Home.module.css'
import { useState } from "react"
import Card from "@/components/Card/Card"

const Home = () => {
    const [filters, showFilters] = useState(false)
    const [priceOffer, setPriceOffer] = useState(false)

    return (
        <>
        <div className={styles.cards}>
            <Card url='/image.jpg' price="500" onClick='/description'/>
        </div>
        <BackdropWindow show={filters} close={() => showFilters(false)}>
            				<p>From</p>
                <input placeholder="Choose country" />
                <input placeholder="Choose city" />
                <p>To</p>
                <input placeholder="Choose country" />
                <input placeholder="Choose city" />
                <p>Type of Delivery</p>
                <input placeholder="Choose type" />
        </BackdropWindow>
        <BackdropWindow show={priceOffer} close={() => setPriceOffer(false)}>
                <h3>Current Price</h3>
                <h1>99,000 KZT</h1>
                <p>Input your offer price</p>
                <input placeholder="Price in KZT" />
                <p>Input your offer price</p>
                <input placeholder="Price in KZT" />
        </BackdropWindow>
        <div className={styles.container}>
        <button onClick={() => showFilters(true)}>Filters</button>
        <button onClick={() => setPriceOffer(true)}>Price offer</button>
        </div>
        </>
    )
}

export default Home