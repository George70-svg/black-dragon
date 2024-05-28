import React, { useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { Box, InputAdornment, TextField } from '@mui/material'
import { IStore, useAppDispatch } from '@store/store'
import { StyledMenuSearch } from '@components/header/components/menu/components/menuSearch/styles/menuSearch.styled'
import { updateProductFilterThunk } from '@store/products'
import { debounce } from '@utils/common'
import Icons from '@icons/icons'
import { ValueType } from '@components/views/teaPage/types/types'
import { updateProductFilter } from '@components/views/teaPage/utils/common'
import { ProductFilters } from '@endpoints/endpoints/products/types'

import { commonStyle } from '../../../../../../styles'

export function MenuSearch() {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const filters = useSelector((state: IStore) => state.products.filters)
  const isDisabledFilters = useSelector((state: IStore) => state.products.isProductsUpdate)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const handleProductFilterChange = (filterName: string, value: ValueType) => {
    let newFilters = { ...filters }
    newFilters = updateProductFilter(filters, filterName as keyof ProductFilters, value)
    dispatch(updateProductFilterThunk(newFilters))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    debouncedChangeHandler(event.target.name, value)
  }

  const debouncedChangeHandler = useCallback(
    debounce((filterName, value) => {
      handleProductFilterChange(filterName, value)
    }, 500),
    [handleProductFilterChange]
  )

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuSearch>
        <Box className='input-container'>
          <TextField
            className='input-search'
            id='outlined-start-adornment'
            placeholder='Найти на сайте'
            color='primary'
            InputProps={{
              endAdornment: <InputAdornment position='start'>
                <Icons name='search' color='#fff' size='24' className='icon' />
              </InputAdornment>,
            }}
            name='searchText'
            onChange={handleChange}
            disabled={isDisabledFilters}
          />
        </Box>
      </StyledMenuSearch>
    </ThemeProvider>
  )
}
