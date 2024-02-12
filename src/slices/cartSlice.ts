import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SliceName } from '../constants'
import { RootState } from '../store'

export interface CartState {
  items: any
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: SliceName.cart,
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items = [...state.items, action.payload]
    },

    removeFromCart: (state, action: PayloadAction<any>) => {
      const cartItems = [...state.items]
      const itemIndex = state.items.findIndex((item: any) => item._id === action.payload.id)

      if (itemIndex >= 0) {
        cartItems.splice(itemIndex, 1)
      } else {
        console.log('Cannot remove the item that is not added.');
      }

      state.items = cartItems
    },

    removeAllFromCart: (state) => {
      state.items = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectSameItemsByID = (state: RootState, id: number) => state.cart.items.filter((item: any) => item._id === id)
export const selectCartTotal = (state: RootState): number => state.cart.items.reduce((total: number, item: any) => total += item.price, 0)

export default cartSlice.reducer
