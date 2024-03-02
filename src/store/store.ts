import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer, { IColorThemeState } from '@store/colorThemeStore'
import productsReducer, { IProductsState } from '@store/products'

export interface IStore {
  theme: IColorThemeState
  products: IProductsState
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
