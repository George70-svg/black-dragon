import { Product } from '@endpoints/endpoints/products/types'

export type ItemSelectorProps = {
  product: Product
  itemId: string
  isDisabled: boolean
}
