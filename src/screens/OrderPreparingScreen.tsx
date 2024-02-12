import { View, Image, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { ScreenName } from '../constants'

export const OrderPreparingScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(
        Platform.OS === 'ios' ? ScreenName.delivery : ScreenName.home
      )
    }, 3000)
  }, [navigation])

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../assets/images/delivery.gif')}
        className="w-80 h-80"
      />
    </View>
  )
}
