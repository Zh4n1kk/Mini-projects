'use client'

import { useAppSelector } from "@/hooks/useAppSelector"
import CalcButton from "../CalcButton/CalcButton"
import './Calculator.css'
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { addDigit, removeDigit, submitCode } from "@/store/slices/pinCode.slice"

const Calculator = () => {
    const { input, status } = useAppSelector(state => state.pincode)
    const dispatch = useAppDispatch()

    const handleClick = (value: string) => {
        if(value === '<') {
            dispatch(removeDigit())
        } else if (value === 'E') {
            dispatch(submitCode())
        } else {
            dispatch(addDigit(value))
        }
    }

    return(
    <div className="container">
        <input type="text" value={'*'.repeat(input.length)} className={status} disabled />
        <div className="Calculator">
            {["1","2","3","4","5","6","7","8","9","0","<","E"].map((el,i) => {
                return(<CalcButton key={i} onClick={() => handleClick(el)}>{el}</CalcButton>)
            })}
        </div>
        <p>Current status: {status === 'success' ? 'Access Granted' : status === 'error' ? 'Access Denies' : 'Waiting'}</p>
        <p>The code is: 1337</p>
    </div>
    )
}

export default Calculator