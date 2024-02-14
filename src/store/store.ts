import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer, { IColorThemeState } from '@store/colorThemeStore'

export interface IStore {
  theme: IColorThemeState
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
