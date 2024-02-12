import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity'
import { CategoryModel } from '../models'

interface CategoriesProps {
  categories: CategoryModel[]
  activeCategoryId: string
  onPress: (id: string) => void
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  activeCategoryId,
  onPress,
}) => {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category._id === activeCategoryId
          const btnClass = isActive ? ' bg-green-500' : ' bg-gray-200'
          const textClass = isActive
            ? ' font-semibold text-gray-800'
            : ' text-gray-500'

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => onPress(category._id)}
                className={'p-1 rounded-full shadow bg-gray-200' + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: urlFor(category.image).url() }}
                  className={'rounded-full'}
                />
              </TouchableOpacity>

              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
