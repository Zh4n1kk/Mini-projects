/* eslint-disable */

import { Component } from "react";
import ItemJoke from "../Components/ItemJoke";

type State = {
    joke: string[]
}

class ChuckNorris extends Component<{},State> {
    state: State = {
        joke: []
    }
    constructor(props: {}) {
        super(props)
    }
    
    fetchChuck = async(qty: number) => {
        const request =  Array.from({length: qty}, () => 
            fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json()))
        const data = await Promise.all(request)
        const jokeData = data.map(jk => jk.value) 
        this.setState({joke: jokeData})
    }

    render() {
    return(
        <>
        <button onClick={async() => {
            await this.fetchChuck(5)}}
            >FETCH THE CHUCK</button>
            <div style={{display: "flex", flexDirection: 'column', gap: '15px', paddingTop: '10px'}}>
        {this.state.joke ? this.state.joke.map((jk,index) => {
            return <ItemJoke key={index}>{jk}</ItemJoke>
        }) : ''}
        </div>
        </>
    )
}
}

export default ChuckNorris