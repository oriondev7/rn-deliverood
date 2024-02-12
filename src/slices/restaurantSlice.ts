import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SliceName } from '../constants'
import { RestaurantModel } from '../models'
import { RootState } from '../store'

export interface RestaurantState {
  restaurant?: RestaurantModel
}

const initialState: RestaurantState = {
  restaurant: undefined,
}

export const restaurantSlice = createSlice({
  name: SliceName.restaurant,
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantModel>) => {
      console.log('state.restaurant1', state.restaurant)
      state.restaurant = action.payload
      console.log('state.restaurant2', state.restaurant)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant

export default restaurantSlice.reducer
