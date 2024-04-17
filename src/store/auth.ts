import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type AuthView = 'login' | 'registration' | 'done'

export interface IAuthState {
  user: any
  authView: AuthView
}

const initialState: IAuthState = {
  user: {},
  authView: 'login'
}

export const authSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setAuthView: (state, action: PayloadAction<AuthView>) => {
      state.authView = action.payload
    }
  }
})

export const setAuthViewThunk = createAsyncThunk(
  'shoppingCart/setItems',
  async (viewName: AuthView, thunkAPI) => {
    thunkAPI.dispatch(setAuthView(viewName))
  }
)

export const {
  setAuthView
} = authSlice.actions

export default authSlice.reducer
