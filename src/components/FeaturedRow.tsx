import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme/theme'
import { RestaurantCard } from '.'
import { RestaurantModel } from '../models'

interface FeaturedRowProps {
  title: string
  restaurants: RestaurantModel[]
  description: string
}

export const FeaturedRow: React.FC<FeaturedRowProps> = ({
  title,
  restaurants,
  description,
}) => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center px-4">
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-lg text-black">{title}</Text>

            <TouchableOpacity>
              <Text
                style={{ color: themeColors.text }}
                className="font-semibold"
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingHorizontal: 15,
          gap: 24,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </ScrollView>
    </View>
  )
}
