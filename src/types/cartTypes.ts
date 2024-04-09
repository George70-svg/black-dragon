import { Product, ProductType } from '@endpoints/endpoints/products/types'

export type CartItem = {
  id: string
  item: Product
  number: number
  region: string
}

export type Cart = Record<string, CartItem>
