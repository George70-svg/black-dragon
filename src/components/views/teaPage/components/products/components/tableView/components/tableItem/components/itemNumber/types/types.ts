import { Product } from '@endpoints/endpoints/products/types'

export type ItemNumberProps = {
  product: Product
  itemId: string
  disabled: boolean
}
