import { AxiosResponse } from 'axios'
import { axiosInstance } from '@endpoints/axios'
import { PaginationResult } from '@endpoints/types'
import {
  CatalogItem,
  CategoryItem,
  CategoryValue,
  Product,
  ProductFilters,
} from '@endpoints/endpoints/products/types'

export const products = {
  async prices(filters?: ProductFilters): Promise<Product[]> {
    const params = {
      type: filters?.productType,
      group: filters?.maybeGroupType || null,
      fabric: filters?.maybeFabrics || null,
      isNew: filters?.isNew ? filters.isNew : null,
      inStock: (filters?.isInStock && (filters?.productType === 'SPB_TEA' || filters?.productType === 'SPB_DISH')) ? filters.isInStock : null,
      minPrice: filters?.maybePriceStart || null,
      maxPrice: filters?.maybePriceEnd || null,
      pageZeroBasedNumber: 0,
      pageSize: 15,
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
  async catalog(): Promise<CatalogItem[]> {
    return axiosInstance.get('/catalog')
      .then(({ data }: AxiosResponse<Record<'items', CatalogItem[]>>) => {
        return data.items
      })
  },
  async groups(type: CategoryValue): Promise<CategoryItem[]> {
    const params = {
      groupsFor: type,
    }

    return axiosInstance.get(
      '/price/catalog',
      {
        params,
      },
    )
      .then(({ data }: AxiosResponse<CategoryItem[]>) => {
        return data
      })
  },
  async fabrics(): Promise<string[]> {
    return axiosInstance.get(
      '/price/fabrics'
    )
      .then(({ data }: AxiosResponse<string[]>) => {
        return data
      })
  }
}
