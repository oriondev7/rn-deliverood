import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api'
import { urlFor } from '../../sanity'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((data: any) => {
      setCategories(data)
    })
  }, [])

  return (
    <View className='mt-4'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {categories.map((category: any, index: number) => {
          console.log(category);
          
          const isActive = category._id === activeCategory
          const btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200'
          const textClass = isActive ? ' font-semibold text-gray-800' : ' text-gray-500'

          return (
            <View key={index} className='flex justify-center items-center mr-6'>
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={'p-1 rounded-full shadow bg-gray-200' + btnClass}
              >
                <Image 
                  style={{width: 45, height: 45}}
                  source={{ uri: urlFor(category.image).url() }}
                  className={'rounded-full'}
                />
              </TouchableOpacity>

              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          )})}

      </ScrollView>
    </View>
  )
}
