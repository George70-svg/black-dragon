import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledPagination } from '@components/views/teaPage/components/products/components/pagination/styles/pagination.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../../styles'

export function Pagination() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledPagination>
        Pagination
      </StyledPagination>
    </ThemeProvider>
  )
}
