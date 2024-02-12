import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme/theme'
import { Categories, FeaturedRow } from '../components'
import {
  getCategories,
  getFeaturedRestaurants,
  getFeaturedRestaurantsCategory,
} from '../../api'
import { CategoryModel, FeaturedModel } from '../models'

export const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('')
  const [categories, setCategories] = useState<CategoryModel[]>([])
  const [featuredRestaurants, setFeaturedRestaurants] = useState<
    FeaturedModel[]
  >([])

  const setCategoryById = (id: string) => {
    const activeCategory = categories.find((category) => category._id === id)

    getFeaturedRestaurantsCategory(activeCategory?.name ?? '').then((data) => {
      setFeaturedRestaurants([data])
      setActiveCategoryId(id)
    })
  }

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data)
    })

    getCategories().then((data: CategoryModel[]) => {
      setCategories(data)
    })
  }, [])

  return (
    <View className="bg-white flex-1 pt-5">
      <StatusBar barStyle="dark-content" />

      <SafeAreaView />

      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" color="gray" />

          <TextInput placeholder="Restaurant" className="ml-2 flex-1 p-0" />

          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />

            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* categories */}
        <Categories
          categories={categories}
          activeCategoryId={activeCategoryId}
          onPress={setCategoryById}
        />

        {/* featured */}
        <View className="mt-5">
          {featuredRestaurants.map((category, index) => (
            <FeaturedRow
              key={index}
              title={category.name}
              restaurants={category.restaurants}
              description={category.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
