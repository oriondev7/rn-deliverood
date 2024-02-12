import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Platform,
} from 'react-native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../constants'
import { urlFor } from '../../sanity'
import { RestaurantModel } from '../models'

interface RestaurantCardProps {
  restaurant: RestaurantModel
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
}) => {
  const navigation: any = useNavigation()

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(ScreenName.restaurant, { restaurant })}
    >
      <View
        className="w-64 bg-white rounded-3xl"
        style={{
          shadowColor: themeColors.bgColor(Platform.OS === 'android' ? 1 : 0.2),
          shadowRadius: 7,
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          elevation: 10,
        }}
      >
        <Image
          className="h-36 rounded-3xl"
          source={{ uri: urlFor(restaurant.image).url() }}
        />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2 text-black">
            {restaurant.name}
          </Text>

          <View className="flex-row items-center space-x-1">
            <Image
              source={require('../assets/images/fullStar.png')}
              className="h-4 w-4"
            />

            <Text className="text-xs">
              <Text className="text-green-700">{restaurant.rating} </Text>

              <Text className="text-gray-700">
                ({restaurant.reviews} review) ·{' '}
                <Text className="font-semibold">{restaurant.type.name}</Text>
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15" />

            <Text className="text-gray-700 text-xs" numberOfLines={1}>
              Nearby· {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
