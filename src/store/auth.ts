import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { AuthView, LoginData, RegisterData, ServerError, User } from '@endpoints/endpoints/auth/types'
import { endpoints } from '@endpoints/endpoints'

export interface IAuthState {
  user: User | null
  authView: AuthView
  loginServerErrors: ServerError[]
  registerServerErrors: ServerError[]
}

const initialState: IAuthState = {
  user: null,
  authView: 'login',
  loginServerErrors: [],
  registerServerErrors: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthView: (state, action: PayloadAction<AuthView>) => {
      state.authView = action.payload
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      if (action.payload) {
        state.user = action.payload
      } else {
        state.user = null
      }
    },
    deleteUser: (state) => {
      state.user = null
    },
    setLoginErrors: (state, action) => {
      const errors = action.payload
      state.loginServerErrors = errors.response
    },
    setRegisterErrors: (state, action) => {
      const errors = action.payload
      state.registerServerErrors = errors.response
    }
  }
})

export const setAuthViewThunk = createAsyncThunk(
  'auth/setAuthView',
  async (viewName: AuthView, { dispatch }) => {
    dispatch(setAuthView(viewName))
  }
)

export const registerThunk = createAsyncThunk(
  'auth/registerThunk',
  async (data: RegisterData, { dispatch }) => {
    try {
      await endpoints.auth.register(data)
      dispatch(whoamiThunk())
      dispatch(setAuthViewThunk('done'))
    } catch(error) {
      console.error(error)
      dispatch(setRegisterErrors(error))
      throw error
    }
  }
)

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (data: LoginData, { dispatch }) => {
    try {
      await endpoints.auth.login(data)
      dispatch(setAuthViewThunk(null))
      dispatch(whoamiThunk())
    } catch(error) {
      console.error(error)
      dispatch(setLoginErrors(error))
      throw error
    }
  }
)

export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, { dispatch }) => {
    try {
      await endpoints.auth.logout()
      dispatch(deleteUser())
    } catch(error) {
      console.error(error)
    }
  }
)

export const whoamiThunk = createAsyncThunk(
  'auth/whoamiThunk',
  async (_, { dispatch }) => {
    try {
      const user = await endpoints.auth.whoami()
      dispatch(setUser({ email: user.email, phoneNumber: user.maybePhoneNumber }))
    } catch(error) {
      console.error(error)
    }
  }
)

export const {
  setAuthView,
  setUser,
  deleteUser,
  setLoginErrors,
  setRegisterErrors
} = authSlice.actions

export default authSlice.reducer
