import useStoreDish from '@/store/store'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const CheckoutFooter = () => {
  const {totalPrice, toggleModal} = useStoreDish()
  return (
    <View className='bg-[#242424] flex flex-row items-center gap-2 p-3'>
        <Text className='color-white'>Order total: {totalPrice}</Text>
        <Pressable onPress={toggleModal}>
        <button className='bg-white h-10 w-20'>Checkout</button>
        </Pressable>
    </View>
  )
}

export default CheckoutFooter