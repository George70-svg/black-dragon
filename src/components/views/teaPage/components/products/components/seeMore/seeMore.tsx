import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { setPageNumberThunk } from '@store/products'
import { Button } from '@mui/material'
import { StyledSeeMore } from '@components/views/teaPage/components/products/components/seeMore/styles/seeMore.styled'

import { commonStyle } from '../../../../../../../styles'

export function SeeMore() {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const isLoading = useSelector((state: IStore) => state.products.isProductsUpdate)
  const totalCount = useSelector((state: IStore) => state.products.totalCount)
  const productCount = useSelector((state: IStore) => state.products.products.length)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const filters = useSelector((state: IStore) => state.products.filters)

  const handlePageChange = () => {

    dispatch(setPageNumberThunk(filters.pageNumber + 1))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledSeeMore>
        <Button
          variant="text"
          className='seeMoreButton'
          disabled={productCount >= totalCount || isLoading}
          onClick={() => handlePageChange()}
        >
          Показать еще
        </Button>
      </StyledSeeMore>
    </ThemeProvider>
  )
}
