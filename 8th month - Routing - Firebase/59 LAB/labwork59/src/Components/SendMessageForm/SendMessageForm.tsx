/* eslint-disable */
'use client'
import { FormEvent, useState } from 'react'
import styles from './SendMessageForm.module.css'
import { baseUrl } from '@/constants/baseUrl'

const SendMessageForm = () => {
    const [values,SetValues] = useState<{author: string, message: string}> ({author: '', message: ''})

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetValues(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        if (!values.author.trim() || !values.message.trim()) return 
        const data = new URLSearchParams(values)
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                body: data
            })
            SetValues({
                author: '',
                message: ''
            })
        } catch(err) {
            console.log(err)
        }
    }
    return (
    <div className={styles.SendMessageForm}>
        <form className={styles.SendMessageForm_form} onSubmit={submit}>
            <input type="text" name='author' placeholder='Name' onChange={inputHandler} value={values.author}/>
            <input type="text" name='message' placeholder='Text' onChange={inputHandler} value={values.message}/>
            <button>SEND</button>
        </form>
    </div>
)
}

export default SendMessageForm
