import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledFilters } from '@components/views/teaPage/components/filters/styles/filters.styled'
import { deduplicate } from '@utils/common'
import { IStore, useAppDispatch } from '@store/store'
import { updateProductFilterThunk } from '@store/products'
import { updateProductFilter } from '@components/views/teaPage/utils/common'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'
import { TSearchSelector } from '@components/views/teaPage/components/filters/components/tSearchSelector'
import { FilterInput } from '@components/views/teaPage/components/filters/components/filterInput'
import { FilterCheckbox } from '@components/views/teaPage/components/filters/components/filterCheckbox'
import { FiltersProps, SelectorOption } from '@components/views/teaPage/components/filters/types/types'
import { ProductFilters } from '@endpoints/endpoints/products/types'
import { ValueType } from '@components/views/teaPage/types/types'

import { commonStyle } from '../../../../../styles'

export function Filters(props: FiltersProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const filters = useSelector((state: IStore) => state.products.filters)
  const isDisabledFilters = useSelector((state: IStore) => state.products.isProductsUpdate)
  const fabricsItems = useSelector((state: IStore) => state.products?.fabrics) || []
  //const groupItems = useSelector((state: IStore) => state.products?.groups) || []

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleProductFilterChange = (filterName: string, value: ValueType) => {
    let newFilters = { ...filters }

    if(filterName === 'productType') {

    }

    if(filterName === 'maybeGroup') {
      newFilters = updateProductFilter(filters, 'type' , 'POS_GROUP')
      newFilters = updateProductFilter(filters, filterName as keyof ProductFilters, value)
    } else {
      newFilters = updateProductFilter(filters, filterName as keyof ProductFilters, value)
    }

    dispatch(updateProductFilterThunk(newFilters))
  }

  const optionsTypes: SelectorOption[] = [
    { value: 'SPB', name: 'СПБ' },
    { value: 'CHINA', name: 'Китай' },
  ]

  /*const optionsGroups: SelectorOption[] = [
    { value: '', name: 'Группа товаров' },
    ...groupItems
  ]*/

  const optionsFabrics: SelectorOption[] = [
    { value: 'fabric', name: 'Фабрика' },
    ...deduplicate(fabricsItems).map(fabric => ({ value: fabric, name: fabric }))
  ]

  return (
    <ThemeProvider theme={theme}>
      <StyledFilters>
        <div className="filter-group-1">
          <div className="selectors-group">
            {props.productType && <TSelector
              iconName="list-1"
              options={optionsTypes}
              initialValue={filters.productType}
              filterName="productType"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            />}

            {/*{props.maybeGroup && TSelector
              iconName="list-2"
              options={optionsGroups}
              initialValue={filters.maybeGroup}
              filterName="maybeGroup"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            /}*/}

            {props.maybeFabrics && <TSearchSelector
              iconName="location"
              options={optionsFabrics}
              initialValue={filters.maybeFabrics}
              filterName="maybeFabrics"
              onChange={handleProductFilterChange}
              isDisabled={isDisabledFilters}
            />}
          </div>

          {/*<FilterSwitch />*/}
        </div>

        <div className="filter-group-2">
          {props.price && <FilterInput
            filterName={['maybePriceStart', 'maybePriceEnd']}
            initialValue={[filters.maybePriceStart, filters.maybePriceEnd]}
            onChange={handleProductFilterChange}
            isDisabled={isDisabledFilters}
          />}

          <div className="checkbox-container">
            {props.isNew && <FilterCheckbox
              filterName="isNew"
              initialValue={filters.isNew}
              onChange={handleProductFilterChange}
              label="Новинка"
              isDisabled={isDisabledFilters}
            />}

            {/*Этот фильтр нужен только для Санкт-Петербурга*/}
            {filters.productType === 'SPB' && props.isInStock &&
              <FilterCheckbox
                filterName="isInStock"
                initialValue={filters.isInStock}
                onChange={handleProductFilterChange}
                label="В наличии"
                isDisabled={isDisabledFilters}
              />
            }

            {/*{props.isFavorites && FilterCheckbox
              filterName="isFavorites"
              initialValue={filters.isFavorites}
              onChange={handleProductFilterChange}
              label="Избранное"
              isDisabled={isDisabledFilters}
            /}*/}
          </div>
        </div>
      </StyledFilters>
    </ThemeProvider>
  )
}
