import { products } from '@endpoints/endpoints/products/products'
import { auth } from '@endpoints/endpoints/auth/auth'
import { cart } from '@endpoints/endpoints/cart/cart'

export const endpoints = {
  products: products,
  auth: auth,
  cart: cart
}
