import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ScreenName } from '../constants'

export const OrderPrepairingScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreenName.delivery)
    }, 3000)
  }, [])

  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image
        source={require('../assets/images/delivery.gif')}
        className='w-80 h-80'
      />
    </View>
  )
}
