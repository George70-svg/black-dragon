import { axiosInstance } from '@endpoints/axios'
import { Condition, Orders } from '@endpoints/endpoints/cart/type'
import { ProductType } from '@endpoints/endpoints/products/types'

export const cart = {
  async condition(): Promise<Condition> {
    return axiosInstance.get('/price/conditions')
      .then(data => {
        return data.data
      })
  },
  async checkout(productType: ProductType, orders: Orders): Promise<void> {
    return axiosInstance.post(
      '/order',
      {
        priceType: productType,
        order: orders
      }
    )
  },
}
