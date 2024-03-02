import { AxiosResponse } from 'axios'
import { axiosInstance } from '@endpoints/axios'
import { PaginationResult } from '@endpoints/types'
import { CategoriesItem, Product, ProductFilters } from '@endpoints/endpoints/products/types'

export const products = {
  async prices(filters?: ProductFilters): Promise<Product[]> {
    const params = {
      type: filters?.productType,
      group: filters?.maybeGroupType || null,
      fabric: filters?.maybeFabrics || null,
      isNew: filters?.isNew ? filters.isNew : null,
      inStock: filters?.isInStock ? filters.isInStock : null,
      minPrice: filters?.maybePriceStart || null,
      maxPrice: filters?.maybePriceEnd || null,
      pageZeroBasedNumber: 0,
      pageSize: 10,
    }

    return axiosInstance.get(
      '/price',
      {
        params,
      },
    )
      .then(({ data }: AxiosResponse<PaginationResult<Product[]>>) => {
        return data.resource
      })
  },
  async groups(type: 'TEA' | 'DISH'): Promise<CategoriesItem[]> {
    const params = {
      groupsFor: type,
    }

    return axiosInstance.get(
      '/price/groups',
      {
        params,
      },
    )
      .then(({ data }: AxiosResponse<CategoriesItem[]>) => {
        return data
      })
  },
}
