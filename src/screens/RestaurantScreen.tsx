import React, { useEffect } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme/theme'
import { CartIcon, DishRow } from '../components'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice'
import { urlFor } from '../../sanity'
import { DishModel } from '../models'

export const RestaurantScreen = ({ navigation, route }: any) => {
  const { restaurant } = route.params
  const dishes = restaurant.dishes
  const dispatch = useDispatch()

  useEffect(() => {
    if (restaurant && restaurant._id) {
      dispatch(setRestaurant(restaurant))
    }
  }, [dispatch, restaurant])

  return (
    <View className="flex-1">
      <CartIcon />

      <StatusBar barStyle={'light-content'} />

      <ScrollView className="bg-white">
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(restaurant.image).url() }}
          />

          <TouchableOpacity
            className="absolute top-14 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.pop()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold text-black">
              {restaurant.name}
            </Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="h-4 w-4"
                />

                <Text className="text-xs">
                  <Text className="text-green-700">{restaurant.stars}</Text>

                  <Text className="text-gray-700">
                    ({restaurant.reviews} review) ·{' '}
                    <Text className="font-semibold">
                      {restaurant.type.name}
                    </Text>
                  </Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1 flex-1">
                <Icon.MapPin color="gray" width="15" height="15" />

                <Text className="text-gray-700 text-xs" numberOfLines={1}>
                  Nearby· {restaurant.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>

        <View className="pb-24 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold text-black">Menu</Text>

          {/* dishes */}
          {dishes ? (
            dishes.map((dish: DishModel, index: number) => (
              <DishRow dish={{ ...dish }} key={index} />
            ))
          ) : (
            <Text className="px-4">No Dishes Available</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
