import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
//@ts-ignore
import { Cart, CartItem, ItemPrice, ItemUnit, OrderData, ProblemOrderStatus } from '@types/cartTypes'
import { Condition } from '@endpoints/endpoints/cart/type'
import { endpoints } from '@endpoints/endpoints'
import { IStore } from '@store/store'

export interface IShoppingCartState {
  items: Cart
  condition: Condition | null
  isCheckoutDone: boolean
  isCheckoutProblem: boolean
  problemOrderStatus: ProblemOrderStatus
}

const initialState: IShoppingCartState = {
  items: {},
  condition: null,
  isCheckoutDone: false,
  isCheckoutProblem: false,
  problemOrderStatus: {
    status: false,
    message: ''
  }
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
    deleteItem: (state, action: PayloadAction<string>) => {
      if(state.items[action.payload]) {
        delete state.items[action.payload]
      }
    },
    setCondition: (state, action: PayloadAction<Condition>) => {
      state.condition = action.payload
    },
    setProblemOrderStatus: (state, action: PayloadAction<ProblemOrderStatus>) => {
      state.problemOrderStatus = { ...action.payload }
    },
    setCheckoutDoneStatus: (state, action: PayloadAction<boolean>) => {
      state.isCheckoutDone = action.payload
    },
    setCheckoutProblemStatus: (state, action: PayloadAction<boolean>) => {
      state.isCheckoutProblem = action.payload
    }
  }
})

export const setCartItemThunk = createAsyncThunk(
  'shoppingCart/setItems',
  async (item: CartItem, { dispatch }) => {
    try {
      dispatch(setItem(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const deleteCartItemThunk = createAsyncThunk(
  'shoppingCart/deleteItems',
  async (itemId: string, { dispatch }) => {
    try {
      dispatch(deleteItem(itemId))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setItemUnitThunk = createAsyncThunk(
  'shoppingCart/setItemUnit',
  async (item: ItemUnit, { dispatch }) => {
    try {
      dispatch(deleteItem(item.id))
      dispatch(setItemUnit(item))
      dispatch(setItem(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setItemPriceThunk = createAsyncThunk(
  'shoppingCart/setItemUnit',
  async (item: ItemPrice, { dispatch }) => {
    try {
      dispatch(setItemPrice(item))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setCartConditionThunk = createAsyncThunk(
  'shoppingCart/setCartCondition',
  async (_, { dispatch }) => {
    try {
      const res = await endpoints.cart.condition()
      dispatch(setCondition(res))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setProblemOrderStatusThunk = createAsyncThunk(
  'shoppingCart/setProblemOrderStatus',
  async (orderStatus: ProblemOrderStatus, { dispatch, getState }) => {
    dispatch(setProblemOrderStatus(orderStatus))

    if(orderStatus.status) {
      dispatch(setCheckoutProblemStatus(true))
      dispatch(setCheckoutDoneStatus(false))
    } else {
      dispatch(setCheckoutProblemStatus(false))
      dispatch(setCheckoutDoneStatus(true))
    }

    return (getState() as IStore).cart.problemOrderStatus
  }
)

export const checkoutThunk = createAsyncThunk(
  'shoppingCart/checkout',
  async (data: OrderData, { dispatch }) => {
    try {
      await endpoints.cart.checkout(data.productType, data.orders)
      dispatch(setCheckoutDoneStatus(true))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setCheckoutDoneStatusThunk = createAsyncThunk(
  'shoppingCart/setCheckoutDoneStatus',
   (_, { dispatch }) => {
    try {
      dispatch(setCheckoutDoneStatus(false))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const setCheckoutProblemStatusThunk = createAsyncThunk(
  'shoppingCart/setCheckoutProblemStatus',
  (_, { dispatch }) => {
    try {
      dispatch(setCheckoutProblemStatus(false))
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
  setCondition,
  setProblemOrderStatus,
  setCheckoutDoneStatus,
  setCheckoutProblemStatus
} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
