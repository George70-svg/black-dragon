import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer, { IColorThemeState } from '@store/colorThemeStore'
import productsReducer, { IProductsState } from '@store/products'
import cardImagesReducer, { ICardImagesState } from '@store/cardImages'
import shoppingCartReducer, { IShoppingCartState } from '@store/shoppingСart'
import authReducer, { IAuthState } from '@store/auth'

export interface IStore {
  theme: IColorThemeState
  products: IProductsState
  cardImages: ICardImagesState
  cart: IShoppingCartState
  auth: IAuthState
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    cardImages: cardImagesReducer,
    cart: shoppingCartReducer,
    auth: authReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
