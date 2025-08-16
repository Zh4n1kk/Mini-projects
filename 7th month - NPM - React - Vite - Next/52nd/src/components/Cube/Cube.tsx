"use client";
import style from "./Cube.module.css";
import { useState } from "react";

type CubeProps = {
    text: string;
    onReveal: () => void;
    isGameOver: boolean
    onHitMine: () => void;
};

const Cube = ({ text, onReveal, isGameOver, onHitMine }: CubeProps) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleClicks = () => {
        if (isGameOver || isRevealed) return;
        setIsRevealed(true)
        onReveal()

        if(text === 'O') {
            onHitMine()
        }
        };
 
    return (
        <>
            <div
                className={`${style.cube} ${isRevealed ? style.revealed : ""}`}
                onClick={handleClicks}
            >
                <div className={style.innerText}>{isRevealed ? text : ""}</div>
            </div>
        </>
    );
};

export default Cube;
