import React from 'react'
import { Image, Text, View } from 'react-native'

interface ICard {
  text: string
  thumbnail: string
  title: string
}

export const Card = ( {text, thumbnail, title}: ICard) => {
  return (
    <View className='bg-gray-300 flex flex-col p-5'>
    <Text>{text}</Text>
      <View className='flex-row items-center'>
        <Image source={{uri: thumbnail}} className='w-40 h-40'/>
        <Text className='font-bold'>{title}</Text>
      </View>
    </View>
  )
}
