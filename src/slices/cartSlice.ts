import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SliceName } from '../constants'
import { RootState } from '../store'
import { DishModel } from '../models'

export interface CartState {
  items: DishModel[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: SliceName.cart,
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<DishModel>) => {
      state.items = [...state.items, action.payload]
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const cartItems = [...state.items]
      const itemIndex = cartItems.findIndex(
        (item) => item._id === action.payload
      )

      if (itemIndex >= 0) {
        cartItems.splice(itemIndex, 1)
      } else {
        console.log('Cannot remove the item that is not added.')
      }

      state.items = cartItems
    },

    removeAllFromCart: (state) => {
      state.items = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectSameItemsByID = (state: RootState, id: string) =>
  state.cart.items.filter((item) => item._id === id)
export const selectCartTotal = (state: RootState): number =>
  state.cart.items.reduce((total, item) => (total += item.price), 0)

export default cartSlice.reducer
