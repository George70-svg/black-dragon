import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer, { IColorThemeState } from '@store/colorThemeStore'
import productsReducer, { IProductsState } from '@store/products'
import cardImagesReducer, { ICardImagesState } from '@store/cardImages'

export interface IStore {
  theme: IColorThemeState
  products: IProductsState
  cardImages: ICardImagesState
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    cardImages: cardImagesReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
