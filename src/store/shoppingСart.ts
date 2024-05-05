import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
//@ts-ignore
import { Cart, CartItem, ItemPrice, ItemUnit } from '@types/cartTypes'

export interface IShoppingCartState {
  items: Cart
}

const initialState: IShoppingCartState = {
  items: {},
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<CartItem>) => {
      if(state.items[action.payload.id]) {
        state.items[action.payload.id] = {
          ...state.items[action.payload.id],
          ...action.payload
        }
      } else {
        //Если первоначально пользователь добавляет товар, но ещё не выбрал единицу, то ставлю первую из списка
        state.items[action.payload.id] = {
          ...action.payload,
          unit: action.payload.unit ?
            action.payload.unit :
            action.payload.item?.units[0] ? action.payload.item.units[0].name : ''
        }
      }
    },
    setItemUnit: (state, action: PayloadAction<ItemUnit>) => {
      state.items[action.payload.id] = { id: action.payload.id, unit: action.payload.unit }
    },
    setItemPrice: (state, action: PayloadAction<ItemPrice>) => {
      if(state.items[action.payload.id]) {
        state.items[action.payload.id].price = action.payload.price
      }
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      if(state.items[action.payload.id]) {
        delete state.items[action.payload.id]
      }
    }
  }
})

export const setCartItemThunk = createAsyncThunk(
  'shoppingCart/setItems',
  async (item: CartItem, thunkAPI) => {
    try {
      thunkAPI.dispatch(setItem(item))
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
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setItemUnitThunk = createAsyncThunk(
  'shoppingCart/setItemUnit',
  async (item: ItemUnit, thunkAPI) => {
    try {
      thunkAPI.dispatch(deleteItem(item))
      thunkAPI.dispatch(setItemUnit(item))
      thunkAPI.dispatch(setItem(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setItemPriceThunk = createAsyncThunk(
  'shoppingCart/setItemUnit',
  async (item: ItemPrice, thunkAPI) => {
    try {
      thunkAPI.dispatch(setItemPrice(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const {
  setItem,
  setItemUnit,
  setItemPrice,
  deleteItem,
} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
