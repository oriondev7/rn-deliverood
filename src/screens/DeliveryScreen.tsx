import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenName } from '../constants'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme/theme'
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { removeAllFromCart } from '../slices/cartSlice'

export const DeliveryScreen = ({ navigation }: any) => {
  const restaurant = useSelector(selectRestaurant)
  const dispatch = useDispatch()

  const cancelOrder = () => {
    navigation.navigate(ScreenName.home)

    dispatch(removeAllFromCart())
  }

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant?.lat ?? 0,
          longitude: restaurant?.lng ?? 0,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat ?? 0,
            longitude: restaurant?.lng ?? 0,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>

            <Text className="text-3xl text-gray-700 font-extrabold">
              20-30 Minutes
            </Text>

            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way
            </Text>
          </View>

          <Image
            className="w-24 h-24"
            source={require('../assets/images/bikeGuy2.gif')}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View className="p-1 rounded-full bg-white/40">
            <Image
              className="h-16 w-16 rounded-full"
              source={require('../assets/images/deliveryGuy.png')}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Carl Johnson</Text>

            <Text className="font-semibold text-white">Your Rider</Text>
          </View>

          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={cancelOrder}
            >
              <Icon.X
                fill={themeColors.bgColor(1)}
                stroke={'red'}
                strokeWidth={4}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
