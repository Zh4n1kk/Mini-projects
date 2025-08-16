'use client'

import Options from "@/components/Options"
import { useState } from "react"

export default function CreateOrder() {


    const [inputs, setInputs] = useState<{
        title: string,
        description: string,
        reward: string
    }>({
        title: "",
        description: "",
        reward: ""
    })
    const [selectOne, setSelectOne] = useState<{
        contry: string,
        city: string,
    }>({
        contry: "Kazakhstan",
        city: "Almaty",
    })

     const [selectTwo, setSelectTwo] = useState<{
        contry: string,
        city: string,
    }>({
        contry: "USA",
        city: "Los-Angelse",
    })



    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value

            }
        )
    }


    function selectionHandlerFrom(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectOne(
            {
                ...selectOne,
                [e.target.name]: e.target.value

            }
        )
    }

       function selectionHandlerTo(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectTwo(
            {
                ...selectTwo,
                [e.target.name]: e.target.value

            }
        )
    }
    return (
        <div>
            <form action="">
                <h3>
                    Title
                </h3>


                <input type="text" name="title" value={inputs.title} onChange={inputHandler} />
                <h3>
                    Description
                </h3>
                <input name="description" onChange={inputHandler}></input>
                <h3>Upload Image</h3>
                <h3>Reward</h3>
                <input name="reward" type="text" onChange={inputHandler} />
                <h3>Form</h3>

                <Options regime={"country"} selectHandler={(e) => { selectionHandlerFrom(e) }} contry={selectTwo.contry} city={selectOne.city} />
                <Options regime={"city"} selectHandler={(e) => { selectionHandlerFrom(e) }} contry={selectTwo.contry} city={selectOne.city} />


                <h3>To</h3>
                <Options regime={"country"} selectHandler={(e) => { selectionHandlerTo(e) }} contry={selectOne.contry} city={selectTwo.city} />
                <Options regime={"city"} selectHandler={(e) => { selectionHandlerTo(e) }} contry={selectOne.contry} city={selectTwo.city} />



                <h3>
                    Type of delivery
                </h3>

                <button>Create Order</button>
            </form>

        </div>
    )
}
