import { ProductFilters } from '@endpoints/endpoints/products/types'

export const updateProductFilter = <T extends keyof ProductFilters>(
  filters: ProductFilters,
  filterName: T,
  value: ProductFilters[T],
): ProductFilters => {
  return {
    ...filters,
    [filterName]: value,
  }
}
