import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './ContactData.module.css';
import { axiosOrder } from '../../axios/axiosOrder';
import { TCustomerData } from '../../types/TCustomerData';
import { useLocation, useNavigate } from 'react-router';
import Spinner from '../UI/Spinner/Spinner';

export function ContactData() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmited, setIsSubmited] = useState<boolean>(false)
  const [customerData, setCustomerData] = useState<TCustomerData>({
    name: '',
    email: '',
    street: '',
    postal: ''
  })

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmited) return
    try {
      setIsLoading(true)
      const { ingredients, price } = location.state
      const response = await axiosOrder.post('orders.json', {
        customer: { ...customerData },
        ingredients,
        price
      })
      console.log(response.data)
      setIsSubmited(true)
    } catch (err) {
      console.log(err)
      setIsSubmited(false)
    } finally {
      setIsLoading(false)
    }
  }
  const goBack = () => {
    navigate('/')
  }
  return (
    <div className={styles.ContactData}>
      {isLoading ?
          <Spinner />
        :
        isSubmited ?
          <>
            <h1>
              Your order is successful
            </h1>
            <Button btnType='Success' onClick={goBack}>Go back</Button>
          </>

          :
          <>
            <h4>Enter your Contact Data</h4>
            <form onSubmit={submit}>
              <input onChange={inputHandler} value={customerData.name} className={styles.Input} type="text" name="name" placeholder="Your Name" />
              <input onChange={inputHandler} value={customerData.email} className={styles.Input} type="email" name="email" placeholder="Your Mail" />
              <input onChange={inputHandler} value={customerData.street} className={styles.Input} type="text" name="street" placeholder="Street" />
              <input onChange={inputHandler} value={customerData.postal} className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
              <Button btnType="Success">
                ORDER
              </Button>
            </form>
          </>
      }

    </div>
  );
}