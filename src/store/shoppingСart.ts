import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
// @ts-ignore
import { Cart, cartDataPayload, CartItem } from '@types/cartTypes'

export interface IShoppingCartState {
  items: Cart
  cartData: {
    cartWeightKg: number
    cartWeightJin: number
    cartSumRub: number
    cartSumYuan: number
  }
  itemCartNumber: number
}

const initialState: IShoppingCartState = {
  items: {},
  cartData: {
    cartWeightKg: 0,
    cartWeightJin: 0,
    cartSumRub: 0,
    cartSumYuan: 0
  },
  itemCartNumber: 0,
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<CartItem>) => {
      if(state.items[action.payload.id]) {
        state.items[action.payload.id].number = action.payload.number
      } else {
        state.items[action.payload.id] = action.payload
      }
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      if(state.items[action.payload.id]) {
        delete state.items[action.payload.id]
      }
    },
    updateCartData: (state, action: PayloadAction<cartDataPayload>) => {
      const { shippingPoint, weight, price, actionType } = action.payload
      const multiplier = actionType === '+' ? 1 : -1

      if (shippingPoint === 'СПБ') {
        state.cartData.cartWeightKg += weight * multiplier
        state.cartData.cartSumRub += price * multiplier
      } else if (shippingPoint === 'Гуанчжоу') {
        state.cartData.cartWeightJin += weight * multiplier
        state.cartData.cartSumYuan += price * multiplier
      }

      state.itemCartNumber = Object.keys(state.items).length
    }
  }
})

export const setCartItemThunk = createAsyncThunk(
  'shoppingCart/setItems',
  async (item: CartItem, thunkAPI) => {
    try {
      thunkAPI.dispatch(setItem(item))
      thunkAPI.dispatch(updateCartData({
        shippingPoint: item.region,
        weight: item.item.valueGram,
        price: item.item.price,
        actionType: item.actionType
      }))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const deleteCartItemThunk = createAsyncThunk(
  'shoppingCart/deleteItems',
  async (item: CartItem, thunkAPI) => {
    try {
      thunkAPI.dispatch(deleteItem(item))
      thunkAPI.dispatch(updateCartData({
        shippingPoint: item.region,
        weight: item.item.valueGram,
        price: item.item.price,
        actionType: '-'
      }))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const {
  setItem,
  deleteItem,
  updateCartData
} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
