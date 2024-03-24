import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledTeaPage } from '@components/views/teaPage/styles/teaPage.styled'
import { IStore, useAppDispatch } from '@store/store'
import { getProductCatalogThunk, getProductFabricsThunk, getGroupsForFilterThunk, getProductsThunk } from '@store/products'
import { Categories } from '@components/views/teaPage/components/categories/categories'
import { Filters } from '@components/views/teaPage/components/filters/filters'
import { Products } from '@components/views/teaPage/components/products/products'

import { commonStyle } from '../../../styles'

export function TeaPage() {
  const dispatch = useAppDispatch()
  const productGroup = useSelector((state: IStore) => state.products.filters.productType)

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getProductCatalogThunk())
    dispatch(getProductFabricsThunk())
    dispatch(getGroupsForFilterThunk(productGroup))
  }, [dispatch, productGroup])

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledTeaPage>
        {/*<News />*/}
        <Categories />
        <Filters />
        <Products />
      </StyledTeaPage>
    </ThemeProvider>
  )
}
