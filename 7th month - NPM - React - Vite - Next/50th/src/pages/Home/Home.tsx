"use client";
import styles from "./Home.module.css";
import { useState } from "react";

const generateNumbers = (): number[] => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * 36) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);
};

const Home = () => {
    const [numbers, setNumber] = useState(generateNumbers());

    const handleClick = () => {
        setNumber(generateNumbers());
    };

    return (
        <main>
            <div className={styles.bingo_cont}>
                <button onClick={handleClick} className={styles.bingo_button}>NEW NUMBERS</button>
                <div className={styles.bingos_wrap}>
                    {numbers.map((num) => (
                        <div key={num} className={styles.bingo_ball}>
                            {num}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
