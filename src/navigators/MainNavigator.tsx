import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  CartScreen,
  DeliveryScreen,
  HomeScreen,
  OrderPreparingScreen,
  RestaurantScreen,
} from '../screens'
import { ScreenName } from '../constants'

const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenName.home} component={HomeScreen} />
        <Stack.Screen
          name={ScreenName.restaurant}
          component={RestaurantScreen}
        />
        <Stack.Screen
          name={ScreenName.cart}
          component={CartScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name={ScreenName.orderPreparing}
          component={OrderPreparingScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
        <Stack.Screen
          name={ScreenName.delivery}
          component={DeliveryScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
