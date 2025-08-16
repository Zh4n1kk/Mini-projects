'use client'
import GameBoard from "@/components/GameBoard/GameBoard"
import { useState } from "react"

const Home = () => {
    const resetBoard = () => {
        setBoardKey(prev => prev + 1)
    }
    const [boardKey, setBoardKey] = useState(0)
    return(
        <>
        <GameBoard key={boardKey}/>
        <button onClick={resetBoard}>Reset</button>
        </>
    )
}

export default Home