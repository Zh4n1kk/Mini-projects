"use client";
import { useMemo, useState } from "react";
import Cube from "../Cube/Cube";
import style from "./GameBoard.module.css";

const GameBoard = () => {
    const boardWidth = 6;
    const boardHeight = 6;
    
    const mineIndex = useMemo(() => {
        return Math.floor(Math.random() * (boardHeight * boardWidth));
    }, []);
    
    
    const [countClicks, setClick] = useState(0);
    const [gameOver, setGameOver] = useState(false)
    
   
    let cubeIndex = 0;
    const cells = [];
    
    
    
    for (let row = 0; row < boardWidth; row++) {
        const rowCells = [];
        for (let col = 0; col < boardHeight; col++) {
            const isMine = cubeIndex === mineIndex;
            rowCells.push(
                <Cube
                    key={`${row}-${col}`}
                    text={isMine ? "O" : ""}
                    onReveal={() => {
                        setClick((c) => c + 1);
                    }}
                    isGameOver = {gameOver}
                    onHitMine = {() => setGameOver(true)}
                />
            );
            cubeIndex++;
        }
        cells.push(
            <div key={row} style={{ display: "flex" }}>
                {rowCells}
            </div>
        );
    }
    return (
        <>
            <div>
                <div className={style.board}>{cells}</div>
                <p className={style.count}>Tries: {countClicks}</p>
                <p className={style.congratz}>{gameOver ? 'You win' : ''}</p>
            </div>
        </>

    );
};

export default GameBoard;
