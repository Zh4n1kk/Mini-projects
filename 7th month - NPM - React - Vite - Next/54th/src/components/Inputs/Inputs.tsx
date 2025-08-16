"use client";

import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Inputs.module.css";

const Inputs = () => {

    const [costsList, setCostsList] = useState<string[][]>([['Bottle of water','100'],['Milk','400'],['Bread','90'],['Dinner at cafe','2000']])
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")


    const addElem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!name.trim() || !cost.trim()) return
        
        setCostsList(prev => [...prev, [name,cost]])
        setName('')
        setCost('')
    }

    const totalCost = () => costsList
    .map(pair => parseInt(pair[1]) || 0 )
    .reduce((sum,value) => sum + value, 0)

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={addElem}>
                <input id="item_name" type="text" placeholder="Item name" value={name} onChange={e => {
                    setName(e.target.value)
                }} required></input>
                <input id="item_cost" type="text" placeholder="Cost" value={cost} onChange={e => {
                    if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
                        setCost(e.target.value)
                    } else {
                        return
                    }
                }} required></input>
                <div>
                    KZT
                    <button>Add</button>
                </div>
            </form>
            <div className={styles.mapRows}>
                {costsList.map((pair,index) => (
                    <div key={index} className={styles.mapCols}>
                        <div className={styles.item_name}>{pair[0]}</div>
                        <div className={styles.item_cost}>{pair[1]}</div>
                        <button onClick={() => {
                            setCostsList((prev) => prev.filter((_,i) => i !== index))
                        }}>Delete</button>
                    </div>
                ))}
            </div>
            <p className={styles.total_spent} >Total spent:</p>
            <p className={styles.total_spent} >{totalCost()}</p>
            </div>
    );
};

export default Inputs;
