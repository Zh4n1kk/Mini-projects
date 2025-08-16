import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface IProps {
    img: string
    name: string
    price: string
    onTouch: () => void
}
export const Card = ({img, name, price, onTouch}: IProps) => {
  return (
    <Pressable onPress={onTouch}>
      <View className='border-white border-2 p-2 flex-row items-center mt-2'>
        <Image source={img} className='w-20 h-20'/>
        <View className='flex-row w-full pl-5 items-center'>
          <Text className='color-white font-bold text-[20px] w-40'>{name}</Text>
          <Text className='color-white'>{price} KZT</Text>
        </View>
      </View>
    </Pressable>
  )
}