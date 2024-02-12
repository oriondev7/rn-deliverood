import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  selectSameItemsByID,
} from '../slices/cartSlice'
import { RootState } from '../store'
import { urlFor } from '../../sanity'
import { DishModel } from '../models'

interface DishRowProps {
  dish: DishModel
}

export const DishRow: React.FC<DishRowProps> = ({ dish }) => {
  const dispatch = useDispatch()
  const sameItems = useSelector((state: RootState) =>
    selectSameItemsByID(state, dish._id)
  )

  const onIncrement = () => {
    dispatch(addToCart(dish))
  }

  const onDecrement = () => {
    dispatch(removeFromCart(dish._id))
  }

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(dish.image).url() }}
      />

      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{dish.name}</Text>

          <Text className="text-gray-700">{dish.description}</Text>
        </View>

        <View className="flex-row justify-between pl-2 items-center">
          <Text className="text-gray-700 text-lg font-bold">${dish.price}</Text>

          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={onDecrement}
              disabled={!sameItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>

            <Text className="px-3">{sameItems.length}</Text>

            <TouchableOpacity
              onPress={onIncrement}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
