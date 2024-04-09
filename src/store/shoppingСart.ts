import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// @ts-ignore
import { Cart, CartItem } from '@types/cartTypes'

export interface IShoppingCartState {
  items: Cart
}

const initialState: IShoppingCartState = {
  items: {}
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setItem: (state, action: { payload: CartItem }) => {
      if(state.items[action.payload.id]) {
        state.items[action.payload.id].number = action.payload.number
      } else {
        state.items[action.payload.id] = action.payload
      }
    },
  }
})

export const setCartItemThunk = createAsyncThunk(
  'shoppingCart/items',
  async (item: CartItem, thunkAPI) => {
    try {
      thunkAPI.dispatch(setItem(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const {
  setItem,
} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
