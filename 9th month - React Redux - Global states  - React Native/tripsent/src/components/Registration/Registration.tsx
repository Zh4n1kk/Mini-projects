'use client'
import { TUser } from '@/types/TUser'
import Input from '../UI/Input/Input'
import styles from './Registration.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../UI/Button/Button'


export default function Registration() {
    const [user, setUser] = useState<TUser>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleSave = (user: TUser) => {
        console.log(user)    
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user.firstName.trim() && !user.lastName.trim() && !user.email.trim() && !user.password.trim()) return
        const newUser: TUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
        handleSave(newUser)
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setUser(prev=> ({...prev, [name]: value}))
    }

    return (
        <div className={styles.Registration}>
            <div className={styles.RegistrationContainer}>
                <img 
                    src="/tripsend.png"
                    alt="Логотип"
                    width={128}
                    height={30}
                />
                <h2>To accept the order, you need to Sign Up</h2>
                <form onSubmit={handleSubmit} className={styles.RegistrationForm}>
                    <Input
                        type='text'
                        label='First name'
                        onChange={handleChange}
                        placeholder='John'
                        name='firstName'
                        value={user.firstName}                       
                    />
                    <Input
                        type='text'
                        label='Last name'
                        onChange={handleChange}
                        placeholder='Doe'
                        name='lastName'
                        value={user.lastName}                        
                    />
                    <Input
                        type='email'
                        label='First name'
                        onChange={handleChange}
                        placeholder='email'
                        name='email'
                        value={user.email}                        
                    />
                    <Input
                        type='password'
                        label='Password'
                        onChange={handleChange}
                        placeholder='password'
                        value={user.password}
                        name='email'                      
                    />
                    <p>Already got an account?<span>Sign In</span></p>
                    <Button
                        type='darkBlue'
                        onClick={() => {}}
                        title='Sign Up'
                    />
                </form>
            </div>
        </div>
    )
}