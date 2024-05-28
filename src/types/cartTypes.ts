import { Product, ProductType } from '@endpoints/endpoints/products/types'
import { Orders } from '@endpoints/endpoints/cart/type'

export type CartItem = {
  id: string
  item?: Product
  number?: number
  region?: string
  unit?: string
  price?: number
}

export type CartDataPayload = {
  shippingPoint?: string
  weight?: number
  price?: number
  actionType?: '+' | '-'
}

export type ItemUnit = {
  id: string
  unit: string
}

export type ItemPrice = {
  id: string
  price: number
}

export type ItemNumber = {
  id: string
  number: number
}

export type Cart = Record<string, CartItem>

export type ProblemOrderStatus = {
  status: boolean
  message: string
}

export type OrderData = {
  productType: ProductType
  orders: Orders
}
