import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledFilters } from '@components/views/teaPage/components/filters/styles/filters.styled'
import { IStore, useAppDispatch } from '@store/store'
import { updateProductFilterThunk } from '@store/products'
import { updateProductFilter } from '@components/views/teaPage/utils/common'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'
import { FilterSwitch } from '@components/views/teaPage/components/filters/components/filterSwitch'
import { FilterInput } from '@components/views/teaPage/components/filters/components/filterInput'
import { FilterCheckbox } from '@components/views/teaPage/components/filters/components/filterCheckbox'
import { SelectorOption } from '@components/views/teaPage/components/filters/types/types'
import { ProductFilters } from '@endpoints/endpoints/products/types'
import { ValueType } from '@components/views/teaPage/types/types'

import { commonStyle } from '../../../../../styles'

export function Filters() {
  const dispatch = useAppDispatch()

  const filters = useSelector((state: IStore) => state.products.filters)
  const isDisabledFilters = useSelector((state: IStore) => state.products.isProductsUpdate)
  const categoriesItems = useSelector((state: IStore) => state.products?.categories[0]?.subItems) || []

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleProductFilterChange = (filterName: keyof ProductFilters, value: ValueType) => {
    const newFilters = updateProductFilter(filters, filterName, value)

    dispatch(updateProductFilterThunk(newFilters))
  }

  const optionsTypes: SelectorOption[] = [
    { value: 'SPB_TEA', name: 'СПБ чай' },
    { value: 'SPB_DISH', name: 'СПБ посуда' },
    { value: 'CHINA', name: 'Китай' },
    { value: 'CHINA_VIP', name: 'Китай ВИП' },
  ]

  const optionsGroups: SelectorOption[] = [
    { value: '', name: 'Группа товаров' },
    ...categoriesItems
  ]

  const optionsFabrics: SelectorOption[] = [
    { value: '', name: 'Фабрика' },
    { value: 'SPB', name: 'СПБ' },
    { value: 'CHINA', name: 'Китай' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <StyledFilters>
        <div className="filter-group-1">
          <div className="selectors-group">
            <TSelector
              iconName="list-1"
              options={optionsTypes}
              initialValue={filters.productType}
              filterName="productType"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            />

            <TSelector
              iconName="list-2"
              options={optionsGroups}
              initialValue={filters.maybeGroupType}
              filterName="maybeGroupType"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            />

            <TSelector
              iconName="location"
              options={optionsFabrics}
              initialValue={filters.maybeFabrics}
              filterName="maybeFabrics"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            />
          </div>

          <FilterSwitch />
        </div>

        <div className="filter-group-2">
          <FilterInput
            filterName={ [ 'maybePriceStart', 'maybePriceEnd' ] }
            initialValue={ [ filters.maybePriceStart, filters.maybePriceEnd ] }
            onChange={handleProductFilterChange}
            isDisabled={isDisabledFilters}
          />

          <div className="checkbox-container">
            <FilterCheckbox
              filterName="isNew"
              initialValue={filters.isNew}
              onChange={handleProductFilterChange}
              label="Новинка"
              isDisabled={isDisabledFilters}
            />

            <FilterCheckbox
              filterName="isInStock"
              initialValue={filters.isInStock}
              onChange={handleProductFilterChange}
              label="В наличии"
              isDisabled={isDisabledFilters}
            />

            {/*<FilterCheckbox
              filterName="isFavorites"
              initialValue={filters.isFavorites}
              onChange={handleProductFilterChange}
              label="Избранное"
              isDisabled={isDisabledFilters}
            />*/}
          </div>
        </div>
      </StyledFilters>
    </ThemeProvider>
  )
}
