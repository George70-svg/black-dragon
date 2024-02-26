import React from 'react'
import { StyledTeaPage } from '@components/views/teaPage/styles/teaPage.styled'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { Categories } from '@components/views/teaPage/components/categories/categories'
import { Filters } from '@components/views/teaPage/components/filters/filters'
import { Goods } from '@components/views/teaPage/components/goods/goods'

import { commonStyle } from '../../../styles'

export function TeaPage() {
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
        <Goods />
      </StyledTeaPage>
    </ThemeProvider>
  )
}
