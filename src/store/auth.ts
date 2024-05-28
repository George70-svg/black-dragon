import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { AuthView, LoginData, RegisterData, ServerError, User } from '@endpoints/endpoints/auth/types'
import { endpoints } from '@endpoints/endpoints'
import { AxiosError } from 'axios'

export interface IAuthState {
  user: User | null
  authView: AuthView
  loginServerError: ServerError | null
  registerServerError: ServerError | null
}

const initialState: IAuthState = {
  user: null,
  authView: 'login',
  loginServerError: null,
  registerServerError: null
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
    setLoginError: (state, action: PayloadAction<ServerError | null>) => {
      const error = action.payload
      state.loginServerError = error
    },
    setRegisterError: (state, action: PayloadAction<ServerError | null>) => {
      const error = action.payload
      state.registerServerError = error
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
      dispatch(setRegisterError(null))
    } catch(error) {
      console.error(error)
      dispatch(setRegisterError((error as AxiosError).response?.data as ServerError ?? null))
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
      dispatch(setLoginError(null))
    } catch(error) {
      console.error(error)

      if((error as AxiosError).response?.status === 401) {
        dispatch(setLoginError({
          code: 401,
          message: 'Неверный логин или пароль',
          type: 'VALIDATION_DATA'
        }))
      }
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
      dispatch(setLoginError(null))
      dispatch(setRegisterError(null))
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
      dispatch(setUser({ name: user.name, email: user.email, phoneNumber: user.maybePhoneNumber }))
    } catch(error) {
      console.error(error)
    }
  }
)

export const {
  setAuthView,
  setUser,
  deleteUser,
  setLoginError,
  setRegisterError
} = authSlice.actions

export default authSlice.reducer
