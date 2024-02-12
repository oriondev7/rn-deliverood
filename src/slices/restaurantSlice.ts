import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SliceName } from '../constants'

export interface RestaurantState {
  restaurant: any
}

const initialState: RestaurantState = {
  restaurant: null,
}

export const restaurantSlice = createSlice({
  name: SliceName.restaurant,
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<number>) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RestaurantState) => state.restaurant.restaurant

export default restaurantSlice.reducer
