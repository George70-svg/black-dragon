import { AxiosResponse } from 'axios'
import { axiosInstance } from '@endpoints/axios'
import { PaginationResult } from '@endpoints/types'
import {
  CatalogItem,
  GroupItem,
  ImageRequestType, ImageResponseType,
  ImageType,
  Product,
  ProductFilters,
  ProductType,
} from '@endpoints/endpoints/products/types'

export const products = {
  async prices(filters?: ProductFilters): Promise<PaginationResult<Product[]>> {
    const params = {
      priceType: filters?.productType,
      catalogItemType: filters?.type || null,
      group: filters?.maybeGroup || null,
      fabric: (filters?.maybeFabrics && filters?.maybeFabrics !== 'fabric') ? filters.maybeFabrics : null, //Ищем все фабрики если по дефолту выбран фильт Фабрика
      isNew: filters?.isNew ? filters.isNew : null,
      inStock: (filters?.isInStock && (filters?.productType === 'SPB')) ? filters.isInStock : null, //Фильтр в наличии работает только для СПБ
      minPrice: filters?.maybePriceStart || null,
      maxPrice: filters?.maybePriceEnd || null,
      pageZeroBasedNumber: filters?.pageNumber || 0,
      pageSize: 20,
    }

    return axiosInstance.get(
      '/price',
      {
        params,
      },
    )
      .then(({ data }: AxiosResponse<PaginationResult<Product[]>>) => {
        return data
      })
  },
  async catalog(): Promise<CatalogItem[]> {
    return axiosInstance.get('/catalog')
      .then(({ data }: AxiosResponse<Record<'items', CatalogItem[]>>) => {
        return data.items
      })
  },
  async groups(type: ProductType): Promise<GroupItem[]> {
    const params = {
      groupsFor: type,
    }

    return axiosInstance.get(
      '/price/groups',
      {
        params,
      },
    )
      .then(({ data }: AxiosResponse<GroupItem[]>) => {
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
  },
  async getImage(data: ImageType): Promise<ImageResponseType> {
    const params: ImageRequestType = {
      art: data.art,
      imageId: data.mainImageId
    }

    return axiosInstance.get(
      '/positions/pool/image/get',
      {
        params,
        responseType: 'blob'
      }
    )
      .then(({ data }: AxiosResponse<Blob>) => {
        const src = URL.createObjectURL(data)

        return {
          id: params.imageId,
          src
        }
      })
  },
}
