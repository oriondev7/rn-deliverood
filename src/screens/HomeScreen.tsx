import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme/theme'
import { Categories, FeaturedRow } from '../components'
import { featured } from '../constants'
import { getFeaturedRestaurants } from '../../api'

export const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([])

  useEffect(() => {
    getFeaturedRestaurants().then((data: any) => {
      setFeaturedRestaurants(data)
    })
  }, [])

  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle='dark-content' />

      <View className='flex-row items-center space-x-2 px-4 pb-2'>
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
          <Icon.Search height='25' width='25' color='gray' />
          
          <TextInput placeholder='Restaurant' className='ml-2 flex-1' />

          <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
            <Icon.MapPin height='20' width='20' stroke='gray' />

            <Text className='text-gray-600'>New York, NYC</Text>
          </View>
        </View>

        <View style={{backgroundColor: themeColors.bgColor(1)}} className='p-3 rounded-full'>
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke='white' />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className='mt-5'>
          {featuredRestaurants.map((restaurant: any, index: number) => 
            <FeaturedRow
              key={index}
              title={restaurant.name}
              restaurants={restaurant.restaurants}
              description={restaurant.description}
            />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
