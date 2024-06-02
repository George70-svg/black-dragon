import { ProductType, UnitType } from '@endpoints/endpoints/products/types'

export type ItemMinOrderProps = {
  orderNumber: number
  orderUnit: UnitType
  itemId: string
  productType: ProductType
}
