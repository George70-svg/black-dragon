import { Product } from '@endpoints/endpoints/products/types'

export type CartItem = {
  id: string
  item: Product
  number: number
  region: string
  actionType: '+' | '-'
}

export type cartDataPayload = {
  shippingPoint: string
  weight: number
  price: number
  actionType: '+' | '-'
}

export type Cart = Record<string, CartItem>
